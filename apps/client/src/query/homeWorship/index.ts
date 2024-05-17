import { useMutation, useQuery } from "@tanstack/react-query";

import { deleteHomeWorship, getHomeWorship, getHomeWorships, postHomeWorship } from "@/api/homeWorship";
import homeWorshipKeys from "./keys";

const useGetHomeWorships = () => {
  return useQuery({
    queryFn: () => getHomeWorships(),
    queryKey: homeWorshipKeys.list(),
  });
};

const useGetHomeWorship = ({ homeWorshipId }: { homeWorshipId: string }) => {
  return useQuery({
    queryFn: () => getHomeWorship(homeWorshipId),
    queryKey: homeWorshipKeys.detail(homeWorshipId),
  });
};

const usePostHomeWorship = () =>
  useMutation({
    mutationFn: postHomeWorship,
  });

const useDeleteHomeWorship = () => useMutation({ mutationFn: deleteHomeWorship });

export { useGetHomeWorship, useGetHomeWorships, usePostHomeWorship, useDeleteHomeWorship };
