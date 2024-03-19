import { useMutation, useQuery } from "@tanstack/react-query";

import { getBulletins, postBulletin } from "@/api/bulletin";
import bulletinKeys from "./keys";

const useGetBulletins = () => {
  return useQuery({
    queryFn: () => getBulletins(),
    queryKey: bulletinKeys.list(),
  });
};

const usePostBulletin = () => useMutation({ mutationFn: postBulletin });

export { useGetBulletins, usePostBulletin };
