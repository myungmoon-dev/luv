import dayjs from "dayjs";
import { YearMonthType } from "type";

export const getDateTabs = (): { date: YearMonthType; label: string }[] => {
  const currentDate = dayjs();

  const tabs = [];

  for (let i = 0; i < 4; i++) {
    const newDate = currentDate.add(i, "month");
    const newYear = newDate.year();
    const newMonth = newDate.month() + 1;
    const formattedMonth = newMonth.toString().padStart(2, "0");
    tabs.push({
      label: `${formattedMonth}월`,
      date: `${newYear}-${formattedMonth}` as YearMonthType,
    });
  }

  return tabs;
};
