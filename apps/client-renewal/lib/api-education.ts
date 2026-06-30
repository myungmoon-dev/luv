import { api } from "@/lib/api";
import {
  departmentParticle,
  type EducationDepartmentData,
  type EducationDeptType,
} from "./data/education-departments";

interface CoreMinistryResponse {
  titleKr: string;
  titleEn?: string;
  description: string;
  imageUrl?: string;
  imgClass?: string;
}

interface EducationResponse {
  id: string;
  type: EducationDeptType;
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
  coreMinistries: CoreMinistryResponse[];
}

function toDepartmentData(res: EducationResponse): EducationDepartmentData {
  return {
    type: res.type,
    slug: res.slug,
    department: res.department,
    heroImage: res.heroImageUrl,
    heroImgClass: res.heroImgClass,
    imgs: res.imageUrls ?? [],
    introduction: res.introduction,
    target: res.target,
    time: res.time,
    place: res.place,
    meetingTime: res.meetingTime,
    coreministry: (res.coreMinistries ?? []).map((c, i) => ({
      id: i + 1,
      titleKr: c.titleKr,
      titleEn: c.titleEn,
      description: c.description,
      img: c.imageUrl ?? "",
      imgClass: c.imgClass ?? "",
    })),
  };
}

export async function getEducationDepartmentByType(
  type: EducationDeptType,
): Promise<EducationDepartmentData | null> {
  try {
    const { data } = await api.get<EducationResponse>(`/education/${type}`);
    return toDepartmentData(data);
  } catch {
    return null;
  }
}

export async function getAllEducationDepartments(): Promise<EducationDepartmentData[]> {
  try {
    const { data } = await api.get<EducationResponse[]>("/education");
    return (data ?? []).map(toDepartmentData);
  } catch {
    return [];
  }
}

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
  heroImageUrl?: string;
  heroImgClass?: string;
  heroSubtitle?: string;
  missionLine1?: string;
  missionLine2?: string;
  visions: IEducationHomeVision[];
  coreValues: IEducationHomeCoreValue[];
}

export async function getEducationHome(): Promise<IEducationHome | null> {
  try {
    const { data } = await api.get<IEducationHome | null>("/education-home");
    return data;
  } catch {
    return null;
  }
}

export { departmentParticle };
