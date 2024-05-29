import { IGetMissionResponse, IGetMissionsResponse } from "@/types/news/response";
import { api } from ".";

export const getMissions = async () => {
  const { data } = await api.get<IGetMissionsResponse>("/api/mission");

  return data;
};

export const getMission = async (missionId: string) => {
  const { data } = await api.get<IGetMissionResponse>(`/api/mission/${missionId}`);

  return data;
};

export const postMission = async (mission: FormData) => {
  const { data } = await api.post("/api/mission", mission, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const deleteMission = async ({ missionId, userId }: { missionId: string; userId: string }) => {
  const { data } = await api.delete(`/api/mission/${missionId}`, { data: { userId } });

  return data;
};
