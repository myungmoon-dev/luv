import { IIconProps } from "../config";

const HamburgerIcon = ({ backgroundColor, strokeColor }: IIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        fill={backgroundColor}
        stroke={strokeColor}
      />
    </svg>
  );
};

export default HamburgerIcon;
