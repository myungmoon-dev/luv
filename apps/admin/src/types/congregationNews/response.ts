import { CongregationNewsType } from "./request";

export interface CongregationNews {
  _id: string;
  type: CongregationNewsType;
  description: string;
  createdAt: number;
  updatedAt: number;
}

export interface GetCongregationNewsListResponse {
  congregationNewsList: CongregationNews[];
  totalCongregationNewsCount: number;
}

export interface GetCongregationNewsResponse extends CongregationNews {}
