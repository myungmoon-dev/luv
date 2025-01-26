import { getBook, getBooks } from "@/api/books";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { booksKeys } from "./keys";

export const useGetBooks = () => {
  return useQuery({
    queryFn: () => getBooks(),
    queryKey: booksKeys.list(),
  });
};

export const useGetBook = ({ bookId }: { bookId: string }) => {
  return useQuery({
    queryFn: () => getBook({ bookId }),
    queryKey: booksKeys.detail(bookId),
    enabled:!!bookId,
  });
};
