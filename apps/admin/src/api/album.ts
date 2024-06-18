import { AlbumType, IGetAlbumResponse } from "type";
import { api } from ".";

export const getAlbumList = async (type: AlbumType) => {
  const { data } = await api.get<IGetAlbumResponse>("/api/album", {
    params: { type },
  });
  return data;
};
export const PostAlbum = async (album: FormData) => {
  const { data } = await api.post("/api/album", album, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const DeleteAlbum = async (idList: string[]) => {
  const { data } = await api.delete("/api/album", {
    params: {
      idList: idList.join(","),
    },
  });
  return data;
};
