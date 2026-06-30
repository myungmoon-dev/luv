import { api } from ".";

export type EducationType = "infants" | "toddlers" | "elementary" | "high" | "youth" | "bridge";

export interface IEducationCoreMinistry {
  titleKr: string;
  titleEn?: string;
  description: string;
  imageUrl?: string;
  imgClass?: string;
}

export interface IEducation {
  id: string;
  type: EducationType;
  slug: string;
  department: string;
  heroImageUrl: string;
  heroImgClass?: string;
  imageUrls: string[];
  introduction: string;
  target: string;
  time: string;
  place: string;
  meetingTime?: string;
  coreMinistries: IEducationCoreMinistry[];
  order?: number;
  createdAt?: number;
}

const MULTIPART = { headers: { "Content-Type": "multipart/form-data" } };

export const getEducations = async () => {
  const { data } = await api.get<IEducation[]>("/education");
  return data;
};

export const getEducationByType = async (type: EducationType) => {
  const { data } = await api.get<IEducation>(`/education/${type}`);
  return data;
};

export const postEducation = async (form: FormData) => {
  const { data } = await api.post<IEducation>("/education", form, MULTIPART);
  return data;
};

export const patchEducation = async ({ id, form }: { id: string; form: FormData }) => {
  const { data } = await api.patch<IEducation>(`/education/${id}`, form, MULTIPART);
  return data;
};

export const deleteEducation = async ({ id }: { id: string }) => {
  const { data } = await api.delete(`/education/${id}`);
  return data;
};
