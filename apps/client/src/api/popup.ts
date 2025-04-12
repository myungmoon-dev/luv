import { IGetPopupsResponse } from "@/types/popup/response";
import { api } from ".";

export const getPopups = async () => {
  const { data } = await api.get<IGetPopupsResponse>("/popups", {
    params: { onlyShow: true },
  });

  return data;
};
