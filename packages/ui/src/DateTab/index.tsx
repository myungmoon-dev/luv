import { ReactNode } from "react";
import { cn } from "..";

interface IDateTabProps {
  tabs: string[];
  children: ReactNode;
  selectedTabIndex: number;
  onClickTab: (tabIndex: number) => void;
}

export const DateTab = ({
  children,
  tabs,
  selectedTabIndex,
  onClickTab,
}: IDateTabProps) => {
  return (
    <div className="ui-flex ui-w-full ui-flex-col ui-items-center jui-ustify-center">
      <div className="ui-mb-10 ui-grid ui-min-h-[50px] ui-w-full ui-max-w-3xl ui-grid-cols-4 ui-items-center ui-gap-5 ui-rounded-md ui-bg-gray-100 ui-px-3">
        {tabs.map((tabName, index) => (
          // tabItem
          <div
            className={cn(
              "ui-cursor-pointer ui-text-center ui-text-sm hover:ui-font-bold hover:ui-text-pink-200",
              selectedTabIndex === index ? "ui-font-bold ui-text-pink-200" : ""
            )}
            onClick={() => onClickTab(index)}
          >
            {tabName}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};
