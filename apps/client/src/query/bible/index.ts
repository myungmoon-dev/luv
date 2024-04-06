import { useQuery } from "@tanstack/react-query";

import { getBible, getBibles } from "@/api/discipleship";
import bibleKeys from "./keys";

const useGetBibles = () => {
  return useQuery({
    queryFn: () => getBibles(),
    queryKey: bibleKeys.list(),
  });
};

const useGetBible = ({ bibleId }: { bibleId: string }) => {
  return useQuery({
    queryFn: () => getBible(bibleId),
    queryKey: bibleKeys.detail(bibleId),
  });
};

export { useGetBible, useGetBibles };
