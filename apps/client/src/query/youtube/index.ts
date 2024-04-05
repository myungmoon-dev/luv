import { useQuery } from "@tanstack/react-query";
import youtubeKeys from "./keys";
import { getYoutubeList } from "@/api/youtube";
import { YoutubeType } from "type";

export interface IGetYoutubeListProps {
  videoType: YoutubeType;
  videoCount?: number;
}

export const useGetYoutubeList = ({ videoType, videoCount }: IGetYoutubeListProps) => {
  const queryKey = youtubeKeys.list(videoType);

  return useQuery({
    queryKey,
    queryFn: () => getYoutubeList({ videoType, videoCount }),
    select: (response) => response.youtubeList,
  });
};
