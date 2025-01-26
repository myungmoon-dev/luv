import { getHomeWorships, postHomeWorship } from "@/api/homeWorship";
import { useMutation, useQuery } from "@tanstack/react-query";
import homewWorshipKeys from "./keys";

const useGetHomeWorships = () => {
  return useQuery({
    queryFn: () => getHomeWorships(),
    queryKey: homewWorshipKeys.list(),
  });
};

const usePostHomeWorship = () =>
  useMutation({
    mutationFn: postHomeWorship,
  });

export { useGetHomeWorships, usePostHomeWorship };
