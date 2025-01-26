import { IGetBulletinResponse, IGetBulletinsResponse } from "@/types/bulletin/response";
import { api } from ".";

export const getBulletins = async () => {
  const { data } = await api.get<IGetBulletinsResponse>("/bulletins");

  return data;
};

export const postBulletin = async (bulletin: FormData) => {
  const { data } = await api.post("/bulletins", bulletin, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const getBulletin = async (bulletinId: string) => {
  const { data } = await api.get<IGetBulletinResponse>(`/bulletins/${bulletinId}`);

  return data;
};

export const deleteBulletin = async (bulletinId: string) => {
  const { data } = await api.delete(`/bulletins/${bulletinId}`);

  return data;
};
