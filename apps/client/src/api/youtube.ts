import { api } from ".";
import { IGetYoutubeResponse, YoutubeType } from "type";

export interface IGetYoutbeRequest {
  videoType: YoutubeType;
  videoCount?: number;
}

export const getYoutubeList = async ({ videoType, videoCount }: IGetYoutbeRequest) => {
  const { data } = await api.get<IGetYoutubeResponse>("/api/youtube", {
    params: { type: videoType, count: videoCount },
  });
  return data;
};
