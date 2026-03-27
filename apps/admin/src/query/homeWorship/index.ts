import { deleteHomeWorship, getHomeWorship, getHomeWorships, postHomeWorship } from "@/api/homeWorship";
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

const usePostHomeWorship = () =>
  useMutation({
    mutationFn: postHomeWorship,
  });

const useDeleteHomeWorship = () => useMutation({ mutationFn: deleteHomeWorship });

export { useGetHomeWorships, useGetHomeWorship, usePostHomeWorship, useDeleteHomeWorship };
