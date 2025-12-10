import { getMission, getMissions, getCongregationNewsList } from "@/api/news";
import { useQuery } from "@tanstack/react-query";
import newsKeys from "./keys";
import usePagination from "@/hooks/usePagination";

export const useGetMissions = (location?: string) => {
  const { page, size } = usePagination();

  return useQuery({
    placeholderData: (previousData) => previousData,
    queryFn: () => getMissions({ page, size, location }),
    queryKey: newsKeys.missionList(page, size, location),
  });
};

export const useGetMission = ({ missionId }: { missionId: string }) => {
  return useQuery({
    queryFn: () => getMission(missionId),
    queryKey: newsKeys.missionDetail(missionId),
    enabled: !!missionId,
  });
};

export const useGetCongregationNewsList = (type?: string) => {
  const { page, size } = usePagination();

  return useQuery({
    placeholderData: (previousData) => previousData,
    queryFn: () => getCongregationNewsList({ page, size, type }),
    queryKey: newsKeys.congregationNewsList(page, size, type),
  });
};
