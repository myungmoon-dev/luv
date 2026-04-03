import { api } from "@/lib/api";

export type PopupItem = { imageUrl: string };

export type GetPopupsResponse = {
  popups: PopupItem[];
  totalPopups: number;
};

export async function getPopups() {
  const { data } = await api.get<GetPopupsResponse>("/popups", {
    params: { onlyShow: true },
  });
  return data;
}
