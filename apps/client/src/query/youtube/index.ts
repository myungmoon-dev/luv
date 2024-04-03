import { useQuery } from "@tanstack/react-query";
import { getYoutubeLink } from "@/api/youtube";
import youtubeKeys from "./keys";
import { YoutubeType } from "type";

export const useGetYoutubeLink = (type: YoutubeType) => {
  const queryKey = youtubeKeys[type]();

  return useQuery({
    queryKey,
    queryFn: async () => await getYoutubeLink(type),
    select: (response) => response.youtubeLink[0],
  });
};
