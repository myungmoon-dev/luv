import { api } from "@/api";
import { AlbumType, IGetAlbumResponse } from "type";

export const getAlbumList = async (type: AlbumType) => {
  const { data } = await api.get<IGetAlbumResponse>("/albums", {
    params: { type },
  });
  return data;
};
