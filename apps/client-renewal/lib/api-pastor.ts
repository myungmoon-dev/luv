import { api } from "@/lib/api";
import type { IPastorBook } from "type";

export async function getPastorBooks(): Promise<IPastorBook[]> {
  const { data } = await api.get<{ content: IPastorBook[] }>("/pastor/books");
  return data?.content ?? [];
}
