import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteMinister, getMinisters, patchMinister, postMinister } from "@/api/minister";
import { ministerKeys } from "./keys";
import type { StaffTabType } from "type";

export const useGetMinisters = ({ page = 0, tabType }: { page?: number; tabType?: StaffTabType } = {}) =>
  useQuery({ queryKey: ministerKeys.list(page, tabType), queryFn: () => getMinisters({ page, tabType }) });

export const usePostMinister = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: postMinister,
    onSuccess: () => qc.invalidateQueries({ queryKey: ministerKeys.all }),
  });
};

export const usePatchMinister = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: patchMinister,
    onSuccess: () => qc.invalidateQueries({ queryKey: ministerKeys.all }),
  });
};

export const useDeleteMinister = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: deleteMinister,
    onSuccess: () => qc.invalidateQueries({ queryKey: ministerKeys.all }),
  });
};
