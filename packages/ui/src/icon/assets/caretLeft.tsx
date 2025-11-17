import { IIconProps } from "../config";

const CaretLeftIcon = ({
  sizeNumber = 13,
  strokeColor = "#555555",
  cursor,
  iconClassName,
}: IIconProps) => {
  return (
    <svg
      width={sizeNumber}
      height={sizeNumber}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor }}
      className={iconClassName}
    >
      <path
        d="M8.125 10.5625L4.0625 6.5L8.125 2.4375"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CaretLeftIcon;
