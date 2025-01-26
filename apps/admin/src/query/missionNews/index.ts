import {
  deleteMissionNews,
  getMissionNews,
  getMissionNewsList,
  postMissionNews,
  putMissionNews,
} from "@/api/missionNews";
import { useMutation, useQuery } from "@tanstack/react-query";
import { missionNewsListKeys } from "./keys";

export const useGetMissionNewsList = () => {
  return useQuery({
    queryFn: () => getMissionNewsList(),
    queryKey: missionNewsListKeys.list(),
  });
};

export const useGetMissionNews = ({ missionNewsId }: { missionNewsId: string }) => {
  return useQuery({
    queryFn: () => getMissionNews({ missionNewsId }),
    queryKey: missionNewsListKeys.detail(missionNewsId),
    enabled: !!missionNewsId,
  });
};

export const usePostMissionNews = () => useMutation({ mutationFn: postMissionNews });

export const useDeleteMissionNews = () => useMutation({ mutationFn: deleteMissionNews });

export const usePutMissionNews = () => useMutation({ mutationFn: putMissionNews });
