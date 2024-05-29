import { ReactNode } from "react";
import { cn } from "..";
import { YearMonthType } from "type";

interface IDateTabProps {
  tabs: { date: YearMonthType; label: string }[];
  children?: ReactNode;
  selectedTab: YearMonthType;
  onClickTab: (tab: YearMonthType) => void;
}

export const DateTab = ({ children, tabs, selectedTab, onClickTab }: IDateTabProps) => {
  return (
    <div className="ui-flex ui-w-full ui-flex-col ui-items-center ui-justify-center">
      <div className="ui-mb-10 ui-grid ui-min-h-[50px] ui-w-full ui-max-w-3xl ui-grid-cols-4 ui-items-center ui-gap-5 ui-rounded-md ui-bg-gray-100 ui-px-3">
        {tabs.map((tab, index) => (
          // tabItem
          <div
            key={index}
            className={cn(
              "ui-cursor-pointer ui-text-center ui-text-sm sm:ui-text-base hover:ui-font-bold hover:ui-text-blue-400",
              selectedTab === tab.date && "ui-font-bold ui-text-blue-500"
            )}
            onClick={() => onClickTab(tab.date)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};
