import { getMission, getMissions } from "@/api/news";
import { useQuery } from "@tanstack/react-query";
import newsKeys from "./keys";
import usePagination from "@/hooks/usePagination";

export const useGetMissions = () => {
  const { page, size } = usePagination();

  return useQuery({
    placeholderData: (previousData) => previousData,
    queryFn: () => getMissions({ page, size }),
    queryKey: newsKeys.missionList(page, size),
  });
};

export const useGetMission = ({ missionId }: { missionId: string }) => {
  return useQuery({
    queryFn: () => getMission(missionId),
    queryKey: newsKeys.missionDetail(missionId),
    enabled: !!missionId,
  });
};
