import { Chip, Line } from "..";
import { cn } from "../utils/twMerge";

interface ISectionHeaderProps {
  text: string;
  hasLine?: boolean;
  color?: "red";
  size?: "sm" | "md" | "lg" | "xl";
  selected?: boolean;
  className?: string;
}

export const SectionHeader = ({
  text,
  hasLine,
  color,
  size,
  selected,
  className,
}: ISectionHeaderProps) => {
  return (
    <div className={cn("flex w-full items-center justify-center", className)}>
      {hasLine && <Line />}
      <Chip
        text={text}
        color={color}
        size={size}
        selected={selected ? "select" : "unselect"}
      />
      {hasLine && <Line />}
    </div>
  );
};