import { IGetBooksResponse } from "@/types/books/response";
import { api } from ".";

export const getBooks = async () => {
  const { data } = await api.get<IGetBooksResponse>("/api/books");

  return data;
};
