import { IMissionNews } from "type";
import { ICongregationNews } from "./common";

export interface IGetMissionsResponse {
  content: IMissionNews[];
  totalElements: number;
}

export interface IGetMissionResponse extends IMissionNews {}

export interface IGetCongregationNewsListResponse {
  content: ICongregationNews[];
  totalElements: number;
}