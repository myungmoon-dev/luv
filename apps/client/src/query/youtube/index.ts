import { useQuery } from "@tanstack/react-query";
import youtubeKeys from "./keys";
import { getLive, getYoutube } from "@/api/youtube";
import { YoutubeType } from "type";

export interface IGetYoutubeListProps {
  videoType: YoutubeType;
  videoCount?: number;
}

export const useGetYoutubeLink = (type: YoutubeType) => {
  const queryKey = youtubeKeys[type]();

  return useQuery({
    queryKey,
    queryFn: async () => await getYoutube(type),
  });
};

export const useGetLive = () => {
  return useQuery({
    queryKey: youtubeKeys.live(),
    queryFn: () => getLive(),
    select: (res) => res.live,
  });
};
