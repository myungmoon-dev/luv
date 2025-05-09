import { IGetBibleResponse, IGetBiblesResponse } from "@/types/discipleship/bible/response";
import { api } from ".";
import { YearMonthType } from "type";

export const getBibles = async ({ yearMonth }: { yearMonth: YearMonthType }) => {
  const { data } = await api.get<IGetBiblesResponse>("/bibles", {
    params: {
      yearMonth,
    },
  });

  return data;
};

export const getBible = async (bibleId: string) => {
  const { data } = await api.get<IGetBibleResponse>(`/bibles/${bibleId}`);

  return data;
};
