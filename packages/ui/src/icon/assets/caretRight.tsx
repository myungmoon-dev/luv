import { IIconProps } from "../config";

const CaretRightIcon = ({ sizeNumber }: IIconProps) => {
  return (
    <svg
      width={sizeNumber}
      height={sizeNumber}
      viewBox={`0 0 ${sizeNumber} ${sizeNumber}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.875 2.4375L8.9375 6.5L4.875 10.5625"
        stroke="#555555"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CaretRightIcon;
