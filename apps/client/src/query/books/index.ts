import { getBooks } from "@/api/books";
import { useQuery } from "@tanstack/react-query";
import { booksKeys } from "./keys";

export const useGetBooks = () => {
  return useQuery({
    queryFn: getBooks,
    queryKey: booksKeys.list(),
  });
};
