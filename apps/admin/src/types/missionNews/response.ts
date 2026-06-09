import { IMissionNews } from "type";
import { PageResponse } from "../common";

export type IGetMissionNewsListResponse = PageResponse<IMissionNews>;

export interface IGetMissionNewsResponse extends IMissionNews {}
