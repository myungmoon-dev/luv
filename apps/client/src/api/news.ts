import { IGetMissionResponse, IGetMissionsResponse } from "@/types/news/response";
import { api } from ".";
import { IGetMissionsRequest } from "@/types/news/request";

export const getMissions = async ({ page, size }: IGetMissionsRequest) => {
  const { data } = await api.get<IGetMissionsResponse>("/mission-news-list", { params: { page, size } });

  return data;
};

export const getMission = async (missionId: string) => {
  const { data } = await api.get<IGetMissionResponse>(`/mission-news-list/${missionId}`);

  return data;
};
