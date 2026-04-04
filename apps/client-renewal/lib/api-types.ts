/** 백엔드 공통 응답 래퍼 (message 는 생략되는 경우 있음) */
export type ApiEnvelope<T> = {
  httpCode: number;
  data: T;
  message?: string;
};

export function isApiEnvelope(body: unknown): body is ApiEnvelope<unknown> {
  return typeof body === "object" && body !== null && "httpCode" in body && "data" in body;
}
