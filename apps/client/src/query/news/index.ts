import { getMission, getMissions } from "@/api/news";
import { useQuery } from "@tanstack/react-query";
import newsKeys from "./keys";

export const useGetMissions = () => {
  return useQuery({
    queryFn: () => getMissions(),
    queryKey: newsKeys.missionList(),
  });
};

export const useGetMission = ({ missionId }: { missionId: string }) => {
  return useQuery({
    queryFn: () => getMission(missionId),
    queryKey: newsKeys.missionDetail(missionId),
    enabled: !!missionId,
  });
};
