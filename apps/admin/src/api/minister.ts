import { api } from ".";
import type { IMinister, StaffTabType } from "type";
import type { PageResponse } from "@/types/common";

export type MinisterForm = {
  name: string;
  position?: string;
  officerType: string;
  tabType: StaffTabType;
  greeting?: string;
  description?: string;
};

const MULTIPART = { headers: { "Content-Type": "multipart/form-data" } };

export const getMinisters = async ({ page = 0, tabType }: { page?: number; tabType?: StaffTabType } = {}) => {
  const { data } = await api.get<PageResponse<IMinister>>("/leadership", {
    params: { page, size: 30, ...(tabType ? { tabType } : {}) },
  });
  return data;
};

export const postMinister = async (form: FormData) => {
  const { data } = await api.post("/leadership", form, MULTIPART);
  return data;
};

export const patchMinister = async ({ id, form }: { id: string; form: FormData }) => {
  const { data } = await api.patch(`/leadership/${id}`, form, MULTIPART);
  return data;
};

export const deleteMinister = async ({ id }: { id: string }) => {
  const { data } = await api.delete(`/leadership/${id}`);
  return data;
};
