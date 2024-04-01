import { useQuery } from "@tanstack/react-query";

import { getBulletin, getBulletins } from "@/api/bulletin";
import bulletinKeys from "./keys";

const useGetBulletins = () => {
  return useQuery({
    queryFn: () => getBulletins(),
    queryKey: bulletinKeys.list(),
  });
};

const useGetBulletin = ({ bulletinId }: { bulletinId: string }) => {
  return useQuery({
    queryFn: () => getBulletin(bulletinId),
    queryKey: bulletinKeys.detail(bulletinId),
  });
};

export { useGetBulletins, useGetBulletin };
