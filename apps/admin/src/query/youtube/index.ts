import { getLive, getYoutube, postYoutube, putLive } from "@/api/youtube";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { YoutubeType } from "type";
import youtubeKeys from "./keys";

export const useGetYoutubeLink = (type: YoutubeType) => {
  const queryKey = youtubeKeys[type]();

  return useQuery({
    queryKey,
    queryFn: async () => await getYoutube(type),
    select: (res) => res.videos[0],
  });
};

export const usePostYoutubeLink = (type: YoutubeType) => {
  const queryClient = useQueryClient();
  const queryKey = youtubeKeys[type]();

  return useMutation({
    mutationFn: postYoutube,
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
