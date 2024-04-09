import { getBible, getBibles, postBible } from "@/api/discipleship";
import { useMutation, useQuery } from "@tanstack/react-query";
import bibleKeys from "./keys";

export const usePostBible = () => useMutation({ mutationFn: postBible });

export const useGetBibles = () => {
  return useQuery({
    queryFn: () => getBibles(),
    queryKey: bibleKeys.list(),
  });
};

export const useGetBible = ({ bibleId }: { bibleId: string }) => {
  return useQuery({
    queryFn: () => getBible(bibleId),
    queryKey: bibleKeys.detail(bibleId),
  });
};
