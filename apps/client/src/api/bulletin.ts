import { IGetBulletinResponse, IGetBulletinsResponse } from "@/types/bulletin/response";
import { api } from ".";

export const getBulletins = async () => {
  const { data } = await api.get<IGetBulletinsResponse>("/api/bulletins");

  return data;
};

export const getBulletin = async (bulletinId: string) => {
  const { data } = await api.get<IGetBulletinResponse>(`/api/bulletins/${bulletinId}`);

  return data;
};
