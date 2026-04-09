import {
  deleteMissionNews,
  deleteMissionNewsList,
  getMissionNews,
  getMissionNewsList,
  postMissionNews,
  putMissionNews,
} from "@/api/missionNews";
import { useMutation, useQuery } from "@tanstack/react-query";
import { missionNewsListKeys } from "./keys";

export const useGetMissionNewsList = ({
  page = 0,
  location,
}: { page?: number; location?: string } = {}) => {
  return useQuery({
    queryFn: () => getMissionNewsList({ page, location }),
    queryKey: missionNewsListKeys.list(page, location),
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

export const useDeleteMissionNewsList = () => useMutation({ mutationFn: deleteMissionNewsList });

export const usePutMissionNews = () => useMutation({ mutationFn: putMissionNews });
