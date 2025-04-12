import { getPopups } from "@/api/popup";
import { useQuery } from "@tanstack/react-query";
import popupKeys from "./keys";

export const useGetPopups = () => {
  return useQuery({
    queryKey: popupKeys.list(),
    queryFn: () => getPopups(),
  });
};
