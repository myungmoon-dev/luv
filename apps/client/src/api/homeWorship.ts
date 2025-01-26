import { IGetHomeWorshipResponse, IGetHomeWorshipsResponse } from "@/types/homeWorship/response";
import { api } from ".";

export const getHomeWorships = async () => {
  const { data } = await api.get<IGetHomeWorshipsResponse>("/homeWorships", {
    params: {
      // lastVisibleCreatedAt: JSON.stringify(lastVisibleCreatedAt) || {},
      // isGetPinned,
    },
  });

  return data;
};

export const getHomeWorship = async (homeWorshipId: string) => {
  const { data } = await api.get<IGetHomeWorshipResponse>(`/homeWorships/${homeWorshipId}`);

  return data;
};

export const postHomeWorship = async (homeWorship: FormData) => {
  const { data } = await api.post("/homeWorships", homeWorship, {
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
  const { data } = await api.put(`/homeWorships/${homeWorshipId}`, homeWorship, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const deleteHomeWorship = async ({ homeWorshipId, password }: { homeWorshipId: string; password: string }) => {
  const { data } = await api.delete(`/homeWorships/${homeWorshipId}`, { params: { password } });

  return data;
};

export const postHomeWorshipComment = async ({
  homeWorshipId,
  content,
  userName,
  password,
}: {
  homeWorshipId: string;
  userName: string;
  content: string;
  password: string;
}) => {
  const { data } = await api.post(`/homeWorships/${homeWorshipId}/comments`, {
    content,
    userName,
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
  const { data } = await api.delete(`/homeWorships/${homeWorshipId}/comments/${commentId}`, { data: { password } });

  return data;
};
