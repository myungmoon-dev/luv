import { IIconProps } from "../config";

const CaretDownIcon = ({
  sizeNumber = 14,
  strokeColor = "#969696",
  cursor,
  iconClassName,
}: IIconProps) => {
  return (
    <svg
      width={sizeNumber}
      height={sizeNumber}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor }}
      className={iconClassName}
    >
      <path
        d="M11.375 5.25L7 9.625L2.625 5.25"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CaretDownIcon;
