import { api } from "@/lib/api";
import type { IGetYoutubeResponse, YoutubeType } from "type";
import type { IGetLiveResponse } from "type/src/youtube";

export async function getLive() {
  const { data } = await api.get<IGetLiveResponse>("/live");
  return data;
}

export async function getYoutube(type: YoutubeType) {
  const { data } = await api.get<IGetYoutubeResponse>("/videos", {
    params: { type },
  });
  return data;
}
