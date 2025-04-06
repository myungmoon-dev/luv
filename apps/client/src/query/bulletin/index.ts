import { useQuery } from "@tanstack/react-query";

import { getBulletin, getBulletins } from "@/api/bulletin";
import bulletinKeys from "./keys";
import usePagination from "@/hooks/usePagination";

const useGetBulletins = () => {
  const { page, size } = usePagination();

  return useQuery({
    placeholderData: (previousData) => previousData,
    queryFn: () => getBulletins({ page, size }),
    queryKey: bulletinKeys.list(page, size),
  });
};

const useGetBulletin = ({ bulletinId }: { bulletinId: string }) => {
  return useQuery({
    queryFn: () => getBulletin(bulletinId),
    queryKey: bulletinKeys.detail(bulletinId),
  });
};

export { useGetBulletins, useGetBulletin };
