import { IGetMissionNewsListResponse, IGetMissionNewsResponse } from "@/types/missionNews/response";
import { api } from ".";

export const getMissionNewsList = async () => {
  const { data } = await api.get<IGetMissionNewsListResponse>("/mission-news-list");

  return data;
};

export const postMissionNews = async (missionNews: FormData) => {
  const { data } = await api.post("/mission-news-list", missionNews, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const getMissionNews = async ({ missionNewsId }: { missionNewsId: string }) => {
  const { data } = await api.get<IGetMissionNewsResponse>(`/mission-news-list/${missionNewsId}`);

  return data;
};

export const deleteMissionNews = async ({ missionNewsId }: { missionNewsId: string }) => {
  const { data } = await api.delete(`/mission-news-list/${missionNewsId}`);

  return data;
};

export const putMissionNews = async ({ id, form }: { id: string; form: FormData }) => {
  const { data } = await api.put(`/mission-news-list/${id}`, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
