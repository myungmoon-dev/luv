import { useQuery } from "react-query";
import youtubeKeys from "./youtube/keys";
import { YoutubeType } from "type";
import { getYoutubeLink } from "@/api/youtube";

export const useGetYoutubeLink = (type: YoutubeType) => {
  const queryKey = youtubeKeys[type]();

  return useQuery({
    queryKey,
    queryFn: async () => await getYoutubeLink(type),
    select: (response) => response.youtubeLink[0],
  });
};
