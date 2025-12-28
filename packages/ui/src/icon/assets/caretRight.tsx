import { IIconProps } from "../config";

const CaretRightIcon = ({
  sizeNumber = 15,
  strokeColor = "#555555",
  cursor,
  iconClassName,
}: IIconProps) => {
  return (
    <svg
      width={sizeNumber}
      height={sizeNumber}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor }}
      className={iconClassName}
    >
      <path
        d="M5.625 2.8125L10.3125 7.5L5.625 12.1875"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CaretRightIcon;
