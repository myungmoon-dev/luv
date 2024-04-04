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

export interface IGetYoutubeResponse {
  youtubeList: IYoutube[];
}
export interface IGetYoutubeListProps {
  videoType: YoutubeType;
  videoCount?: number;
}
