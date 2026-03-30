export type AboutLeaderMenu = { label: string; path: string };

/** `apps/client`의 `aboutLeaderMenus`와 동일 */
export const aboutLeaderMenus: AboutLeaderMenu[] = [
  { label: "원로목사", path: "/about/leadership/retired" },
  { label: "담임목사", path: "/about/leadership" },
  { label: "교역자", path: "/about/leadership/minister" },
  { label: "선교사", path: "/about/leadership/missionary" },
  { label: "원로장로", path: "/about/leadership/retiredElder" },
  { label: "장로", path: "/about/leadership/elder" },
  { label: "직원", path: "/about/leadership/staff" },
];
