import { useQuery } from "@tanstack/react-query";
import { AlbumType } from "type";
import albumKeys from "./keys";
import { getAlbumList } from "@/api/album";

export const useGetAlbumList = (type: AlbumType) => {
  const queryKey = albumKeys[type]();

  return useQuery({
    queryKey,
    queryFn: async () => await getAlbumList(type),
    select: (response) => response.albumList,
  });
};
