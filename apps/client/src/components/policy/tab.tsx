import { cn } from "ui";

interface IPolicyTabProps {
  label: string;
  currnetIndex: number;
  selectedIndex: number;
  onClick: (selctedIndex: number) => void;
}

const PolicyTab = ({ label, currnetIndex, selectedIndex, onClick }: IPolicyTabProps) => {
  return (
    <button
      onClick={() => onClick(currnetIndex)}
      className={cn(
        "flex h-full w-full items-center justify-center whitespace-pre-wrap p-2 text-center font-SCoreDream text-sm duration-500 hover:bg-blue-600 hover:text-white md:text-lg 2xl:text-2xl",
        selectedIndex === currnetIndex ? "bg-blue-600 text-white" : "bg-gray-100 text-blue-600",
      )}
    >
      {label}
    </button>
  );
};
export default PolicyTab;
