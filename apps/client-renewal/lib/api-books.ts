import { api } from "@/lib/api";
import type { IBook } from "type";

export async function getBooks() {
  const { data } = await api.get<{ books: IBook[]; totalBooksCount: number }>("/books");
  return data;
}
