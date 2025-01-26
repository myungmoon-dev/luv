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
  _id: string;
  url: string;
  title: string;
  date: string;
  mainText: string;
  preacher: string;
  type: YoutubeType;
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
  videos: IYoutube[];
  totalVideos: number;
}

export type LiveType = {
  url: string;
  updatedAt: number;
};

export interface IGetLiveResponse {
  live: LiveType;
}
