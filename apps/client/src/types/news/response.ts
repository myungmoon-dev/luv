import { IMissionNews } from "type";
import { ICongregationNews } from "./common";

export interface IGetMissionsResponse {
  missionNewsList: IMissionNews[];
  totalMissionNewsCount: number;
}

export interface IGetMissionResponse extends IMissionNews {}

export interface IGetCongregationNewsListResponse {
  congregationNewsList: ICongregationNews[];
  totalCongregationNewsCount: number;
}
