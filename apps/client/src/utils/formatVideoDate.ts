import dayjs from "dayjs";

/** 관리자가 설정한 예배/영상 날짜 (createdAt 아님) */
export function formatVideoDate(date?: string): string {
  const trimmed = date?.trim();
  if (!trimmed) return "—";
  const parsed = dayjs(trimmed);
  return parsed.isValid() ? parsed.format("YYYY.MM.DD") : trimmed;
}
