import { IMissionNews } from "type";

export interface IGetMissionNewsListResponse {
  missionNewsList: IMissionNews[];
  totalMissionNewsListCount: number;
}

export interface IGetMissionNewsResponse {
  missionNews: IMissionNews;
}
