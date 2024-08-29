import { deleteBook, getBook, getBooks, postBook } from "@/api/books";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { booksKeys } from "./keys";

export const useGetBooks = () => {
  return useInfiniteQuery({
    queryFn: ({ pageParam = {} }: { pageParam?: { lastVisibleCreatedAt?: number } }) =>
      getBooks({ lastVisibleCreatedAt: pageParam.lastVisibleCreatedAt }),
    queryKey: booksKeys.list(),
    initialPageParam: { lastVisibleCreatedAt: undefined },
    getNextPageParam: (lastPage) => {
      return { lastVisibleCreatedAt: lastPage.books.at(-1)?.createdAt };
    },
  });
};

export const useGetBook = ({ bookId }: { bookId: string }) => {
  return useQuery({
    queryFn: () => getBook({ bookId }),
    queryKey: booksKeys.detail(bookId),
    select: (res) => res.book,
  });
};

export const usePostBook = () => useMutation({ mutationFn: postBook });

export const useDeleteBook = () => useMutation({ mutationFn: deleteBook });
