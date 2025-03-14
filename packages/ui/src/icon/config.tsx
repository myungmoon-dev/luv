import { CursorType } from "../types/cursor";
import AboutChurchIcon from "./assets/aboutChurch";
import BellIcon from "./assets/bell";
import BibleIcon from "./assets/bible";
import BulletinIcon from "./assets/bulletin";
import CaretRightIcon from "./assets/caretRight";
import ChevronDoubleLeft from "./assets/chevronDoubleLeft";
import ChevronDoubleRight from "./assets/chevronDoubleRight";
import ChevronLeft from "./assets/chevronLeft";
import ChevronRight from "./assets/chevronRight";
import CircleHeartIcon from "./assets/circleHeart";
import ClockIcon from "./assets/clock";
import { CloseIcon } from "./assets/close";
import CrossIcon from "./assets/cross";
import HamburgerIcon from "./assets/hamburger";
import HandHeartIcon from "./assets/handHeart";
import { ImageUploadIcon } from "./assets/imageUpload";
import InfoIcon from "./assets/Info";
import { InstagramIcon } from "./assets/instagram";
import { LogoBlackIcon } from "./assets/logoBlack";
import { LogoBlueIcon } from "./assets/logoBlue";
import MapIcon from "./assets/map";
import NextGenerationIcon from "./assets/nextGeneration";
import OpenBookIcon from "./assets/openBook";
import PrayIcon from "./assets/pray";
import UserIcon from "./assets/user";
import YoutubeIcon from "./assets/youtube";
import { RealYoutubeIcon } from "./assets/youtube-1";

export type IconCursorType = `ui-cursor-${CursorType}`;

export type IconNameType = keyof typeof icons;

export type IconSizeType = "sm" | "md" | "lg" | "xl" | "2xl" | "4xl";

export interface IIconProps {
  backgroundColor?: string;
  strokeColor?: string;
  sizeNumber?: number;
}

export const widthSize: Record<IconSizeType, `ui-w-[${string}]`> = {
  sm: "ui-w-[16px]",
  md: "ui-w-[20px]",
  lg: "ui-w-[36px]",
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
  RealYoutube: (props: IIconProps) => <RealYoutubeIcon {...props} />,
  Instagram: (props: IIconProps) => <InstagramIcon {...props} />,
  Close: (props: IIconProps) => <CloseIcon {...props} />,
  ImageUpload: (props: IIconProps) => <ImageUploadIcon {...props} />,
  ChevronLeft: (props: IIconProps) => <ChevronLeft {...props} />,
  ChevronDoubleLeft: (props: IIconProps) => <ChevronDoubleLeft {...props} />,
  ChevronRight: (props: IIconProps) => <ChevronRight {...props} />,
  ChevronDoubleRight: (props: IIconProps) => <ChevronDoubleRight {...props} />,
  AboutChurch: (props: IIconProps) => <AboutChurchIcon {...props} />,
  Bulletin: (props: IIconProps) => <BulletinIcon {...props} />,
  Info: (props: IIconProps) => <InfoIcon {...props} />,
  NextGeneration: (props: IIconProps) => <NextGenerationIcon {...props} />,
  CaretRight: (props: IIconProps) => <CaretRightIcon {...props} />,
};
