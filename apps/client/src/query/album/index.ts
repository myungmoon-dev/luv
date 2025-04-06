import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { AlbumType } from "type";
import albumKeys from "./keys";
import { getAlbumList } from "@/api/album";

const useGetAlbumListSuspense = (type: AlbumType) => {
  const queryKey = albumKeys[type]();

  return useSuspenseQuery({
    queryKey,
    queryFn: async () => await getAlbumList(type),
  });
};

export { useGetAlbumListSuspense };
