import { deleteBible, getBible, getBibles, postBible } from "@/api/discipleship";
import { useMutation, useQuery } from "@tanstack/react-query";
import bibleKeys from "./keys";
import { YearMonthType } from "type";

export const usePostBible = () => useMutation({ mutationFn: postBible });

export const useGetBibles = ({
  yearMonth,
  page = 0,
}: {
  yearMonth: YearMonthType;
  page?: number;
}) => {
  return useQuery({
    queryFn: () => getBibles({ yearMonth, page }),
    queryKey: bibleKeys.list(yearMonth, page),
  });
};

export const useGetBible = ({ bibleId }: { bibleId: string }) => {
  return useQuery({
    queryFn: () => getBible(bibleId),
    queryKey: bibleKeys.detail(bibleId),
    enabled: !!bibleId,
  });
};

export const useDeleteBible = () =>
  useMutation({
    mutationFn: deleteBible,
  });
