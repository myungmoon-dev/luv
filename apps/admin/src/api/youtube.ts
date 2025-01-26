import { IPostYoutubeResponse } from "@/types/youtube/response";
import { IGetYoutubeResponse, IYoutubeForm, YoutubeType } from "type";
import { api } from ".";
import { IGetLiveResponse } from "type/src/youtube";

export const getLive = async () => {
  const { data } = await api.get<IGetLiveResponse>("/live");
  return data;
};

export const putLive = async ({ liveUrl }: { liveUrl: string }) => {
  const { data } = await api.put("/live", { url: liveUrl });
  return data;
};

export const getYoutubeLink = async (type: YoutubeType) => {
  const { data } = await api.get<IGetYoutubeResponse>("/api/youtube", {
    params: { type },
  });
  return data;
};

export const postYoutubeLink = async (youtubeForm: IYoutubeForm) => {
  const { data } = await api.post<IPostYoutubeResponse>("/api/youtube", youtubeForm);
  return data;
};
