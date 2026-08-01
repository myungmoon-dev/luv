import type { BoardType } from "type";

export const BOARD_TYPE_MAP: Record<BoardType | "all", string> = {
  all: "전체",
  notice: "공지사항",
  news: "교회소식",
  free: "자유게시판",
  invitation: "청빙게시판",
};

export const BOARD_TYPE_FILTERS: { value: BoardType | "all"; label: string }[] = [
  { value: "all", label: BOARD_TYPE_MAP.all },
  // { value: "notice", label: BOARD_TYPE_MAP.notice },
  // { value: "news", label: BOARD_TYPE_MAP.news },
  // { value: "free", label: BOARD_TYPE_MAP.free },
  { value: "invitation", label: BOARD_TYPE_MAP.invitation },
];
