import { IIconProps } from "../config";

const ClockIcon = ({ backgroundColor, strokeColor }: IIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 26 26">
      <path
        fill={backgroundColor}
        stroke={strokeColor}
        d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12ZM12,1C5.935,1,1,5.935,1,12s4.935,11,11,11,11-4.935,11-11S18.065,1,12,1Zm-2.1,15.8l3-4c.065-.086,.1-.191,.1-.3V5.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v6.833l-2.9,3.867c-.166,.221-.121,.534,.1,.7,.09,.067,.195,.1,.299,.1,.152,0,.302-.069,.4-.2Z"
      />
    </svg>
  );
};

export default ClockIcon;
