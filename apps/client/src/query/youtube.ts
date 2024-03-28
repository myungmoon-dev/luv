import { useQuery } from "@tanstack/react-query";
import youtubeKeys from "./youtube/keys";
import { YoutubeType, getYoutubeLink } from "@/api/youtube";

export const useGetYoutubeLink = (type: YoutubeType) => {
  const queryKey = youtubeKeys[type]();

  return useQuery({
    queryKey,
    queryFn: async () => await getYoutubeLink(type),
    select: (response) => response.youtubeLink[0],
  });
};
