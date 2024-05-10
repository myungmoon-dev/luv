import { useQuery } from "@tanstack/react-query";

import { getHomeWorship, getHomeWorships } from "@/api/homeWorship";
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

export { useGetHomeWorship, useGetHomeWorships };
