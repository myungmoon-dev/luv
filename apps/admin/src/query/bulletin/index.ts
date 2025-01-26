import { useMutation, useQuery } from "@tanstack/react-query";

import { deleteBulletin, getBulletin, getBulletins, postBulletin } from "@/api/bulletin";
import bulletinKeys from "./keys";
import { useParams } from "next/navigation";

const useGetBulletins = () => {
  return useQuery({
    queryFn: () => getBulletins(),
    queryKey: bulletinKeys.list(),
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

const useDeleteBulletin = () => useMutation({ mutationFn: deleteBulletin });

export { useGetBulletins, usePostBulletin, useGetBulletin, useDeleteBulletin };
