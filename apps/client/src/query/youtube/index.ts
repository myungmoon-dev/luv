import { useSuspenseQuery } from "@tanstack/react-query";

import { YoutubeType, getYoutubeLink } from "@/api/youtube";
import youtubeKeys from "./keys";

export const useGetYoutubeLink = (type: YoutubeType) => {
  const queryKey = youtubeKeys[type]();

  return useSuspenseQuery({
    queryKey,
    queryFn: () => getYoutubeLink(type),
    select: (response) => response.youtubeLink[0],
  });
};
