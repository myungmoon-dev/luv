import { IGetBibleResponse, IGetBiblesResponse } from "@/types/discipleship/bible/response";
import { api } from ".";

export const getBibles = async () => {
  const { data } = await api.get<IGetBiblesResponse>("/api/discipleship/bibles");

  return data;
};

export const getBible = async (bibleId: string) => {
  const { data } = await api.get<IGetBibleResponse>(`/api/discipleship/bibles/${bibleId}`);

  return data;
};
