import { useQuery } from "@tanstack/react-query";

import { getBible, getBibles } from "@/api/discipleship";
import bibleKeys from "./keys";
import { YearMonthType } from "type";

const useGetBibles = ({ yearMonth }: { yearMonth: YearMonthType }) => {
  return useQuery({
    queryFn: () => getBibles({ yearMonth }),
    queryKey: bibleKeys.list(yearMonth),
  });
};

const useGetBible = ({ bibleId }: { bibleId: string }) => {
  return useQuery({
    queryFn: () => getBible(bibleId),
    queryKey: bibleKeys.detail(bibleId),
  });
};

export { useGetBible, useGetBibles };
