import { api, isClientApiConfigured } from "@/api";
import { AlbumType, IGetAlbumListResponse, IGetAlbumRequest, IGetAlbumResponse } from "type";

export const getAlbumList = async ({ type, page, size }: { type: AlbumType; page: number; size: number }) => {
  if (!isClientApiConfigured()) {
    return { albums: [], totalAlbums: 0 };
  }
  const { data } = await api.get<IGetAlbumListResponse>("/albums", {
    params: { type, page, size },
  });
  return data;
};

export const getAlbum = async ({ id }: IGetAlbumRequest) => {
  if (!isClientApiConfigured()) {
    throw new Error("Client API base URL is not configured");
  }
  const { data } = await api.get<IGetAlbumResponse>(`/albums/${id}`);

  return data;
};
