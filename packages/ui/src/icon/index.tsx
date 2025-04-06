import { cn } from "..";
import { IconCursorType, IconNameType, IconSizeType, icons, widthSize } from "./config";

export interface IIconPropsType {
  name: IconNameType;
  size?: IconSizeType;
  strokeColor?: string;
  backgroundColor?: string;
  cursor?: IconCursorType;
  className?: string;
  onClick?: () => void;
  sizeNumber?: number;
}

export const Icon = ({
  name,
  size,
  strokeColor = "black",
  backgroundColor,
  cursor = "ui-cursor-auto",
  className,
  onClick,
  sizeNumber,
}: IIconPropsType) => {
  const IconComponent = icons[name as IconNameType];

  return (
    <div
      className={cn(size && widthSize[size], cursor, className)}
      onClick={() => onClick && onClick()}
    >
      <IconComponent
        backgroundColor={backgroundColor}
        strokeColor={strokeColor}
        sizeNumber={sizeNumber}
      />
    </div>
  );
};
