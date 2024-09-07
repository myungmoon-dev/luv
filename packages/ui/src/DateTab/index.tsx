import { YearMonthType } from "type";
import { cn } from "..";

interface IDateTabProps {
  tabs: { date: YearMonthType; label: string }[];
  selectedTab: YearMonthType;
  onClickTab: (tab: YearMonthType) => void;
  onClickPrev: () => void;
  onClickNext: () => void;
}

export const DateTab = ({
  tabs,
  selectedTab,
  onClickTab,
  onClickPrev,
  onClickNext,
}: IDateTabProps) => {
  return (
    <div className="ui-relative ui-mb-10 ui-min-h-[50px]">
      <button
        onClick={onClickPrev}
        className="ui-absolute ui-top-1/2 -ui-left-4 ui-text-2xl ui-pt-1 ui-border ui-rounded-full ui-text-black ui-bg-zinc-200 dark:ui-text-white dark:ui-bg-zinc-700 ui-w-8 ui-h-8 ui-flex ui-justify-center ui-items-center ui-border-gray-300 -ui-translate-y-1/2 hover:ui-bg-gray-200"
      >
        {"<"}
      </button>
      <div className="ui-flex ui-justify-evenly ui-rounded-md ui-w-full ui-bg-zinc-100 ui-h-[50px] ui-items-center">
        {tabs.map((tab) => (
          <div
            key={tab.date}
            className={cn(
              "ui-cursor-pointer ui-text-center ui-text-sm sm:ui-text-base hover:ui-font-bold ui-text-black hover:ui-text-blue-400",
              selectedTab === tab.date && "ui-font-bold ui-text-blue-500",
            )}
            onClick={() => onClickTab(tab.date)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <button
        onClick={onClickNext}
        className="ui-absolute ui-top-1/2 -ui-right-4 ui-text-2xl ui-pt-1 ui-border ui-rounded-full ui-text-black ui-bg-zinc-200 dark:ui-text-white dark:ui-bg-zinc-700 ui-w-8 ui-h-8 ui-flex ui-justify-center ui-items-center ui-border-gray-300 -ui-translate-y-1/2 hover:ui-bg-gray-200"
      >
        {">"}
      </button>
    </div>
  );
};
