import { IGetMissionResponse, IGetMissionsResponse } from "@/types/news/response";
import { api } from ".";

export const getMissions = async ({ lastVisibleCreatedAt }: { lastVisibleCreatedAt?: string }) => {
  const { data } = await api.get<IGetMissionsResponse>("/api/mission", {
    params: {
      lastVisibleCreatedAt: JSON.stringify(lastVisibleCreatedAt) || {},
    },
  });

  return data;
};

export const getMission = async (missionId: string) => {
  const { data } = await api.get<IGetMissionResponse>(`/api/mission/${missionId}`);

  return data;
};
