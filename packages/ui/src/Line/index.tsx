import { cn } from "..";

interface ILineProps {
  className?: string;
}

export const Line = ({ className }: ILineProps) => {
  return (
    <div
      className={cn(
        "ui-h-[2px] ui-flex-1 ui-rounded-lg ui-bg-[#dfc7c7]",
        className
      )}
    />
  );
};
