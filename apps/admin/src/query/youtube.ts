import { api } from "@/api";
import { useMutation, useQuery, useQueryClient } from "react-query";

interface IQueryProps {
  apiUrl: string;
  type: "youtube" | "shorts" | "live";
}
interface IMutateProps {
  vid: string;
}

export const useGetYoutubeLink = ({ apiUrl, type }: IQueryProps) => {
  return useQuery(type, {
    queryFn: async () =>
      await api.get(apiUrl, {
        params: {
          type,
        },
      }),
    select: ({ data: { youtubeLink } }) => youtubeLink[0] as string,
  });
};

export const usePostYoutubeLink = ({ apiUrl, type }: IQueryProps) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ vid }: IMutateProps) =>
      await api.post(
        apiUrl,
        { vid },
        {
          params: {
            type,
          },
        }
      ),
    onSuccess: () => queryClient.invalidateQueries(type),
    onError: (error) => console.error(error),
  });
};
