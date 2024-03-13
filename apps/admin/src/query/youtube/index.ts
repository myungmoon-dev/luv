import { useMutation, useQuery, useQueryClient } from "react-query";

import { YoutubeType, fetcherGET, fetcherPOST } from "@/api/youtube";
import youtubeKeys from "./keys";

interface IMutationProps {
  vid: string;
}

export const useGetYoutubeLink = (type: YoutubeType) => {
  const queryKey = youtubeKeys[type]();

  return useQuery({
    queryKey,
    queryFn: async () => await fetcherGET(type),
    select: (response) => response.youtubeLink[0],
  });
};

export const usePostYoutubeLink = (type: YoutubeType) => {
  const queryClient = useQueryClient();
  const queryKey = youtubeKeys[type]();

  return useMutation({
    mutationFn: async ({ vid }: IMutationProps) => {
      const response = await fetcherPOST({ vid, type });
      return response.result === "success";
    },
    onSuccess: () => queryClient.invalidateQueries(queryKey),
    onError: (error) => console.error(error),
  });
};
