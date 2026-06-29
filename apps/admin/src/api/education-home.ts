import { api } from ".";

export interface IEducationHomeVision {
  lead: string;
  emphasis: string;
  bold: string;
}

export interface IEducationHomeCoreValue {
  n: string;
  title: string;
}

export interface IEducationHome {
  id?: string;
  heroImageUrl?: string;
  heroImgClass?: string;
  heroSubtitle?: string;
  missionLine1?: string;
  missionLine2?: string;
  visions: IEducationHomeVision[];
  coreValues: IEducationHomeCoreValue[];
}

const MULTIPART = { headers: { "Content-Type": "multipart/form-data" } };

export const getEducationHome = async () => {
  const { data } = await api.get<IEducationHome | null>("/education-home");
  return data;
};

export const putEducationHome = async (form: FormData) => {
  const { data } = await api.put<IEducationHome>("/education-home", form, MULTIPART);
  return data;
};
