import { api } from "@/lib/api";
import type { IHomeYoutube, IHomeImage } from "type";

export async function getHomeYoutube(): Promise<IHomeYoutube> {
  const { data } = await api.get<IHomeYoutube>("/home-content/youtube");
  return data;
}

export async function getHomeImages(): Promise<IHomeImage[]> {
  const { data } = await api.get<{ content: IHomeImage[] }>("/home-content/images");
  return data?.content ?? [];
}
