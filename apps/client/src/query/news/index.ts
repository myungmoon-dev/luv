import { useMutation, useQuery } from "@tanstack/react-query";
import newsKeys from "./keys";
import { deleteMission, getMission, getMissions, postMission } from "@/api/news";

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
  });
};

export const usePostMission = () =>
  useMutation({
    mutationFn: postMission,
  });

export const useDeleteMission = () => useMutation({ mutationFn: deleteMission });
