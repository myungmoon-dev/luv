import { IGetBulletinResponse, IGetBulletinsResponse } from "@/types/bulletin/response";
import { api } from ".";

export const getBulletins = async ({ page = 0, size = 10, year, month }: { page?: number; size?: number; year?: string; month?: string } = {}) => {
  const { data } = await api.get<IGetBulletinsResponse>("/bulletins", { params: { page, size, year, month } });

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

export const patchBulletin = async ({ bulletinId, formData }: { bulletinId: string; formData: FormData }) => {
  const { data } = await api.patch(`/bulletins/${bulletinId}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return data;
};

export const deleteBulletin = async (bulletinId: string) => {
  const { data } = await api.delete(`/bulletins/${bulletinId}`);

  return data;
};

export const deleteBulletins = async (ids: string[]) => {
  const { data } = await api.delete("/bulletins", { data: ids });

  return data;
};

export const getAvailableDates = async () => {
  const { data } = await api.get<Record<string, string[]>>("/bulletins/dates");

  return data;
};
