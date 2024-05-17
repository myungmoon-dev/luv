import { IInnerMenu } from "./types";

export const educationInnerMenus: IInnerMenu[] = [
  { label: "다음세대 사역안내", path: "/education" },
  { label: "가정예배 인증", path: "/education/home-worship" },
  { label: "영아부", path: "/education/infants" },
  { label: "유치부", path: "/education/toddlers" },
  { label: "예빛", path: "/education/elementary" },
  { label: "중등부", path: "/education/middle" },
  { label: "고등부", path: "/education/high" },
  { label: "M'embers", path: "/education/youth-adults2" },
  { label: "1청년부", path: "/education/youth-adults1" },
];

const commonEducationDetailMenus = (basePath: string): IInnerMenu[] => [
  { label: "부서소개", path: `${basePath}` },
  { label: "앨범", path: `${basePath}/photos` },
];

export const educationInfantsMenus: IInnerMenu[] = commonEducationDetailMenus("/education/infants");
export const educationToddlersMenus: IInnerMenu[] = commonEducationDetailMenus("/education/toddlers");
export const educationElementaryMenus: IInnerMenu[] = commonEducationDetailMenus("/education/elementary");
export const educationMiddleMenus: IInnerMenu[] = commonEducationDetailMenus("/education/middle");
export const educationHighMenus: IInnerMenu[] = commonEducationDetailMenus("/education/high");
export const educationYouthAdults2Menus: IInnerMenu[] = commonEducationDetailMenus("/education/youth-adults2");
export const educationYouthAdults1Menus: IInnerMenu[] = commonEducationDetailMenus("/education/youth-adults1");
