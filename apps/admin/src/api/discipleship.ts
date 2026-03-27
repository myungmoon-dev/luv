import { IBibleForm, YearMonthType } from "type";
import { IGetBibleResponse, IGetBiblesResponse } from "@/types/bible/response";
import { api } from ".";

export const postBible = async (bible: IBibleForm) => {
  const { data } = await api.post("/bibles", bible);

  return data;
};

export const getBibles = async ({
  yearMonth,
  page = 0,
}: {
  yearMonth: YearMonthType;
  page?: number;
}) => {
  const { data } = await api.get<IGetBiblesResponse>("/bibles", {
    params: { yearMonth, page },
  });

  return data;
};

export const getBible = async (bibleId: string) => {
  const { data } = await api.get<IGetBibleResponse>(`/bibles/${bibleId}`);

  return data;
};

export const deleteBible = async ({ bibleId }: { bibleId: string }) => {
  const { data } = await api.delete(`/bibles/${bibleId}`);

  return data;
};
