import { cn } from "ui";

interface IQtSummaryTabBarProps {
  label: string;
  currnetIndex: number;
  selectedIndex: number;
  onClick: (selctedIndex: number) => void;
}

const QtSummaryTabBar = ({ label, currnetIndex, selectedIndex, onClick }: IQtSummaryTabBarProps) => {
  return (
    <button
      onClick={() => onClick(currnetIndex)}
      className={cn(
        "rounded-full p-1 px-3 font-Lora text-2xl font-bold duration-300 hover:bg-blue-600 hover:text-white xl:p-3 xl:px-5 xl:text-4xl",
        selectedIndex === currnetIndex ? "bg-blue-600 text-white" : "bg-blue-700 text-blue-600",
      )}
    >
      {label}
    </button>
  );
};

export default QtSummaryTabBar;
