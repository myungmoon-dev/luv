import { api } from "@/api";
import { useMutation, useQuery, useQueryClient } from "react-query";

interface IQueryProps {
  apiUrl: string;
  type: "youtube" | "shorts" | "live";
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
