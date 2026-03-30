import { api } from "@/lib/api";
import type { IBulletin } from "type";

export type GetBulletinsParams = { page: number; size: number };

export async function getBulletins({ page, size }: GetBulletinsParams) {
  const { data } = await api.get<{ bulletins: IBulletin[]; totalBulletins: number }>("/bulletins", {
    params: { page, size },
  });
  return data;
}

export async function getBulletin(bulletinId: string) {
  const { data } = await api.get<IBulletin>(`/bulletins/${bulletinId}`);
  return data;
}
