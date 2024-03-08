import { Chip, Line } from "..";
import { cn } from "../utils/twMerge";

interface ISectionHeaderProps {
  text: string;
  hasLine?: boolean;
  color?: "pink";
  size?: "sm" | "md" | "lg" | "xl";
  selected?: boolean;
  className?: string;
}

export const SectionHeader = ({ text, hasLine, color, size, selected, className }: ISectionHeaderProps) => {
  return (
    <div className={cn("ui-flex ui-w-full ui-items-center ui-justify-center", className)}>
      {hasLine && <Line />}
      <Chip text={text} color={color} size={size} selected={selected} />
      {hasLine && <Line />}
    </div>
  );
};
