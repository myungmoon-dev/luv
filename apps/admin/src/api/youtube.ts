import { IPostYoutubeResponse } from "@/types/youtube/response";
import { IGetYoutubeResponse, IYoutubeForm, YoutubeType } from "type";
import { api } from ".";

export const getYoutubeLink = async (type: YoutubeType) => {
  const { data } = await api.get<IGetYoutubeResponse>("/api/youtube", {
    params: { type },
  });
  return data;
};

export const postYoutubeLink = async (youtubeForm: IYoutubeForm) => {
  const { data } = await api.post<IPostYoutubeResponse>(
    "/api/youtube",
    youtubeForm
  );
  return data;
};
