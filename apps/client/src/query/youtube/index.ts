import { useQuery } from "@tanstack/react-query";
import youtubeKeys from "./keys";
import { IGetYoutubeListProps } from "type";
import { getYoutubeList } from "@/api/youtube";

export const useGetYoutubeList = ({ videoType, videoCount }: IGetYoutubeListProps) => {
  const queryKey = youtubeKeys[videoType]();

  return useQuery({
    queryKey,
    queryFn: () => getYoutubeList({ videoType, videoCount }),
    select: (response) => response.youtubeList,
  });
};
