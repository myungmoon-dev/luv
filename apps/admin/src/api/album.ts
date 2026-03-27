import { AlbumType, IGetAlbumListResponse } from "type";
import { api } from ".";

export const getAlbumList = async ({ type, page = 0 }: { type: AlbumType; page?: number }) => {
  const { data } = await api.get<IGetAlbumListResponse>("/albums", {
    params: { type, page },
  });
  return data;
};
export const PostAlbum = async (album: FormData) => {
  const { data } = await api.post("/albums", album, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const DeleteAlbum = async (id: string) => {
  const { data } = await api.delete(`/albums/${id}`);

  return data;
};
