import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { YoutubeType, getYoutubeLink, postYoutubeLink } from "@/api/youtube";
import youtubeKeys from "./keys";

interface IMutationProps {
  id: string;
}

export const useGetYoutubeLink = (type: YoutubeType) => {
  const queryKey = youtubeKeys[type]();

  return useQuery({
    queryKey,
    queryFn: async () => await getYoutubeLink(type),
    select: (response) => response.youtubeLink[0],
  });
};

export const usePostYoutubeLink = (type: YoutubeType) => {
  const queryClient = useQueryClient();
  const queryKey = youtubeKeys[type]();

  return useMutation({
    mutationFn: async ({ id }: IMutationProps) =>
      await postYoutubeLink({ id, type }),
    onSuccess: async () =>
      await queryClient.invalidateQueries({
        queryKey,
      }),
    onError: (error) => console.error(error),
  });
};
