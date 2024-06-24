import { api } from "@/api";
import { AlbumType, IGetAlbumResponse } from "type";

export const getAlbumList = async (type: AlbumType) => {
  const { data } = await api.get<IGetAlbumResponse>("/api/album", {
    params: { type },
  });
  return data;
};
