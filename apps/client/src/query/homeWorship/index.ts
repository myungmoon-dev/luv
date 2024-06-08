import { useMutation, useQuery } from "@tanstack/react-query";

import {
  deleteHomeWorship,
  deleteHomeWorshipComment,
  getHomeWorship,
  getHomeWorships,
  postHomeWorship,
  postHomeWorshipComment,
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

const useDeleteHomeWorship = () => useMutation({ mutationFn: deleteHomeWorship });

const usePostHomeWorshipComment = () => useMutation({ mutationFn: postHomeWorshipComment });

const useDeleteHomeWorshipComment = () => useMutation({ mutationFn: deleteHomeWorshipComment });

export {
  useGetHomeWorship,
  useGetHomeWorships,
  usePostHomeWorship,
  useDeleteHomeWorship,
  usePostHomeWorshipComment,
  useDeleteHomeWorshipComment,
};
