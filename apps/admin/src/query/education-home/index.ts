import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getEducationHome, patchEducationHome } from "@/api/education-home";

const KEY = ["education-home"];

export const useGetEducationHome = () =>
  useQuery({ queryKey: KEY, queryFn: getEducationHome });

export const usePatchEducationHome = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: patchEducationHome,
    onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
  });
};
