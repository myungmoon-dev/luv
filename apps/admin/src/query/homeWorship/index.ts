import { deleteComment, deleteHomeWorship, deleteHomeWorships, getHomeWorship, getHomeWorships, patchHomeWorship, postComment, postHomeWorship, putComment } from "@/api/homeWorship";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import homewWorshipKeys from "./keys";

const useGetHomeWorships = ({ page = 0 }: { page?: number } = {}) => {
  return useQuery({
    queryFn: () => getHomeWorships({ page }),
    queryKey: homewWorshipKeys.list(page),
  });
};

const useGetHomeWorship = () => {
  const params = useParams();
  const id = params?.id as string;

  return useQuery({
    queryFn: () => getHomeWorship(id),
    queryKey: homewWorshipKeys.detail(id),
  });
};

const useGetHomeWorshipById = (id: string) => {
  return useQuery({
    queryFn: () => getHomeWorship(id),
    queryKey: homewWorshipKeys.detail(id),
    enabled: !!id,
  });
};

const usePostHomeWorship = () =>
  useMutation({
    mutationFn: postHomeWorship,
  });

const useDeleteHomeWorship = () => useMutation({ mutationFn: deleteHomeWorship });

const useDeleteHomeWorships = () => useMutation({ mutationFn: deleteHomeWorships });

const usePatchHomeWorship = () => useMutation({ mutationFn: patchHomeWorship });

const usePostComment = () => useMutation({ mutationFn: postComment });

const usePutComment = () => useMutation({ mutationFn: putComment });

const useDeleteComment = () => useMutation({ mutationFn: deleteComment });

export { useGetHomeWorships, useGetHomeWorship, useGetHomeWorshipById, usePostHomeWorship, usePatchHomeWorship, useDeleteHomeWorship, useDeleteHomeWorships, usePostComment, usePutComment, useDeleteComment };
