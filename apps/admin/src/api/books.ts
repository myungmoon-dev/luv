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

export const postBook = async (book: FormData) => {
  const { data } = await api.post("/api/books", book, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const getBook = async ({ bookId }: { bookId: string }) => {
  const { data } = await api.get<IGetBookResponse>(`/api/books/${bookId}`);

  return data;
};

export const deleteBook = async ({ bookId }: { bookId: string }) => {
  const { data } = await api.delete(`/api/books/${bookId}`);

  return data;
};
