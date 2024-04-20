import { CursorType } from "../types/cursor";
import CrossIcon from "./assets/cross";
import YoutubeIcon from "./assets/youtube";
import OpenBookIcon from "./assets/openBook";
import HamburgerIcon from "./assets/hamburger";
import BibleIcon from "./assets/bible";
import PrayIcon from "./assets/pray";
import BellIcon from "./assets/bell";
import HandHeartIcon from "./assets/handHeart";
import CircleHeartIcon from "./assets/circleHeart";
import ClockIcon from "./assets/clock";
import MapIcon from "./assets/map";
import UserIcon from "./assets/user";
import { LogoBlackIcon } from "./assets/logoBlack";
import { LogoBlueIcon } from "./assets/logoBlue";

export type IconCursorType = `ui-cursor-${CursorType}`;

export type IconNameType = keyof typeof icons;

export type IconSizeType = "sm" | "md" | "lg" | "xl" | "2xl" | "4xl";

export interface IIconProps {
  backgroundColor?: string;
  strokeColor?: string;
}

export const widthSize: Record<IconSizeType, `ui-w-[${string}]`> = {
  sm: "ui-w-[16px]",
  md: "ui-w-[20px]",
  lg: "ui-w-[24px]",
  xl: "ui-w-[48px]",
  "2xl": "ui-w-[72px]",
  "4xl": "ui-w-[96px]",
};

export const icons = {
  Cross: (props: IIconProps) => <CrossIcon {...props} />,
  Hamburger: (props: IIconProps) => <HamburgerIcon {...props} />,
  Youtube: (props: IIconProps) => <YoutubeIcon {...props} />,
  OpenBook: (props: IIconProps) => <OpenBookIcon {...props} />,
  Bible: (props: IIconProps) => <BibleIcon {...props} />,
  Pray: (props: IIconProps) => <PrayIcon {...props} />,
  Bell: (props: IIconProps) => <BellIcon {...props} />,
  HandHeart: (props: IIconProps) => <HandHeartIcon {...props} />,
  CircleHeart: (props: IIconProps) => <CircleHeartIcon {...props} />,
  Clock: (props: IIconProps) => <ClockIcon {...props} />,
  Map: (props: IIconProps) => <MapIcon {...props} />,
  User: (props: IIconProps) => <UserIcon {...props} />,
  LogoBlack: (props: IIconProps) => <LogoBlackIcon {...props} />,
  LogoBlue: (props: IIconProps) => <LogoBlueIcon {...props} />,
};
