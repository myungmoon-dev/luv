import { getLive, getYoutubeLink, postYoutubeLink, putLive } from "@/api/youtube";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { YoutubeType } from "type";
import youtubeKeys from "./keys";

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

export const useGetLive = () => {
  return useQuery({
    queryKey: youtubeKeys.live(),
    queryFn: () => getLive(),
    select: (res) => res.live,
  });
};

export const usePutLive = () => useMutation({ mutationFn: putLive });
