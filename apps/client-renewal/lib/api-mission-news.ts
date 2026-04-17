import { api } from "@/lib/api";
import type { IMissionNews, MissionLocation } from "type";

export type GetMissionsParams = {
  page: number;
  size: number;
  location?: MissionLocation;
};

export async function getMissions({ page, size, location }: GetMissionsParams) {
  const { data } = await api.get<{
    missionNewsList: IMissionNews[];
    totalMissionNewsCount: number;
  }>("/mission-news-list", {
    params: { page, size, location },
  });
  return data;
}

export async function getMission(missionId: string) {
  const { data } = await api.get<IMissionNews>(`/mission-news-list/${missionId}`);
  return data;
}
