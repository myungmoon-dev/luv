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
import usePagination from "@/hooks/usePagination";

const useGetHomeWorships = () => {
  const { page, size } = usePagination();

  return useQuery({
    placeholderData: (previousData) => previousData,
    queryFn: () => getHomeWorships({ page, size }),
    queryKey: homeWorshipKeys.list(page, size),
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
