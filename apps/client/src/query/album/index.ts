import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { AlbumType } from "type";
import albumKeys from "./keys";
import { getAlbum, getAlbumList } from "@/api/album";
import usePagination from "@/hooks/usePagination";

const useGetAlbumListSuspense = (type: AlbumType, page: number = 1, size: number = 10) => {
  const queryKey = albumKeys[type](page, size);

  return useSuspenseQuery({
    queryKey,
    queryFn: async () => await getAlbumList({ type, page, size }),
  });
};

const useGetAlbumList = (type: AlbumType) => {
  const { page, size } = usePagination();
  const queryKey = albumKeys[type](page, size);

  return useQuery({
    queryKey,
    queryFn: () => getAlbumList({ page, size, type }),
  });
};

const useGetAlubm = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: albumKeys.detail(id),
    queryFn: () => getAlbum({ id }),
  });
};

export { useGetAlbumListSuspense, useGetAlbumList, useGetAlubm };
