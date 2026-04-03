import { api } from "@/lib/api";

export type Popup = {
  id: string;
  title: string;
  imageUrl: string;
  createdAt: number;
  show: boolean;
};

/** onlyShow=true 고정, 응답은 ApiEnvelope 후 인터셉터에서 data만 남김 → Popup[] */
export async function getPopups(): Promise<Popup[]> {
  const { data } = await api.get<Popup[]>("/popups", {
    params: { onlyShow: true },
  });
  return data ?? [];
}
