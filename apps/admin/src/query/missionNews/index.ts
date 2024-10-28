import {
  deleteMissionNews,
  getMissionNews,
  getMissionNewsList,
  postMissionNews,
  putMissionNews,
} from "@/api/missionNews";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { missionNewsListKeys } from "./keys";

export const useGetMissionNewsList = () => {
  return useInfiniteQuery({
    queryFn: ({ pageParam = {} }: { pageParam?: { lastVisibleCreatedAt?: number } }) =>
      getMissionNewsList({ lastVisibleCreatedAt: pageParam.lastVisibleCreatedAt }),
    queryKey: missionNewsListKeys.list(),
    initialPageParam: { lastVisibleCreatedAt: undefined },
    getNextPageParam: (lastPage) => {
      return { lastVisibleCreatedAt: lastPage.missionNewsList.at(-1)?.createdAt };
    },
  });
};

export const useGetMissionNews = ({ missionNewsId }: { missionNewsId: string }) => {
  return useQuery({
    queryFn: () => getMissionNews({ missionNewsId }),
    queryKey: missionNewsListKeys.detail(missionNewsId),
    select: (res) => res.missionNews,
  });
};

export const usePostMissionNews = () => useMutation({ mutationFn: postMissionNews });

export const useDeleteMissionNews = () => useMutation({ mutationFn: deleteMissionNews });

export const usePutMissionNews = () => useMutation({ mutationFn: putMissionNews });
