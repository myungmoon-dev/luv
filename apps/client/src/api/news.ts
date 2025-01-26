import { IGetMissionResponse, IGetMissionsResponse } from "@/types/news/response";
import { api } from ".";

export const getMissions = async () => {
  const { data } = await api.get<IGetMissionsResponse>("/mission-news-list");

  return data;
};

export const getMission = async (missionId: string) => {
  const { data } = await api.get<IGetMissionResponse>(`/mission-news-list/${missionId}`);

  return data;
};
