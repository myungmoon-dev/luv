import { api } from "@/lib/api";
import type { IYoutube, YoutubeType } from "type";

/** GET /api/videos 페이지 항목 (인터셉터 적용 후 본문은 { content, totalElements }) */
export type VideoListItemDto = {
  id: string;
  url: string;
  title: string;
  date: string;
  mainText: string;
  preacher: string;
  type: string;
  createdAt: number;
};

export type GetVideosPageParams = {
  /** 생략 시 서버가 타입 전체 목록 반환 */
  type?: YoutubeType;
  /** 서버 기준 0부터 */
  page: number;
  size: number;
};

function unwrapPayload(raw: unknown): unknown {
  if (raw && typeof raw === "object" && !Array.isArray(raw) && "data" in raw) {
    const inner = (raw as Record<string, unknown>).data;
    if (inner !== undefined) return inner;
  }
  return raw;
}

function parseVideoListPayload(payload: unknown): { items: VideoListItemDto[]; totalElements: number } {
  const data = unwrapPayload(payload);

  if (Array.isArray(data)) {
    return { items: data as VideoListItemDto[], totalElements: data.length };
  }

  if (data && typeof data === "object") {
    const o = data as Record<string, unknown>;
    const content = o.content;
    if (Array.isArray(content)) {
      const te = o.totalElements;
      const totalElements =
        typeof te === "number"
          ? te
          : typeof te === "string"
            ? Number(te) || content.length
            : content.length;
      return { items: content as VideoListItemDto[], totalElements };
    }
  }

  return { items: [], totalElements: 0 };
}

function mapToIYoutube(v: VideoListItemDto): IYoutube {
  return {
    id: v.id,
    url: v.url,
    title: v.title,
    date: v.date,
    mainText: v.mainText,
    preacher: v.preacher,
    type: v.type as YoutubeType,
    createdAt: v.createdAt,
  };
}

/** 페이지 단위 조회 (`type` 없으면 전체, 있으면 해당 타입만 — page는 0부터) */
export async function getVideosPage(params: GetVideosPageParams): Promise<{
  videos: IYoutube[];
  totalElements: number;
}> {
  const { type, page, size } = params;
  const query = type !== undefined ? { type, page, size } : { page, size };
  const { data } = await api.get<unknown>("/videos", { params: query });
  const { items, totalElements } = parseVideoListPayload(data);
  return {
    videos: items.map(mapToIYoutube),
    totalElements,
  };
}

/** 설교 목록 페이지 크기 (API `size`와 동일) */
export const SERMONS_PAGE_SIZE = 10;

/** 설교·찬양 보드: type 선택 가능, `apiPage`는 서버 기준 0부터 */
export async function getSermonsVideosPage(
  apiPage: number,
  type?: YoutubeType,
): Promise<{ videos: IYoutube[]; totalElements: number }> {
  return getVideosPage({ type, page: apiPage, size: SERMONS_PAGE_SIZE });
}
