import { api } from ".";
import { IGetYoutubeListProps, IGetYoutubeResponse } from "type";

export const getYoutubeList = async ({ videoType, videoCount }: IGetYoutubeListProps) => {
  const { data } = await api.get<IGetYoutubeResponse>("/api/youtube", {
    params: { type: videoType, count: videoCount },
  });
  return data;
};
