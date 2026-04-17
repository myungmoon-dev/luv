import { api } from "@/lib/api";
import type { IBible, YearMonthType } from "type";

export interface IGetBiblesResponse {
  bibles: IBible[];
}

export interface IGetBibleResponse extends IBible {}

export async function getBibles({ yearMonth }: { yearMonth: YearMonthType }) {
  const { data } = await api.get<IGetBiblesResponse>("/bibles", {
    params: { yearMonth },
  });
  return data;
}

export async function getBible({ bibleId }: { bibleId: string }) {
  const { data } = await api.get<IGetBibleResponse>(`/bibles/${bibleId}`);
  return data;
}

