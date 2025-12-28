import {
  deleteCongregationNews,
  getCongregationNews,
  getCongregationNewsList,
  postCongregationNews,
  putCongregationNews,
} from "@/api/congregationNews";
import { GetCongregationNewsListRequest } from "@/types/congregationNews/request";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { congregationNewsKeys } from "./keys";

export const useGetCongregationNewsList = (params?: GetCongregationNewsListRequest) => {
  return useQuery({
    queryFn: () => getCongregationNewsList(params),
    queryKey: congregationNewsKeys.list(params),
  });
};

export const useGetCongregationNews = ({ id }: { id: string }) => {
  return useQuery({
    queryFn: () => getCongregationNews({ id }),
    queryKey: congregationNewsKeys.detail(id),
    enabled: !!id,
  });
};

export const usePostCongregationNews = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postCongregationNews,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: congregationNewsKeys.all });
      toast("추가되었습니다.");
    },
    onError: () => {
      toast("에러가 발생했습니다. 다시 시도해주세요.");
    },
  });
};

export const usePutCongregationNews = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: putCongregationNews,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: congregationNewsKeys.all });
      toast("수정되었습니다.");
    },
    onError: () => {
      toast("에러가 발생했습니다. 다시 시도해주세요.");
    },
  });
};

export const useDeleteCongregationNews = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCongregationNews,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: congregationNewsKeys.all });
      toast("삭제되었습니다.");
    },
    onError: () => {
      toast("에러가 발생했습니다. 다시 시도해주세요.");
    },
  });
};

