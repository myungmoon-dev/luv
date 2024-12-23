import { IGetHomeWorshipResponse, IGetHomeWorshipsResponse } from "@/types/homeWorship/response";
import { api } from ".";

export const getHomeWorships = async ({
  lastVisibleCreatedAt,
  isGetPinned = true,
}: {
  lastVisibleCreatedAt?: string;
  isGetPinned?: boolean;
}) => {
  const { data } = await api.get<IGetHomeWorshipsResponse>("/api/homeWorship", {
    params: {
      lastVisibleCreatedAt: JSON.stringify(lastVisibleCreatedAt) || {},
      isGetPinned,
    },
  });

  return data;
};

export const getHomeWorship = async (homeWorshipId: string) => {
  const { data } = await api.get<IGetHomeWorshipResponse>(`/api/homeWorship/${homeWorshipId}`);

  return data;
};

export const postHomeWorship = async (homeWorship: FormData) => {
  const { data } = await api.post("/api/homeWorship", homeWorship, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const putHomeWorship = async ({
  homeWorship,
  homeWorshipId,
}: {
  homeWorship: FormData;
  homeWorshipId: string;
}) => {
  const { data } = await api.put(`/api/homeWorship/${homeWorshipId}`, homeWorship, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const deleteHomeWorship = async ({ homeWorshipId, password }: { homeWorshipId: string; password: string }) => {
  const { data } = await api.delete(`/api/homeWorship/${homeWorshipId}`, { params: { password } });

  return data;
};

export const postHomeWorshipComment = async ({
  homeWorshipId,
  content,
  name,
  password,
}: {
  homeWorshipId: string;
  name: string;
  content: string;
  password: string;
}) => {
  const { data } = await api.post(`/api/homeWorship/${homeWorshipId}/comment`, {
    content,
    name,
    password,
  });

  return data;
};

export const deleteHomeWorshipComment = async ({
  homeWorshipId,
  commentId,
  password,
}: {
  homeWorshipId: string;
  commentId: string;
  password: string;
}) => {
  const { data } = await api.delete(`/api/homeWorship/${homeWorshipId}/comment`, { data: { password, commentId } });

  return data;
};

export const postHomeWorshipPasswordCheck = async ({
  homeWorshipId,
  password,
}: {
  homeWorshipId: string;
  password: string;
}) => {
  const { data } = await api.post(`/api/homeWorship/${homeWorshipId}/password-check`, { password });

  return data;
};
