import {
  IGetYoutubeResponse,
  IPostYoutubeResponse,
} from "@/types/youtube/response";
import { api } from ".";

// FIXME: YoutubeType은 packages/types로 빼야함
export type YoutubeType = "youtube" | "shorts" | "live";
interface IPostFetcherProps {
  id: string;
  type: YoutubeType;
}

export const getYoutubeLink = async (type: YoutubeType) => {
  const { data } = await api.get<IGetYoutubeResponse>("/api/youtube", {
    params: { type },
  });
  return data;
};

export const postYoutubeLink = async ({ id, type }: IPostFetcherProps) => {
  const { data } = await api.post<IPostYoutubeResponse>(
    "/api/youtube",
    {
      id,
      type,
    },
    {
      params: {
        type,
      },
    }
  );
  return data;
};
