import { useMutation, useQuery } from "@tanstack/react-query";
import { AlbumType } from "type";
import albumKeys from "./keys";
import { DeleteAlbum, PostAlbum, getAlbumList } from "@/api/album";

const useGetAlbumList = (type: AlbumType) => {
  const queryKey = albumKeys[type]();

  return useQuery({
    queryKey,
    queryFn: async () => await getAlbumList(type),
  });
};

const usePostAlbum = () => useMutation({ mutationFn: PostAlbum });

const useDeleteAlbum = () => useMutation({ mutationFn: DeleteAlbum });

export { useGetAlbumList, usePostAlbum, useDeleteAlbum };
