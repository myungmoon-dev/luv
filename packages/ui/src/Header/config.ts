export interface IDetailMenu {
  label: string;
  path: string;
  key: string;
}

export const menus: IDetailMenu[] = [
  { label: "홈", path: "/", key: "/" },
  { label: "교회안내", path: "/about", key: "/about" },
  { label: "설교•찬양", path: "/sermons/sunday-3", key: "/sermons" },
  { label: "다음세대", path: "/education", key: "/education" },
  { label: "명문소식", path: "/news", key: "/news" },
  {
    label: "교회훈련",
    path: "/discipleship/main/bible",
    key: "/discipleship",
  },
  {
    label: "가정예배",
    path: "/homeworship",
    key: "/homeworship",
  },
];

export const favMenus: IDetailMenu[] = [
  {
    label: "맛있는 가정예배",
    path: "/homeworship",
    key: "/education",
  },
  {
    label: "주보",
    path: "/news",
    key: "/news",
  },
  {
    label: "성경통독",
    path: "/discipleship/main/bible",
    key: "/discipleship",
  },
];
