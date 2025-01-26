import { IGetLiveResponse } from "type/src/youtube";
import { api } from ".";
import { IGetYoutubeResponse, YoutubeType } from "type";

export interface IGetYoutbeRequest {
  videoType: YoutubeType;
  videoCount?: number;
}
export const getLive = async () => {
  const { data } = await api.get<IGetLiveResponse>("/live");
  return data;
};

export const getYoutube = async (type: YoutubeType) => {
  const { data } = await api.get<IGetYoutubeResponse>("/videos", {
    params: { type },
  });
  return data;
};
