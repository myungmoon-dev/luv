import { CongregationNewsType } from "@/types/congregationNews/request";

export const CONGREGATION_NEWS_TYPE_MAP = {
  marriage: "결혼",
  birth: "출산",
  funeral: "장례",
  opening: "개업",
  hospitalization: "입원",
  sundayManna: "주일 만나",
  iceCream: "아이스크림",
} as const satisfies Record<CongregationNewsType, string>;

export const CONGREGATION_NEWS_TYPE_OPTIONS = Object.entries(CONGREGATION_NEWS_TYPE_MAP).map(([value, label]) => ({
  value: value as CongregationNewsType,
  label,
}));

