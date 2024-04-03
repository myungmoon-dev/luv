import { IYoutube } from "type";

export interface IGetYoutubeResponse {
  youtubeLink: string[];
}
export interface IPostYoutubeResponse {
  result: string;
}

export interface IGetYoutubeSermonListResponse {
  sermons: IYoutube[];
}
