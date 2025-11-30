import { CongregationNewsType } from "@/types/news/common";

export const CONGREGATION_NEWS_TYPE_MAP = {
  all: "전체",
  marriage: "결혼",
  birth: "출산",
  funeral: "장례",
  opening: "개업",
  hospitalization: "입원",
  sundayManna: "주일 만나",
  iceCream: "아이스크림",
} as const satisfies Record<CongregationNewsType | "all", string>;
