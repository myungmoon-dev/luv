import { IGetMissionNewsListResponse, IGetMissionNewsResponse } from "@/types/missionNews/response";
import { api } from ".";

export const getMissionNewsList = async ({
  lastVisibleCreatedAt,
}: {
  lastVisibleCreatedAt?: string;
}) => {
  const { data } = await api.get<IGetMissionNewsListResponse>("/api/mission-news", {
    params: {
      lastVisibleCreatedAt: JSON.stringify(lastVisibleCreatedAt) || {},
    },
  });

  return data;
};

export const postMissionNews = async (missionNews: FormData) => {
  const { data } = await api.post("/api/mission-news", missionNews, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const getMissionNews = async ({ missionNewsId }: { missionNewsId: string }) => {
  const { data } = await api.get<IGetMissionNewsResponse>(`/api/mission-news/${missionNewsId}`);

  return data;
};

export const deleteMissionNews = async ({ missionNewsId }: { missionNewsId: string }) => {
  const { data } = await api.delete(`/api/mission-news/${missionNewsId}`);

  return data;
};

export const putMissionNews = async ({ id, form }: { id: string; form: FormData }) => {
  const { data } = await api.put(`/api/mission-news/${id}`, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
