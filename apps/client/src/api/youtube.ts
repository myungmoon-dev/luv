import { IGetLiveResponse } from "type/src/youtube";
import { api, isClientApiConfigured } from ".";
import { IGetYoutubeResponse, YoutubeType } from "type";

export interface IGetYoutbeRequest {
  videoType: YoutubeType;
  videoCount?: number;
}
export const getLive = async () => {
  if (!isClientApiConfigured()) {
    return { url: "", updatedAt: 0 };
  }
  const { data } = await api.get<IGetLiveResponse>("/live");
  return data;
};

export const getYoutube = async (type: YoutubeType) => {
  if (!isClientApiConfigured()) {
    return { content: [], page: 0, size: 0, totalElements: 0, totalPages: 0, isLast: true, isFirst: true,  };
  }
  const { data } = await api.get<IGetYoutubeResponse>("/videos", {
    params: { type },
  });
  return data;
};
