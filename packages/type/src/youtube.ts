export type YoutubeType =
  | "main"
  | "live"
  | "shorts"
  | "youth"
  | "afternoon"
  | "firday"
  | "wednesday";

export interface IYoutube {
  id: string;
  videoId: string;
  date?: string;
  title?: string;
  preacher?: string;
  mainText?: string;
  createdAt: number;
}

export interface IYoutubeForm {
  url: string;
  title?: string;
  preacher?: string;
  mainText?: string;
  date?: string;
  type: YoutubeType;
}

export interface IYoutubeListProps {
  videoType: YoutubeType;
}
