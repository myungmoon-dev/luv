import { IGetYoutubeResponse } from "@/types/youtube/response";
import { api } from ".";
import { YoutubeType } from "type";

export const getYoutubeLink = async (type: YoutubeType) => {
  const { data } = await api.get<IGetYoutubeResponse>("/api/youtube", {
    params: { type },
  });
  return data;
};
