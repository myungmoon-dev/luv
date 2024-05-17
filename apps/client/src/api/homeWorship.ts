import { IGetHomeWorshipResponse, IGetHomeWorshipsResponse } from "@/types/homeWorship/response";
import { api } from ".";

export const getHomeWorships = async () => {
  const { data } = await api.get<IGetHomeWorshipsResponse>("/api/homeWorship");

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

export const deleteHomeWorship = async ({ homeWorshipId }: { homeWorshipId: string }) => {
  const { data } = await api.delete(`/api/homeWorship/${homeWorshipId}`);

  return data;
};
