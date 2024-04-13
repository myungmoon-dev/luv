export type YoutubeType =
  | "main"
  | "live"
  | "shorts"
  | "youth"
  | "afternoon"
  | "firday"
  | "wednesday"
  | "video";

export interface IYoutube {
  id: string;
  videoId: string;
  title?: string;
  preacher?: string;
  mainText?: string;
  date?: string;
  videoType: YoutubeType;
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
