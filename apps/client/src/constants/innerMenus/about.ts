import { IInnerMenu, IStaffType } from "./types";

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

export const staffType: IStaffType[] = [
  { label: "retired", type: "원로목사" },
  { label: "senior", type: "담임목사" },
  { label: "associate", type: "목사" },
  { label: "evangelist", type: "전도사" },
  { label: "elder", type: "장로" },
];

export const aboutHistoryMenus: IInnerMenu[] = [
  { label: "1980년대", path: "/about/history/1980s" },
  { label: "1990년대", path: "/about/history/1990s" },
  { label: "2000년대", path: "/about/history/2000s" },
  { label: "2010년대", path: "/about/history/2010s" },
  { label: "2020년대", path: "/about/history" },
];
