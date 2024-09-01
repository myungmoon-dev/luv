import { IGetBookResponse, IGetBooksResponse } from "@/types/books/response";
import { api } from ".";

export const getBooks = async ({ lastVisibleCreatedAt }: { lastVisibleCreatedAt?: number }) => {
  const { data } = await api.get<IGetBooksResponse>("/api/books", {
    params: {
      lastVisibleCreatedAt: JSON.stringify(lastVisibleCreatedAt) || {},
    },
  });

  return data;
};

export const getBook = async ({ bookId }: { bookId: string }) => {
  const { data } = await api.get<IGetBookResponse>(`/api/books/${bookId}`);

  return data;
};
