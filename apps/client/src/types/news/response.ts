import { IMissionNews } from "type";

export interface IGetMissionsResponse {
  missionNewsList: IMissionNews[];
  totalMissionNewsCount: number;
}

export interface IGetMissionResponse extends IMissionNews {}
