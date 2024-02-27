import { IconCursorType, IconNameType, IconSizeType, icons, widthSize } from "./config";

interface IIconPropsType {
  name: IconNameType;
  size: IconSizeType;
  strokeColor?: string;
  backgroundColor?: string;
  cursor?: IconCursorType;
  onClick?: () => void;
}

export const Icon = ({
  name,
  size,
  strokeColor = "black",
  backgroundColor,
  cursor = "ui-cursor-auto",
  onClick,
}: IIconPropsType) => {
  const IconComponent = icons[name as IconNameType];

  return (
    <div className={`${widthSize[size]} ${cursor}`} onClick={() => onClick && onClick()}>
      <IconComponent backgroundColor={backgroundColor} strokeColor={strokeColor} />
    </div>
  );
};
