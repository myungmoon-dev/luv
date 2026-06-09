import { api } from ".";
import type { IPastorBook, IPastorProfile } from "type";
import type { PageResponse } from "@/types/common";

export type PastorBookForm = {
  title: string;
  sub?: string;
  publisher: string;
  year: string;
};

const MULTIPART = { headers: { "Content-Type": "multipart/form-data" } };

export const getPastorBooks = async ({ page = 0 }: { page?: number } = {}) => {
  const { data } = await api.get<PageResponse<IPastorBook>>("/pastor/books", { params: { page } });
  return data;
};

export const postPastorBook = async (form: FormData) => {
  const { data } = await api.post("/pastor/books", form, MULTIPART);
  return data;
};

export const patchPastorBook = async ({ id, form }: { id: string; form: FormData }) => {
  const { data } = await api.patch(`/pastor/books/${id}`, form, MULTIPART);
  return data;
};

export const deletePastorBook = async ({ id }: { id: string }) => {
  const { data } = await api.delete(`/pastor/books/${id}`);
  return data;
};

export const getPastorProfile = async () => {
  const { data } = await api.get<IPastorProfile>("/pastor/profile");
  return data;
};

export const patchPastorProfile = async (form: FormData) => {
  const { data } = await api.patch("/pastor/profile", form, MULTIPART);
  return data;
};
