import getDateFormat from "@/utils/getDateFormat";
import { cn } from "ui";

interface IDateTabsProps<T> {
  key: string;
  date: string;
  className?: string;
  onClick: () => void;
}

interface IDateTabs {
  id: string;
  date: string;
}

const DateTabs = <T extends IDateTabs>({ key, date, className = "", onClick }: IDateTabsProps<T>) => {
  return (
    <div
      key={key}
      className={cn("cursor-pointer text-center text-sm hover:font-bold hover:text-[#892122]", className)}
      onClick={onClick}
    >
      {getDateFormat(date)}
    </div>
  );
};

export default DateTabs;
