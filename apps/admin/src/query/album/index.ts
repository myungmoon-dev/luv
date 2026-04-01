import { useMutation, useQuery } from "@tanstack/react-query";
import { AlbumType } from "type";
import albumKeys from "./keys";
import { DeleteAlbum, deleteAlbums, PostAlbum, getAlbum, getAlbumList, patchAlbum } from "@/api/album";

const useGetAlbumList = (type: AlbumType | "all", page = 0) => {
  return useQuery({
    queryKey: albumKeys[type]?.(page) ?? ["album", type, page],
    queryFn: () => getAlbumList({ type, page }),
  });
};

const useGetAlbum = (id: string) => {
  return useQuery({
    queryKey: albumKeys.detail(id),
    queryFn: () => getAlbum(id),
    enabled: !!id,
  });
};

const usePostAlbum = () => useMutation({ mutationFn: PostAlbum });

const usePatchAlbum = () => useMutation({ mutationFn: patchAlbum });

const useDeleteAlbum = () => useMutation({ mutationFn: DeleteAlbum });

const useDeleteAlbums = () => useMutation({ mutationFn: deleteAlbums });

export { useGetAlbumList, useGetAlbum, usePostAlbum, usePatchAlbum, useDeleteAlbum, useDeleteAlbums };
