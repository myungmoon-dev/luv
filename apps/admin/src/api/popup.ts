import { IGetPopupsResponse } from "@/types/popup/response";
import { api } from ".";
import { IGetPopupsRequest, IPutPopupShowRequest } from "@/types/popup/request";
import type { IPopup } from "type";

export const getPopups = async ({ onlyShow }: IGetPopupsRequest) => {
  const { data } = await api.get<IGetPopupsResponse>("/popups", {
    params: { onlyShow },
  });

  return data;
};

export const postPopup = async (popup: FormData) => {
  const { data } = await api.post("/popups", popup, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const deletePopup = async ({ id }: { id: string }) => {
  const { data } = await api.delete(`/popups/${id}`);

  return data;
};

export const putPopupShow = async ({ id }: IPutPopupShowRequest) => {
  const { data } = await api.put<IPopup>(`/popups/${id}/show`);
  return data;
};
