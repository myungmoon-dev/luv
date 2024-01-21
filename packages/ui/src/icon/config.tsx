import { CursorType } from "../types/cursor";
import CrossIcon from "./assets/cross";

export type IconCursorType = `cursor-${CursorType}`;

export type IconNameType = keyof typeof icons;

export type IconSizeType = "sm" | "md" | "lg";

export interface IIconProps {
  backgroundColor?: string;
  strokeColor?: string;
}

export const widthSize: Record<IconSizeType, `w-[${string}]`> = {
  sm: "w-[16px]",
  md: "w-[20px]",
  lg: "w-[24px]",
};

export const icons = {
  Cross: (props: IIconProps) => <CrossIcon {...props} />,
};
