import { AlbumType, IGetAlbumResponse } from "type";
import { api } from ".";

export const getAlbumList = async (type: AlbumType) => {
  const { data } = await api.get<IGetAlbumResponse>("/albums", {
    params: { type },
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
