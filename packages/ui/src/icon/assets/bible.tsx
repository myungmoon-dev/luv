import { IIconProps } from "../config";

const BibleIcon = ({ backgroundColor, strokeColor }: IIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill={backgroundColor}
        stroke={strokeColor}
        xmlns="http://www.w3.org/2000/svg"
        d="m8,8c0-.552.448-1,1-1h2v-2c0-.552.448-1,1-1s1,.448,1,1v2h2c.552,0,1,.448,1,1s-.448,1-1,1h-2v4c0,.552-.448,1-1,1s-1-.448-1-1v-4h-2c-.552,0-1-.448-1-1Zm14-3v14c0,2.757-2.243,5-5,5H6c-2.206,0-4-1.794-4-4V5C2,2.243,4.243,0,7,0h10c2.757,0,5,2.243,5,5Zm-18,0v11.556c.591-.345,1.268-.556,2-.556h14V5c0-1.654-1.346-3-3-3H7c-1.654,0-3,1.346-3,3Zm16,14v-1H6c-1.103,0-2,.897-2,2s.897,2,2,2h11c1.654,0,3-1.346,3-3Z"
      />
      ;
    </svg>
  );
};

export default BibleIcon;
