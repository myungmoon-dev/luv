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

export const getYoutube = async (type: YoutubeType) => {
  const { data } = await api.get<IGetYoutubeResponse>("/videos", {
    params: { type },
  });
  return data;
};

export const postYoutube = async (youtubeForm: IYoutubeForm) => {
  const { data } = await api.post<IPostYoutubeResponse>("/videos", youtubeForm);
  return data;
};

export const deleteVideo = async ({ videoId }: { videoId: string }) => {
  const { data } = await api.delete(`/videos/${videoId}`);

  return data;
};

export const putVideo = async ({
  videoId,
  youtubeForm,
}: {
  videoId: string;
  youtubeForm: IYoutubeForm;
}) => {
  const { data } = await api.put(`/videos/${videoId}`, youtubeForm);

  return data;
};
