import { IGetBookResponse, IGetBooksResponse } from "@/types/books/response";
import { api } from ".";

export const getBooks = async () => {
  const { data } = await api.get<IGetBooksResponse>("/books");
  

  return data;
};

export const getBook = async ({ bookId }: { bookId: string }) => {
  const { data } = await api.get<IGetBookResponse>(`/books/${bookId}`);

  return data;
};
