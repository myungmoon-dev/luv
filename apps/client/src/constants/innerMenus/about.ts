import { IInnerMenu, IPastorType } from "./types";

export const aboutInnerMenus: IInnerMenu[] = [
  { label: "교회소개", path: "/about" },
  { label: "로고와 비전", path: "/about/vision" },
  { label: "섬기는 분들", path: "/about/leadership" },
  { label: "연혁", path: "/about/history" },
  { label: "예배 안내", path: "/about/services" },
  { label: "오시는 길", path: "/about/directions" },
];

export const aboutLeaderMenus: IInnerMenu[] = [
  { label: "담임목사", path: "/about/leadership" },
  { label: "원로목사", path: "/about/leadership/retired" },
  { label: "부목사", path: "/about/leadership/associate" },
  { label: "전도사", path: "/about/leadership/evangelist" },
];

export const pastorTypes: IPastorType[] = [
  { eng: "senior", kor: "담임목사" },
  { eng: "retired", kor: "원로목사" },
  { eng: "associate", kor: "목사" },
  { eng: "evangelist", kor: "전도사" },
];
