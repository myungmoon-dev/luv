import { api } from ".";

interface IPostFetcherProps {
  vid: string;
  type: YoutubeType;
}
// FIXME: types/youtube/response.ts로 빼야함
export type YoutubeType = "youtube" | "shorts" | "live";
interface IGetYoutubeResponse {
  youtubeLink: string[];
}
interface IPostYoutubeResponse {
  result: string;
}

export const fetcherGET = async (type: YoutubeType) => {
  const { data } = await api.get<IGetYoutubeResponse>("/api/youtube", {
    params: { type },
  });
  return data;
};

export const fetcherPOST = async ({ vid, type }: IPostFetcherProps) => {
  const { data } = await api.post<IPostYoutubeResponse>(
    "/api/youtube",
    {
      vid,
    },
    {
      params: {
        type,
      },
    }
  );
  return data;
};
