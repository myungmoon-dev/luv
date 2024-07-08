import { IGetBooksResponse } from "@/types/books/response";
import { api } from ".";

export const getBooks = async () => {
  const { data } = await api.get<IGetBooksResponse>("/api/books");

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
