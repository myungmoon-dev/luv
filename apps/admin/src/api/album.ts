import { AlbumType, IGetAlbumResponse } from "type";
import { api } from ".";

export const getAlbumList = async (type: AlbumType) => {
  const { data } = await api.get<IGetAlbumResponse>("/api/album", {
    params: { type },
  });
  return data;
};
