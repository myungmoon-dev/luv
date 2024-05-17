import { useMutation, useQuery } from "@tanstack/react-query";

import { getHomeWorship, getHomeWorships, postHomeWorship } from "@/api/homeWorship";
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

export { useGetHomeWorship, useGetHomeWorships, usePostHomeWorship };
