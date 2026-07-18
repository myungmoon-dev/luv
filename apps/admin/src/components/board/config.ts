import { BoardType } from "type";

/** 게시글 타입 라벨 매핑 — 필요에 맞게 수정하세요 */
export const BOARD_TYPE_MAP = {
  notice: "공지사항",
  news: "교회소식",
  free: "자유게시판",
  invitation: "청빙게시판",
} as const satisfies Record<BoardType, string>;

export const BOARD_TYPE_OPTIONS = Object.entries(BOARD_TYPE_MAP).map(([value, label]) => ({
  value: value as BoardType,
  label,
}));
