import { useQuery } from "@tanstack/react-query";

import { getBulletins } from "@/api/bulletin";
import bulletinKeys from "./keys";

const useGetBulletins = () => {
  return useQuery({
    queryFn: () => getBulletins(),
    queryKey: bulletinKeys.list(),
  });
};

export { useGetBulletins };
