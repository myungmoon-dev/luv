import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getEducationHome, putEducationHome } from "@/api/education-home";

const KEY = ["education-home"];

export const useGetEducationHome = () =>
  useQuery({ queryKey: KEY, queryFn: getEducationHome });

export const usePutEducationHome = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: putEducationHome,
    onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
  });
};
