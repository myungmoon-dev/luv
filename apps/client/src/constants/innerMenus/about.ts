import { IInnerMenu, IOfficerType, OfficerLabel } from "./types";

export const aboutInnerMenus: IInnerMenu[] = [
  { label: "교회소개", path: "/about" },
  { label: "목회비전", path: "/about/vision" },
  { label: "섬기는 분들", path: "/about/leadership" },
  { label: "예배 안내", path: "/about/services" },
  { label: "오시는 길", path: "/about/directions" },
];

export const aboutLeaderMenus: IInnerMenu[] = [
  { label: "원로목사", path: "/about/leadership/retired" },
  { label: "담임목사", path: "/about/leadership" },
  { label: "교역자", path: "/about/leadership/minister" },
  { label: "선교사", path: "/about/leadership/missionary" },
  { label: "원로장로", path: "/about/leadership/retiredElder" },
  { label: "장로", path: "/about/leadership/elder" },
  { label: "직원", path: "/about/leadership/staff" },
];

export const officerType: IOfficerType[] = [
  { label: "retired", type: "원로목사" },
  { label: "senior", type: "담임목사" },
  { label: "associate", type: "목사" },
  { label: "evangelist", type: "전도사" },
  { label: "missionary", type: "선교사" },
  { label: "elder", type: "장로" },
  { label: "retiredElder", type: "원로장로" },
  { label: "otherElder", type: "협동장로" },
  { label: "deacon", type: "집사" },
  { label: "staff", type: "간사" },
];

export const officerTypeMap: Record<OfficerLabel, string> = {
  retired: "원로목사",
  senior: "담임목사",
  associate: "목사",
  evangelist: "전도사",
  missionary: "선교사",
  elder: "장로",
  retiredElder: "원로장로",
  otherElder: "협동장로",
  deacon: "집사",
  staff: "간사",
  manager: "관리장",
};

export const aboutHistoryMenus: IInnerMenu[] = [
  { label: "1980년대", path: "/about/history/1980s" },
  { label: "1990년대", path: "/about/history/1990s" },
  { label: "2000년대", path: "/about/history/2000s" },
  { label: "2010년대", path: "/about/history/2010s" },
  { label: "2020년대", path: "/about/history" },
];
