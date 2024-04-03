import { useQuery } from "@tanstack/react-query";
import { getYoutubeLink, getYoutubeSermon } from "@/api/youtube";
import youtubeKeys from "./keys";
import { IYoutubeProps } from "@/types/youtube/props";

export const useGetYoutubeLink = ({ type, count }: IYoutubeProps) => {
  const queryKey = youtubeKeys[type]();

  return useQuery({
    queryKey,
    queryFn: () => getYoutubeLink({ type, count }),
    select: (response) => response.youtubeLink[0],
  });
};

export const useGetYoutubeSermon = ({ type, count }: IYoutubeProps) => {
  const queryKey = youtubeKeys[type]();

  return useQuery({
    queryKey,
    queryFn: () => getYoutubeSermon({ type, count }),
  });
};
