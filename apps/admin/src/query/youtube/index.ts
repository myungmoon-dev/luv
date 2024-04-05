import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getYoutubeLink, postYoutubeLink } from "@/api/youtube";
import youtubeKeys from "./keys";
import { YoutubeType } from "type";

// FIXME: youtube 객체를 항상 1개를 가져옴
export const useGetYoutubeLink = (type: YoutubeType) => {
  const queryKey = youtubeKeys[type]();

  return useQuery({
    queryKey,
    queryFn: async () => await getYoutubeLink(type),
    select: (response) => response.youtubeList[0].videoId,
  });
};

export const usePostYoutubeLink = (type: YoutubeType) => {
  const queryClient = useQueryClient();
  const queryKey = youtubeKeys[type]();

  return useMutation({
    mutationFn: postYoutubeLink,
    onSuccess: async () =>
      await queryClient.invalidateQueries({
        queryKey,
      }),
    onError: (error) => console.error(error),
  });
};
