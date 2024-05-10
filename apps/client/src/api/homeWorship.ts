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
