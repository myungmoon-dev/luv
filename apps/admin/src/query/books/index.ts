import { getBooks, postBook } from "@/api/books";
import { useMutation, useQuery } from "@tanstack/react-query";
import { booksKeys } from "./keys";

export const useGetBooks = () => {
  return useQuery({
    queryFn: getBooks,
    queryKey: booksKeys.list(),
  });
};

export const usePostBook = () => useMutation({ mutationFn: postBook });
