import { IMissionNews } from "type";

export interface IGetMissionNewsListResponse {
  missionNewsList: IMissionNews[];
  totalMissionNewsListCount: number;
}

export interface IGetMissionNewsResponse extends IMissionNews {}
