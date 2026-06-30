import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteEducation,
  getEducationByType,
  getEducations,
  patchEducation,
  postEducation,
  type EducationType,
} from "@/api/education";
import educationKeys from "./keys";

export const useGetEducations = () =>
  useQuery({
    queryKey: educationKeys.list(),
    queryFn: getEducations,
    staleTime: 30 * 1000,
  });

export const useGetEducation = (type: EducationType) =>
  useQuery({
    queryKey: educationKeys.detail(type),
    queryFn: () => getEducationByType(type),
  });

export const usePostEducation = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: postEducation,
    onSuccess: () => qc.invalidateQueries({ queryKey: educationKeys.all }),
  });
};

export const usePatchEducation = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: patchEducation,
    onSuccess: () => qc.invalidateQueries({ queryKey: educationKeys.all }),
  });
};

export const useDeleteEducation = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: deleteEducation,
    onSuccess: () => qc.invalidateQueries({ queryKey: educationKeys.all }),
  });
};
