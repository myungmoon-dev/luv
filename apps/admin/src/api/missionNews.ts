import { IGetMissionNewsListResponse, IGetMissionNewsResponse } from "@/types/missionNews/response";
import { api } from ".";

export const getMissionNewsList = async ({
  page = 0,
  location,
}: { page?: number; location?: string } = {}) => {
  const { data } = await api.get<IGetMissionNewsListResponse>("/mission-news", {
    params: { page, ...(location && { location }) },
  });

  return data;
};

export const postMissionNews = async (missionNews: FormData) => {
  const { data } = await api.post("/mission-news", missionNews, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const getMissionNews = async ({ missionNewsId }: { missionNewsId: string }) => {
  const { data } = await api.get<IGetMissionNewsResponse>(`/mission-news/${missionNewsId}`);

  return data;
};

export const deleteMissionNews = async ({ missionNewsId }: { missionNewsId: string }) => {
  const { data } = await api.delete(`/mission-news/${missionNewsId}`);

  return data;
};

export const deleteMissionNewsList = async (ids: string[]) => {
  const { data } = await api.delete("/mission-news", { data: ids });

  return data;
};

export const putMissionNews = async ({ id, form }: { id: string; form: FormData }) => {
  const { data } = await api.patch(`/mission-news/${id}`, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
