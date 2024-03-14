import { IGetYoutubeResponse } from "@/types/youtube/response";
import { api } from ".";

// FIXME: YoutubeType은 packages/types로 빼야함
export type YoutubeType = "youtube" | "shorts" | "live";

export const getYoutubeLink = async (type: YoutubeType) => {
  const { data } = await api.get<IGetYoutubeResponse>("/api/youtube", {
    params: { type },
  });
  return data;
};
