import { getBible, getBibles, postBible } from "@/api/discipleship";
import { useMutation, useQuery } from "@tanstack/react-query";
import bibleKeys from "./keys";
import { YearMonthType } from "type";

export const usePostBible = () => useMutation({ mutationFn: postBible });

export const useGetBibles = ({ yearMonth }: { yearMonth: YearMonthType }) => {
  return useQuery({
    queryFn: () => getBibles({ yearMonth }),
    queryKey: bibleKeys.list(),
  });
};

export const useGetBible = ({ bibleId }: { bibleId: string }) => {
  return useQuery({
    queryFn: () => getBible(bibleId),
    queryKey: bibleKeys.detail(bibleId),
  });
};
