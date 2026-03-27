import { YearMonthType } from "type";

const bibleKeys = {
  all: ["bible"],
  list: (yearMonth: YearMonthType, page?: number) => [...bibleKeys.all, "list", yearMonth, page],
  detail: (bibleId: string) => [...bibleKeys.all, "detail", bibleId],
};

export default bibleKeys;
