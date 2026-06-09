import { IGetHomeWorshipResponse, IGetHomeWorshipsResponse } from "@/types/homeWorship/response";
import { api } from ".";
import { IGetHomeWorshipsRequest } from "@/types/homeWorship/request";

export const getHomeWorships = async ({ page, size }: IGetHomeWorshipsRequest) => {
  const { data } = await api.get<IGetHomeWorshipsResponse>("/homeworships", {
    params: {
      page,
      size,
      // lastVisibleCreatedAt: JSON.stringify(lastVisibleCreatedAt) || {},
      // isGetPinned,
    },
  });

  return data;
};

export const getHomeWorship = async (homeWorshipId: string) => {
  const { data } = await api.get<IGetHomeWorshipResponse>(`/homeworships/${homeWorshipId}`);

  return data;
};

export const postHomeWorship = async (homeWorship: FormData) => {
  const { data } = await api.post("/homeworships", homeWorship, {
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
  const { data } = await api.patch(`/homeworships/${homeWorshipId}`, homeWorship, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const deleteHomeWorship = async ({ homeWorshipId, password }: { homeWorshipId: string; password: string }) => {
  const { data } = await api.delete(`/homeworships/${homeWorshipId}`, { data: { password } });

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
  const { data } = await api.post(`/homeworships/${homeWorshipId}/comments`, {
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
  const { data } = await api.delete(`/homeworships/${homeWorshipId}/comments/${commentId}`, { data: { password } });

  return data;
};
