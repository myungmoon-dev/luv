import { IGetBulletinResponse, IGetBulletinsResponse } from "@/types/bulletin/response";
import { api } from ".";
import { IGetBulletinsRequest } from "@/types/bulletin/request";

export const getBulletins = async ({ page, size }: IGetBulletinsRequest) => {
  const { data } = await api.get<IGetBulletinsResponse>("/bulletins", { params: { page, size } });

  return data;
};

export const getBulletin = async (bulletinId: string) => {
  const { data } = await api.get<IGetBulletinResponse>(`/bulletins/${bulletinId}`);

  return data;
};
