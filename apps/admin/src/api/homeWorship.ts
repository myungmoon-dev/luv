import { IGetHomeWorshipsResponse } from "@/types/homeworship/response";
import { IHomeWorship } from "type";
import { api } from ".";

export const getHomeWorships = async ({ page = 0, size = 10 }: { page?: number; size?: number } = {}) => {
  const { data } = await api.get<IGetHomeWorshipsResponse>("/homeworships", { params: { page, size } });

  return data;
};

export const getHomeWorship = async (id: string) => {
  const { data } = await api.get<IHomeWorship>(`/homeworships/${id}`);

  return data;
};

export const deleteHomeWorship = async (id: string) => {
  const { data } = await api.delete(`/homeworships/${id}`);

  return data;
};

export const deleteHomeWorships = async (ids: string[]) => {
  const { data } = await api.delete("/homeworships", { data: ids });

  return data;
};

export const postHomeWorship = async (homeWorship: FormData) => {
  const { data } = await api.post("/homeworships", homeWorship, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return data;
};

export const patchHomeWorship = async ({ id, formData }: { id: string; formData: FormData }) => {
  const { data } = await api.patch(`/homeworships/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return data;
};

export const postComment = async ({ id, body }: { id: string; body: { userName: string; password: string; content: string } }) => {
  const { data } = await api.post(`/homeworships/${id}/comments`, body);

  return data;
};

export const putComment = async ({ id, commentId, body }: { id: string; commentId: string; body: { userName: string; password: string; content: string } }) => {
  const { data } = await api.put(`/homeworships/${id}/comments/${commentId}`, body);

  return data;
};

export const deleteComment = async ({ id, commentId, password }: { id: string; commentId: string; password: string }) => {
  const { data } = await api.delete(`/homeworships/${id}/comments/${commentId}`, { data: { password } });

  return data;
};
