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
        "font-Lora rounded-full p-1 px-3 text-2xl font-bold duration-300 hover:bg-blue-700 hover:text-white",
        selectedIndex === currnetIndex ? "bg-blue-600 text-white" : "bg-blue-700 text-blue-600",
      )}
    >
      {label}
    </button>
  );
};

export default QtSummaryTabBar;
