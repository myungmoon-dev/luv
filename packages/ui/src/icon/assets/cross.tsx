import { IIconProps } from "../config";

const CrossIcon = ({ backgroundColor, strokeColor }: IIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M14 2H10V8H4V12H10V22H14V12H20V8H14V2Z" fill={backgroundColor} stroke={strokeColor}></path>
    </svg>
  );
};

export default CrossIcon;
