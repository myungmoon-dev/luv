import { api } from "@/lib/api";
import { getVideosPage } from "@/lib/api-videos";
import type { IGetYoutubeResponse, YoutubeType } from "type";
import type { IGetLiveResponse } from "type/src/youtube";

export async function getLive() {
  const { data } = await api.get<IGetLiveResponse>("/live");
  return data;
}

/** 서버 page는 0부터 */
const DEFAULT_YOUTUBE_PAGE = 0;
const DEFAULT_YOUTUBE_PAGE_SIZE = 100;

/** 메인 등 단일 구역 목록 — 응답은 `{ videos, totalVideos }` 로 기존 컴포넌트와 호환 */
export async function getYoutube(
  type: YoutubeType,
  options?: { page?: number; size?: number },
): Promise<IGetYoutubeResponse> {
  const page = options?.page ?? DEFAULT_YOUTUBE_PAGE;
  const size = options?.size ?? DEFAULT_YOUTUBE_PAGE_SIZE;
  const { videos, totalElements } = await getVideosPage({ type, page, size });
  return { videos, totalVideos: totalElements };
}
