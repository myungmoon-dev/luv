import { getBooks } from "@/api/books";
import { useInfiniteQuery } from "@tanstack/react-query";
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
