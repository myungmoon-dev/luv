import { IGetLiveResponse } from "type/src/youtube";
import { api, isClientApiConfigured } from ".";
import { IGetYoutubeResponse, YoutubeType } from "type";

export interface IGetYoutbeRequest {
  videoType: YoutubeType;
  videoCount?: number;
}
export const getLive = async () => {
  if (!isClientApiConfigured()) {
    return { live: { url: "", updatedAt: 0 } };
  }
  const { data } = await api.get<IGetLiveResponse>("/live");
  return data;
};

export const getYoutube = async (type: YoutubeType) => {
  if (!isClientApiConfigured()) {
    return { videos: [], totalVideos: 0 };
  }
  const { data } = await api.get<IGetYoutubeResponse>("/videos", {
    params: { type },
  });
  return data;
};
