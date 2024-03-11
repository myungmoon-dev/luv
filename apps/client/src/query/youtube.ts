import { api } from "@/api";
import { useMutation, useQuery, useQueryClient } from "react-query";

interface IYoutubeLinkProps {
  apiUrl: string;
}
interface IYoutubeMutationProps {
  data: string;
}
// FIXME: tanstack/react-query로 변경해야함

export const useGetLivelink = ({ apiUrl }: IYoutubeLinkProps) => {
  return useQuery("youtube", {
    queryFn: async () => await api.get(apiUrl),
    select: ({ data: { livelink } }) => livelink[0] as string,
  });
};

export const usePostLivelink = ({ apiUrl }: IYoutubeLinkProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ data }: IYoutubeMutationProps) => await api.post(apiUrl, { url: data }),
    onSuccess: () => queryClient.invalidateQueries("youtube"),
    onError: (error) => console.error(error),
  });
};

export const useGetShorts = ({ apiUrl }: IYoutubeLinkProps) => {
  return useQuery("shorts", {
    queryFn: async () => await api.get(apiUrl),
    select: ({ data: { shorts } }) => shorts[0] as string,
  });
};
export const usePostShorts = ({ apiUrl }: IYoutubeLinkProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ data }: IYoutubeMutationProps) => await api.post(apiUrl, { url: data }),
    onSuccess: () => queryClient.invalidateQueries("shorts"),
    onError: (error) => console.error(error),
  });
};
