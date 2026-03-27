import { getHomeWorships, postHomeWorship } from "@/api/homeWorship";
import { useMutation, useQuery } from "@tanstack/react-query";
import homewWorshipKeys from "./keys";

const useGetHomeWorships = ({ page = 0 }: { page?: number } = {}) => {
  return useQuery({
    queryFn: () => getHomeWorships({ page }),
    queryKey: homewWorshipKeys.list(page),
  });
};

const usePostHomeWorship = () =>
  useMutation({
    mutationFn: postHomeWorship,
  });

export { useGetHomeWorships, usePostHomeWorship };
