import { IGetYoutubeResponse, IGetYoutubeSermonListResponse } from "@/types/youtube/response";
import { api } from ".";
import { IYoutubeProps } from "@/types/youtube/props";

export const getYoutubeLink = async ({ type, count }: IYoutubeProps) => {
  const { data } = await api.get<IGetYoutubeResponse>("/api/youtube", {
    params: { type, count },
  });
  return data;
};

export const getYoutubeSermon = async ({ type, count }: IYoutubeProps) => {
  const { data } = await api.get("/api/youtube/sermons", {
    params: { type, count },
  });

  return data;
};
