import { AlbumType, IAlbum, IGetAlbumListResponse } from "type";
import { api } from ".";

export const getAlbumList = async ({ type, page = 0 }: { type?: AlbumType | "all"; page?: number }) => {
  const { data } = await api.get<IGetAlbumListResponse>("/albums", {
    params: { ...(type && type !== "all" ? { type } : {}), page },
  });
  return data;
};

export const getAlbum = async (id: string) => {
  const { data } = await api.get<IAlbum>(`/albums/${id}`);
  return data;
};

export const PostAlbum = async (album: FormData) => {
  const { data } = await api.post("/albums", album, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const patchAlbum = async ({ id, formData }: { id: string; formData: FormData }) => {
  const { data } = await api.patch(`/albums/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const DeleteAlbum = async (id: string) => {
  const { data } = await api.delete(`/albums/${id}`);
  return data;
};

export const deleteAlbums = async (ids: string[]) => {
  const { data } = await api.delete("/albums", { data: ids });
  return data;
};
