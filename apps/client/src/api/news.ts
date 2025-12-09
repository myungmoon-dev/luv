import { IGetMissionResponse, IGetMissionsResponse, IGetCongregationNewsListResponse } from "@/types/news/response";
import { api } from ".";
import { IGetMissionsRequest, IGetCongregationNewsListRequest } from "@/types/news/request";

export const getMissions = async ({ page, size }: IGetMissionsRequest) => {
  const { data } = await api.get<IGetMissionsResponse>("/mission-news-list", { params: { page, size } });

  return data;
};

export const getMission = async (missionId: string) => {
  const { data } = await api.get<IGetMissionResponse>(`/mission-news-list/${missionId}`);

  return data;
};

export const getCongregationNewsList = async ({ page, size, type }: IGetCongregationNewsListRequest) => {
  const { data } = await api.get<IGetCongregationNewsListResponse>("/congregation-news", {
    params: { page, size, type },
  });

  return data;
};
