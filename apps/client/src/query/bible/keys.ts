import { YearMonthType } from "type";

const bibleKeys = {
  all: ["bible"],
  list: (yearMonth: YearMonthType) => [...bibleKeys.all, "list", yearMonth],
  detail: (bibleId: string) => [...bibleKeys.all, "detail", bibleId],
};

export default bibleKeys;
