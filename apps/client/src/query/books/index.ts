import { getBook, getBooks } from "@/api/books";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { booksKeys } from "./keys";
import { useParams } from "next/navigation";

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

export const useGetBook = () => {
  const { id } = useParams();
  const bookId = id as string;

  return useQuery({
    queryFn: () => getBook({ bookId }),
    queryKey: booksKeys.detail(bookId),
  });
};
