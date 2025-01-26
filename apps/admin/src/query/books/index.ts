import { deleteBook, getBook, getBooks, postBook, putBook } from "@/api/books";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
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
    enabled: !!bookId,
  });
};

export const usePostBook = () => useMutation({ mutationFn: postBook });

export const useDeleteBook = () => useMutation({ mutationFn: deleteBook });

export const usePutBook = () => useMutation({ mutationFn: putBook });
