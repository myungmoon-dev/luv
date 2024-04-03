import { useQuery } from "@tanstack/react-query";
import { IYoutubeListProps } from "type";
import { getYoutubeList } from "@/api/youtube";
import youtubeKeys from "./keys";

export const useGetYoutubeList = ({ videoType }: IYoutubeListProps) => {
  const queryKey = youtubeKeys.list(videoType);

  return useQuery({
    queryKey,
    queryFn: () => getYoutubeList({ videoType }),
    select: (response) => response.youtubeList,
  });
};

// FIXME: 미구현
export const useGetYoutube = ({ videoId }: { videoId: string }) => {
  const queryKey = youtubeKeys.one(videoId);

  return useQuery({
    queryKey,
  });
};
