import { SVGProps } from "react";

interface IProps extends SVGProps<SVGSVGElement> {}

const CaretDown = ({ ...props }: IProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.5 9L12 16.5L4.5 9"
        stroke="#5A5A5A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CaretDown;
