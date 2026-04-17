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

import { PageResponse } from "./common";
export type IGetYoutubeResponse = PageResponse<IYoutube>;
export type { PageResponse };

export type LiveType = {
  url: string;
  updatedAt: number;
};

export type IGetLiveResponse = LiveType;
