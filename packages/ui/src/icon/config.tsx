import { CursorType } from "../types/cursor";

import CrossIcon from "./assets/cross";
import YoutubeIcon from "./assets/youtube";
import OpenBookIcon from "./assets/openBook";

export type IconCursorType = `ui-cursor-${CursorType}`;

export type IconNameType = keyof typeof icons;

export type IconSizeType = "sm" | "md" | "lg";

export interface IIconProps {
  backgroundColor?: string;
  strokeColor?: string;
}

export const widthSize: Record<IconSizeType, `ui-w-[${string}]`> = {
  sm: "ui-w-[16px]",
  md: "ui-w-[20px]",
  lg: "ui-w-[24px]",
};

export const icons = {
  Cross: (props: IIconProps) => <CrossIcon {...props} />,
  Youtube: (props: IIconProps) => <YoutubeIcon {...props} />,
  OpenBook: (props: IIconProps) => <OpenBookIcon {...props} />,
};
