import { api } from "@/api";
import { AlbumType, IGetAlbumListResponse, IGetAlbumRequest, IGetAlbumResponse } from "type";

export const getAlbumList = async ({ type, page, size }: { type: AlbumType; page: number; size: number }) => {
  const { data } = await api.get<IGetAlbumListResponse>("/albums", {
    params: { type, page, size },
  });
  return data;
};

export const getAlbum = async ({ id }: IGetAlbumRequest) => {
  const { data } = await api.get<IGetAlbumResponse>(`/albums/${id}`);

  return data;
};
