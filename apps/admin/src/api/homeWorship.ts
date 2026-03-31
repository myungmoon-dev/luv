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

export const postHomeWorship = async (homeWorship: FormData) => {
  const { data } = await api.post("/homeworships", homeWorship, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
