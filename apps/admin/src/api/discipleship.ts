import { IBibleForm, YearMonthType } from "type";
import { IGetBibleResponse, IGetBiblesResponse } from "@/types/discipleship/bible/response";
import { api } from ".";

export const postBible = async (bible: IBibleForm) => {
  const { data } = await api.post("/api/discipleship/bibles", bible);

  return data;
};

export const getBibles = async ({ yearMonth }: { yearMonth: YearMonthType }) => {
  const { data } = await api.get<IGetBiblesResponse>("/api/discipleship/bibles", {
    params: {
      yearMonth,
    },
  });

  return data;
};

export const getBible = async (bibleId: string) => {
  const { data } = await api.get<IGetBibleResponse>(`/api/discipleship/bibles/${bibleId}`);

  return data;
};

export const deleteBible = async ({ bibleId }: { bibleId: string }) => {
  const { data } = await api.delete(`/api/discipleship/bibles/${bibleId}`);

  return data;
};
