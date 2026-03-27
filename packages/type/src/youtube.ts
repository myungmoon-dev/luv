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

export type IGetYoutubeResponse = IYoutube[];

export type LiveType = {
  url: string;
  updatedAt: number;
};

export type IGetLiveResponse = LiveType;
