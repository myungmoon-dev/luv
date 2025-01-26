import { IGetBookResponse, IGetBooksResponse } from "@/types/books/response";
import { api } from ".";

export const getBooks = async () => {
  const { data } = await api.get<IGetBooksResponse>("/books");

  return data;
};

export const postBook = async (book: FormData) => {
  const { data } = await api.post("/books", book, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const getBook = async ({ bookId }: { bookId: string }) => {
  const { data } = await api.get<IGetBookResponse>(`/books/${bookId}`);

  return data;
};

export const deleteBook = async ({ bookId }: { bookId: string }) => {
  const { data } = await api.delete(`/books/${bookId}`);

  return data;
};

export const putBook = async ({ id, form }: { id: string; form: FormData }) => {
  const { data } = await api.put(`/books/${id}`, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
