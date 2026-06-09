import { api } from "@/lib/api";
import type { IPastorBook, IPastorProfile } from "type";

export async function getPastorBooks(): Promise<IPastorBook[]> {
  const { data } = await api.get<{ content: IPastorBook[] }>("/pastor/books");
  return data?.content ?? [];
}

export async function getPastorProfile(): Promise<IPastorProfile> {
  const { data } = await api.get<IPastorProfile>("/pastor/profile");
  return data;
}
