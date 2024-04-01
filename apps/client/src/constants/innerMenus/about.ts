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
  { label: "원로목사", path: "/about/leadership/retired" },
  { label: "담임목사", path: "/about/leadership" },
  { label: "교역자", path: "/about/leadership/minister" },
  { label: "장로", path: "/about/leadership/elder" },
  { label: "직원", path: "/about/leadership/staff" },
];

export const pastorTypes: IPastorType[] = [
  { label: "retired", type: "원로목사" },
  { label: "senior", type: "담임목사" },
  { label: "associate", type: "목사" },
  { label: "evangelist", type: "전도사" },
];
