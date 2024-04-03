import { IGetYoutubeSermonListResponse } from "@/types/youtube/response";
import { api } from ".";
import { IYoutube, IYoutubeListProps } from "type";
import { IYoutubeProps } from "@/types/youtube/props";

interface IGetYoutubeListResponse {
  youtubeList: IYoutube[];
}

export const getYoutubeList = async ({ videoType }: IYoutubeListProps) => {
  const { data } = await api.get<IGetYoutubeListResponse>("/api/youtube", {
    params: { type: videoType },
  });
  return data;
};

// FIXME: 미구현
export const getYoutubeSermon = async ({}: IYoutubeProps) => {
  const { data } = await api.get<IGetYoutubeSermonListResponse>("/api/youtube/sermons", {});

  return data;
};
