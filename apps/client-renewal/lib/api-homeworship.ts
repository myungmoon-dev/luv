import { api } from "@/lib/api";
import type { IHomeWorship } from "type";

export interface IGetHomeWorshipsResponse {
  homeworships: IHomeWorship[];
  totalHomeworships: number;
}

export interface IGetHomeWorshipResponse extends IHomeWorship {}

export async function getHomeWorships({ page, size }: { page: number; size: number }) {
  const { data } = await api.get<IGetHomeWorshipsResponse>("/homeWorships", {
    params: { page, size },
  });
  return data;
}

export async function getHomeWorship(homeWorshipId: string) {
  const { data } = await api.get<IGetHomeWorshipResponse>(`/homeWorships/${homeWorshipId}`);
  return data;
}

export async function postHomeWorship(homeWorship: FormData) {
  const { data } = await api.post("/homeWorships", homeWorship, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
}

export async function putHomeWorship({ homeWorship, homeWorshipId }: { homeWorship: FormData; homeWorshipId: string }) {
  const { data } = await api.put(`/homeWorships/${homeWorshipId}`, homeWorship, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
}

export async function deleteHomeWorship({ homeWorshipId, password }: { homeWorshipId: string; password: string }) {
  const { data } = await api.delete(`/homeWorships/${homeWorshipId}`, { params: { password } });
  return data;
}

export async function postHomeWorshipComment({
  homeWorshipId,
  content,
  userName,
  password,
}: {
  homeWorshipId: string;
  content: string;
  userName: string;
  password: string;
}) {
  const { data } = await api.post(`/homeWorships/${homeWorshipId}/comments`, {
    content,
    userName,
    password,
  });
  return data;
}

export async function deleteHomeWorshipComment({
  homeWorshipId,
  commentId,
  password,
}: {
  homeWorshipId: string;
  commentId: string;
  password: string;
}) {
  const { data } = await api.delete(`/homeWorships/${homeWorshipId}/comments/${commentId}`, { data: { password } });
  return data;
}

