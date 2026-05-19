import { api } from "@/lib/api";
import type { IBulletin } from "type";

export type GetBulletinsParams = {
  /** URL 검색값과 동일, 1부터 */
  page: number;
  size: number;
};

type BulletinDto = {
  id?: string;
  _id?: string;
  date?: string;
  title?: string;
  imageUrls?: string[];
  image_urls?: string[];
  createdAt?: string | number;
};

function unwrapPayload(raw: unknown): unknown {
  if (raw && typeof raw === "object" && !Array.isArray(raw) && "data" in raw) {
    const inner = (raw as Record<string, unknown>).data;
    if (inner !== undefined) return inner;
  }
  return raw;
}

function parseBulletinList(payload: unknown): { list: unknown[]; total: number } {
  const data = unwrapPayload(payload);

  if (Array.isArray(data)) {
    return { list: data, total: data.length };
  }

  if (data && typeof data === "object") {
    const o = data as Record<string, unknown>;
    const content = o.content;
    if (Array.isArray(content)) {
      const te = o.totalElements;
      const total =
        typeof te === "number"
          ? te
          : typeof te === "string"
            ? Number(te) || content.length
            : content.length;
      return { list: content, total };
    }
  }

  return { list: [], total: 0 };
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

/** GET /api/bulletins — 서버는 page 0부터, 인자는 URL 기준 1부터 */
export async function getBulletins({ page, size }: GetBulletinsParams) {
  const apiPage = Math.max(0, page - 1);
  const { data } = await api.get<unknown>("/bulletins", {
    params: { page: apiPage, size },
  });

  const { list, total } = parseBulletinList(data);

  const bulletins = list
    .map((v) => mapBulletin(v as BulletinDto))
    .filter((b): b is IBulletin => b !== null);

  return { bulletins, totalBulletins: total };
}

export async function getBulletin(bulletinId: string) {
  const { data } = await api.get<unknown>(`/bulletins/${bulletinId}`);
  const raw = unwrapPayload(data);
  if (raw && typeof raw === "object" && !Array.isArray(raw)) {
    const mapped = mapBulletin(raw as BulletinDto);
    if (mapped) return mapped;
  }
  return data as IBulletin;
}
