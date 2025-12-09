export interface IGetMissionsRequest {
  page: number;
  size: number;
  location?: string;
}

export interface IGetCongregationNewsListRequest {
  page: number;
  size: number;
  type?: string;
}
