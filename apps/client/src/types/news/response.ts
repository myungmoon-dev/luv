import { IMissionNews } from "type";

export interface IGetMissionsResponse {
  missions: IMissionNews[];
  totalMissionsCount: number;
}

export interface IGetMissionResponse {
  mission: IMissionNews;
}
