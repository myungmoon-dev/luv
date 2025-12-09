export type CongregationNewsType =
  | "marriage"
  | "birth"
  | "funeral"
  | "opening"
  | "hospitalization"
  | "sundayManna"
  | "iceCream";

export interface PostCongregationNewsRequest {
  type: CongregationNewsType;
  description: string;
}

export interface PutCongregationNewsRequest {
  type: CongregationNewsType;
  description: string;
}

export interface GetCongregationNewsListRequest {
  page?: number;
  size?: number;
  type?: CongregationNewsType;
}

