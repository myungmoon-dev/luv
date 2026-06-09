import { api } from ".";
import type { IHomeYoutube, IHomeImage } from "type";
import type { PageResponse } from "@/types/common";

const MULTIPART = { headers: { "Content-Type": "multipart/form-data" } };

export const getHomeYoutube = async () => {
  const { data } = await api.get<IHomeYoutube>("/home-content/youtube");
  return data;
};

export const patchHomeYoutube = async ({ youtubeUrl }: { youtubeUrl: string }) => {
  const { data } = await api.patch("/home-content/youtube", { youtubeUrl });
  return data;
};

export const getHomeImages = async ({ page = 0 }: { page?: number } = {}) => {
  const { data } = await api.get<PageResponse<IHomeImage>>("/home-content/images", { params: { page } });
  return data;
};

export const postHomeImage = async (form: FormData) => {
  const { data } = await api.post("/home-content/images", form, MULTIPART);
  return data;
};

export const deleteHomeImage = async ({ id }: { id: string }) => {
  const { data } = await api.delete(`/home-content/images/${id}`);
  return data;
};
