/** 서버가 초 단위 epoch를 숫자로 줄 때 dayjs 등에서 보정 */
export function toEpochMilliseconds(epochValue: number): number {
  if (!Number.isFinite(epochValue) || epochValue <= 0) return epochValue;
  if (epochValue < 1) return epochValue;
  const digitCount = Math.floor(Math.log10(epochValue)) + 1;
  return digitCount <= 10 ? Math.round(epochValue * 1000) : epochValue;
}

export function coerceEpochMs(raw: unknown): number {
  if (typeof raw === "bigint") return toEpochMilliseconds(Number(raw));
  if (typeof raw === "number" && Number.isFinite(raw)) return toEpochMilliseconds(raw);
  if (typeof raw === "string" && raw.trim()) {
    const n = Number(raw);
    if (Number.isFinite(n)) return toEpochMilliseconds(n);
  }
  return 0;
}
