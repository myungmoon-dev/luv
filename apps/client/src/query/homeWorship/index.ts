import { useMutation, useQuery } from "@tanstack/react-query";

import {
  deleteHomeWorship,
  deleteHomeWorshipComment,
  getHomeWorship,
  getHomeWorships,
  postHomeWorship,
  postHomeWorshipComment,
  postHomeWorshipPasswordCheck,
  putHomeWorship,
} from "@/api/homeWorship";
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

const usePutHomeWorship = () =>
  useMutation({
    mutationFn: putHomeWorship,
  });

const useDeleteHomeWorship = () => useMutation({ mutationFn: deleteHomeWorship });

const usePostHomeWorshipComment = () => useMutation({ mutationFn: postHomeWorshipComment });

const useDeleteHomeWorshipComment = () => useMutation({ mutationFn: deleteHomeWorshipComment });

const usePostHomeWorshipPasswordCheck = () =>
  useMutation({
    mutationFn: postHomeWorshipPasswordCheck,
  });

export {
  useGetHomeWorship,
  useGetHomeWorships,
  usePostHomeWorship,
  useDeleteHomeWorship,
  usePostHomeWorshipComment,
  useDeleteHomeWorshipComment,
  usePostHomeWorshipPasswordCheck,
  usePutHomeWorship,
};
