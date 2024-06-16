import { useMutation, useQuery } from "@tanstack/react-query";

import { getBulletin, getBulletins, postBulletin } from "@/api/bulletin";
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
    select: (res) => res.bulletin,
  });
};

const usePostBulletin = () => useMutation({ mutationFn: postBulletin });

export { useGetBulletins, usePostBulletin, useGetBulletin };
