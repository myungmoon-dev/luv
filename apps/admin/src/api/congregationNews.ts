import {
  GetCongregationNewsListRequest,
  PostCongregationNewsRequest,
  PutCongregationNewsRequest,
} from "@/types/congregationNews/request";
import {
  GetCongregationNewsResponse as GetCongregationNewsResponseType,
  GetCongregationNewsListResponse,
} from "@/types/congregationNews/response";
import { api } from ".";

export const getCongregationNewsList = async (params?: GetCongregationNewsListRequest) => {
  const { data } = await api.get<GetCongregationNewsListResponse>("/congregation-news", { params });

  return data;
};

export const getCongregationNews = async ({ id }: { id: string }) => {
  const { data } = await api.get<GetCongregationNewsResponseType>(`/congregation-news/${id}`);

  return data;
};

export const postCongregationNews = async (request: PostCongregationNewsRequest) => {
  const { data } = await api.post("/congregation-news", request);

  return data;
};

export const putCongregationNews = async ({
  id,
  request,
}: {
  id: string;
  request: PutCongregationNewsRequest;
}) => {
  const { data } = await api.put(`/congregation-news/${id}`, request);

  return data;
};

export const deleteCongregationNews = async ({ id }: { id: string }) => {
  const { data } = await api.delete(`/congregation-news/${id}`);

  return data;
};
