import { useMutation, useQuery } from "@tanstack/react-query";

import {
  deleteHomeWorship,
  deleteHomeWorshipComment,
  getHomeWorship,
  getHomeWorships,
  postHomeWorship,
  postHomeWorshipComment,
  putHomeWorship,
} from "@/api/homeWorship";
import homeWorshipKeys from "./keys";

const useGetHomeWorships = () => {
  return useQuery({
    queryFn: () => getHomeWorships({ page }),
    queryKey: homeWorshipKeys.list(),
  });
};

const useGetHomeWorship = ({ homeWorshipId }: { homeWorshipId: string }) => {
  return useQuery({
    queryFn: () => getHomeWorship(homeWorshipId),
    queryKey: homeWorshipKeys.detail(homeWorshipId),
    enabled: !!homeWorshipId,
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

export {
  useDeleteHomeWorship,
  useDeleteHomeWorshipComment,
  useGetHomeWorship,
  useGetHomeWorships,
  usePostHomeWorship,
  usePostHomeWorshipComment,
  usePutHomeWorship,
};
