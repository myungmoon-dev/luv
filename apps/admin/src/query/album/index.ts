import { useMutation, useQuery } from "@tanstack/react-query";
import { AlbumType } from "type";
import albumKeys from "./keys";
import { PostAlbum, getAlbumList } from "@/api/album";

const useGetAlbumList = (type: AlbumType) => {
  const queryKey = albumKeys[type]();

  return useQuery({
    queryKey,
    queryFn: async () => await getAlbumList(type),
    select: (response) => response.albumList,
  });
};

const usePostAlbum = () => useMutation({ mutationFn: PostAlbum });

export { useGetAlbumList, usePostAlbum };
