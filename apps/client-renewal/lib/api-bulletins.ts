import { api } from "@/lib/api";
import type { IBulletin } from "type";

export type GetBulletinsParams = { page: number; size: number };

type BulletinListResponse = { bulletins: IBulletin[]; totalBulletins: number };

type BulletinDto = {
  id?: string;
  _id?: string;
  createdAt?: string | number;
  date?: string;
  title?: string;
  imageUrls?: string[];
  image_urls?: string[];
};

function isBulletinListResponse(v: unknown): v is BulletinListResponse {
  return (
    typeof v === "object" &&
    v !== null &&
    "bulletins" in v &&
    Array.isArray((v as Record<string, unknown>).bulletins) &&
    "totalBulletins" in v
  );
}

function extractPagedList(payload: unknown): { list: unknown[]; total?: number } {
  if (!payload || typeof payload !== "object") return { list: [] };
  const o = payload as Record<string, unknown>;

  // Spring page style: { content: [...], totalElements: n }
  const content = o.content;
  if (Array.isArray(content)) {
    const totalElements = o.totalElements;
    const total =
      typeof totalElements === "number"
        ? totalElements
        : typeof totalElements === "string"
          ? Number(totalElements) || undefined
          : undefined;
    return { list: content, total };
  }

  // Generic list + total
  const items = o.items;
  if (Array.isArray(items)) {
    const total = typeof o.total === "number" ? o.total : undefined;
    return { list: items, total };
  }

  return { list: [] };
}

function mapBulletin(dto: BulletinDto): IBulletin | null {
  const id = dto._id ?? dto.id;
  if (!id) return null;

  const imageUrls = dto.imageUrls ?? dto.image_urls ?? [];
  const createdAt =
    typeof dto.createdAt === "string"
      ? dto.createdAt
      : typeof dto.createdAt === "number"
        ? String(dto.createdAt)
        : "";

  return {
    _id: String(id),
    createdAt,
    date: String(dto.date ?? ""),
    title: String(dto.title ?? ""),
    imageUrls: Array.isArray(imageUrls) ? imageUrls.filter((x): x is string => typeof x === "string") : [],
  };
}

export async function getBulletins({ page, size }: GetBulletinsParams) {
  const { data } = await api.get<unknown>("/bulletins", {
    params: { page, size },
  });

  if (isBulletinListResponse(data)) return data;

  // 인터셉터 미적용 시 { httpCode, data: ... } 형태
  const maybeEnvelopeData =
    data && typeof data === "object" ? (data as Record<string, unknown>).data : undefined;
  const payload = maybeEnvelopeData !== undefined ? maybeEnvelopeData : data;

  // 서버가 배열만 내려주는 경우 or { content, totalElements } 등
  const { list, total } = Array.isArray(payload)
    ? { list: payload as unknown[], total: undefined }
    : extractPagedList(payload);

  const bulletins = list
    .map((v) => mapBulletin(v as BulletinDto))
    .filter((b): b is IBulletin => b !== null);

  return { bulletins, totalBulletins: total ?? bulletins.length };
}

export async function getBulletin(bulletinId: string) {
  const { data } = await api.get<unknown>(`/bulletins/${bulletinId}`);
  if (data && typeof data === "object" && !Array.isArray(data)) {
    const mapped = mapBulletin(data as BulletinDto);
    if (mapped) return mapped;
  }
  return data as IBulletin;
}
