import { useMutation, useQuery } from "@tanstack/react-query";

import { deleteBulletin, deleteBulletins, getAvailableDates, getBulletin, getBulletins, patchBulletin, postBulletin } from "@/api/bulletin";
import bulletinKeys from "./keys";
import { useParams } from "next/navigation";

const useGetBulletins = ({ page = 0, year, month }: { page?: number; year?: string; month?: string } = {}) => {
  return useQuery({
    queryFn: () => getBulletins({ page, year, month }),
    queryKey: bulletinKeys.list(page, year, month),
  });
};

const useGetAvailableDates = () => {
  return useQuery({
    queryFn: getAvailableDates,
    queryKey: bulletinKeys.dates(),
  });
};

const useGetBulletin = () => {
  const params = useParams();
  const bulletinId = params?.id as string;

  return useQuery({
    queryFn: () => getBulletin(bulletinId),
    queryKey: bulletinKeys.detail(bulletinId),
  });
};

const usePostBulletin = () => useMutation({ mutationFn: postBulletin });

const usePatchBulletin = () => useMutation({ mutationFn: patchBulletin });

const useDeleteBulletin = () => useMutation({ mutationFn: deleteBulletin });

const useDeleteBulletins = () => useMutation({ mutationFn: deleteBulletins });

export { useGetBulletins, useGetAvailableDates, usePostBulletin, useGetBulletin, usePatchBulletin, useDeleteBulletin, useDeleteBulletins };
