import type { YoutubeType } from "type";

/** 설교·찬양 목록에 사용하는 재생 구분 (메인 인덱스와 동일) */
export const SERMON_LIST_TYPES: YoutubeType[] = [
  "main",
  "afternoon",
  "wednesday",
  "firday",
  "youth",
  "video",
];

export const SERMON_CATEGORY_LABEL: Record<(typeof SERMON_LIST_TYPES)[number], string> = {
  main: "주일 3부예배",
  afternoon: "오후 찬양 예배",
  wednesday: "수요 예배",
  firday: "미스바 금요 기도회",
  youth: "청년 예배",
  video: "WITH EL 찬양",
};
