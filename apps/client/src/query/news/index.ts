import { getMission, getMissions } from "@/api/news";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import newsKeys from "./keys";

export const useGetMissions = () => {
  return useInfiniteQuery({
    queryFn: ({ pageParam = {} }: { pageParam?: { lastVisibleCreatedAt?: string } }) =>
      getMissions({ lastVisibleCreatedAt: pageParam.lastVisibleCreatedAt }),
    queryKey: newsKeys.missionList(),
    initialPageParam: { lastVisibleCreatedAt: undefined },
    getNextPageParam: (lastPage) => {
      return { lastVisibleCreatedAt: lastPage.missions.at(-1)?.createdAt };
    },
  });
};

export const useGetMission = ({ missionId }: { missionId: string }) => {
  return useQuery({
    queryFn: () => getMission(missionId),
    queryKey: newsKeys.missionDetail(missionId),
  });
};
