import { IHistoryEvent } from "@/constants/innerMenus/types";
import { cn } from "ui";

interface IHistoryEventProps {
  event: IHistoryEvent;
  index: number;
  length: number;
}

const HistoryEvent = ({ index, length, event }: IHistoryEventProps) => {
  return (
    <div className="relative grid grid-cols-2 place-items-center gap-16">
      <p
        className={cn(
          "justify-self-end text-sm font-semibold text-blue-600 md:text-base lg:text-lg",
          index === 0 && "self-start",
          length - 1 === index && "self-center",
        )}
      >
        {event.date}
      </p>
      <p
        className={cn(
          "max-w-lg justify-self-start break-keep text-sm lg:text-base",
          index === 0 && "self-start",
          length - 1 === index && "self-center",
        )}
      >
        {event.description}
      </p>
      <div
        className={cn(
          "absolute left-1/2 z-[1] h-4 w-4 -translate-x-1/2 transform rounded-full bg-blue-600",
          index === 0 && "top-0",
        )}
      />
    </div>
  );
};

export default HistoryEvent;
