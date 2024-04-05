import { api } from ".";
import { IGetYoutubeResponse, YoutubeType } from "type";

export interface IGetYoutubeListProps {
  videoType: YoutubeType;
  videoCount?: number;
}

export const getYoutubeList = async ({ videoType, videoCount }: IGetYoutubeListProps) => {
  const { data } = await api.get<IGetYoutubeResponse>("/api/youtube", {
    params: { type: videoType, count: videoCount },
  });
  return data;
};
