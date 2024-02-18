import { Chip, Line } from "..";

interface ISectionHeaderProps {
  text: string;
  hasLine?: boolean;
  color?: "red" | "selected";
  size?: "sm" | "md" | "lg" | "xl";
}

export const SectionHeader = ({
  text,
  hasLine,
  color,
  size,
}: ISectionHeaderProps) => {
  return (
    <div className="flex w-full items-center justify-center">
      {hasLine && <Line />}
      <Chip text={text} color={color} size={size} />
      {hasLine && <Line />}
    </div>
  );
};
