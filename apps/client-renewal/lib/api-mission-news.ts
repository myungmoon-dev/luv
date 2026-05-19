import { api } from "@/lib/api";
import type { IMissionNews, MissionLocation } from "type";

export type GetMissionsParams = {
  /** 목록 UI와 동일하게 1부터 */
  page: number;
  size: number;
  location?: MissionLocation;
};

type MissionNewsDto = {
  id: string;
  title: string;
  content: string;
  userName: string;
  date: string;
  location: string;
  imageUrls?: string[];
  createdAt: number;
  updatedAt: number;
};

function unwrapPayload(raw: unknown): unknown {
  if (raw && typeof raw === "object" && !Array.isArray(raw) && "data" in raw) {
    const inner = (raw as Record<string, unknown>).data;
    if (inner !== undefined) return inner;
  }
  return raw;
}

function mapMissionNewsDto(dto: MissionNewsDto): IMissionNews {
  return {
    _id: dto.id,
    title: dto.title,
    content: dto.content,
    userName: dto.userName,
    date: dto.date,
    location: dto.location as MissionLocation,
    createdAt: dto.createdAt,
    updatedAt: dto.updatedAt,
    imageUrls: Array.isArray(dto.imageUrls) ? dto.imageUrls.filter((u): u is string => typeof u === "string") : [],
  };
}

function parseMissionNewsDto(raw: Record<string, unknown>): MissionNewsDto | null {
  const idRaw = raw.id ?? raw._id;
  if (typeof idRaw !== "string") return null;
  const imageUrls = raw.imageUrls;
  return {
    id: idRaw,
    title: String(raw.title ?? ""),
    content: String(raw.content ?? ""),
    userName: String(raw.userName ?? ""),
    date: String(raw.date ?? ""),
    location: String(raw.location ?? ""),
    imageUrls: Array.isArray(imageUrls) ? imageUrls.filter((u): u is string => typeof u === "string") : [],
    createdAt: typeof raw.createdAt === "number" ? raw.createdAt : Number(raw.createdAt) || 0,
    updatedAt: typeof raw.updatedAt === "number" ? raw.updatedAt : Number(raw.updatedAt) || 0,
  };
}

function parsePagedMissionNews(payload: unknown): { list: MissionNewsDto[]; total: number } {
  const data = unwrapPayload(payload);

  if (Array.isArray(data)) {
    const list = data
      .map((item) =>
        item && typeof item === "object" ? parseMissionNewsDto(item as Record<string, unknown>) : null,
      )
      .filter((x): x is MissionNewsDto => x !== null);
    return { list, total: list.length };
  }

  if (data && typeof data === "object") {
    const o = data as Record<string, unknown>;
    const content = o.content;
    if (Array.isArray(content)) {
      const list = content
        .map((item) =>
          item && typeof item === "object" ? parseMissionNewsDto(item as Record<string, unknown>) : null,
        )
        .filter((x): x is MissionNewsDto => x !== null);
      const te = o.totalElements;
      const total =
        typeof te === "number"
          ? te
          : typeof te === "string"
            ? Number(te) || list.length
            : list.length;
      return { list, total };
    }
  }

  return { list: [], total: 0 };
}

/** GET /api/mission-news — query: location?, page(0부터), size */
export async function getMissions({ page, size, location }: GetMissionsParams): Promise<{
  missionNewsList: IMissionNews[];
  totalMissionNewsCount: number;
}> {
  const apiPage = Math.max(0, page - 1);
  const params: Record<string, string | number> = { page: apiPage, size };
  if (location !== undefined) params.location = location;

  const { data } = await api.get<unknown>("/mission-news", { params });
  const { list, total } = parsePagedMissionNews(data);

  return {
    missionNewsList: list.map(mapMissionNewsDto),
    totalMissionNewsCount: total,
  };
}

export async function getMission(missionId: string): Promise<IMissionNews | null> {
  const { data } = await api.get<unknown>(`/mission-news/${missionId}`);
  const raw = unwrapPayload(data);
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
  const dto = parseMissionNewsDto(raw as Record<string, unknown>);
  return dto ? mapMissionNewsDto(dto) : null;
}
