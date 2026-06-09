import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteHomeImage, getHomeYoutube, getHomeImages, patchHomeYoutube, postHomeImage } from "@/api/home";
import { homeKeys } from "./keys";

export const useGetHomeYoutube = () =>
  useQuery({ queryKey: homeKeys.youtube(), queryFn: getHomeYoutube });

export const usePatchHomeYoutube = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: patchHomeYoutube,
    onSuccess: () => qc.invalidateQueries({ queryKey: homeKeys.youtube() }),
  });
};

export const useGetHomeImages = ({ page = 0 }: { page?: number } = {}) =>
  useQuery({ queryKey: homeKeys.images(page), queryFn: () => getHomeImages({ page }) });

export const usePostHomeImage = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: postHomeImage,
    onSuccess: () => qc.invalidateQueries({ queryKey: homeKeys.all }),
  });
};

export const useDeleteHomeImage = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: deleteHomeImage,
    onSuccess: () => qc.invalidateQueries({ queryKey: homeKeys.all }),
  });
};
