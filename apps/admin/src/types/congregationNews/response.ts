import { CongregationNewsType } from "./request";

export interface CongregationNews {
  id: string;
  type: CongregationNewsType;
  description: string;
  createdAt: number;
  updatedAt: number;
}

export type GetCongregationNewsListResponse = CongregationNews[];

export interface GetCongregationNewsResponse extends CongregationNews {}
