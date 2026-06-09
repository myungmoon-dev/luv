import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePastorBook, getPastorBooks, getPastorProfile, patchPastorBook, patchPastorProfile, postPastorBook } from "@/api/pastor";
import { pastorKeys } from "./keys";

export const useGetPastorBooks = ({ page = 0 }: { page?: number } = {}) =>
  useQuery({ queryKey: pastorKeys.books(page), queryFn: () => getPastorBooks({ page }) });

export const usePostPastorBook = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: postPastorBook,
    onSuccess: () => qc.invalidateQueries({ queryKey: pastorKeys.all }),
  });
};

export const usePatchPastorBook = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: patchPastorBook,
    onSuccess: () => qc.invalidateQueries({ queryKey: pastorKeys.all }),
  });
};

export const useDeletePastorBook = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: deletePastorBook,
    onSuccess: () => qc.invalidateQueries({ queryKey: pastorKeys.all }),
  });
};

export const useGetPastorProfile = () =>
  useQuery({ queryKey: pastorKeys.profile(), queryFn: getPastorProfile });

export const usePatchPastorProfile = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: patchPastorProfile,
    onSuccess: () => qc.invalidateQueries({ queryKey: pastorKeys.profile() }),
  });
};
