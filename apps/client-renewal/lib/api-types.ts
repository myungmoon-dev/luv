/** 백엔드 공통 응답 래퍼 (대부분의 GET/POST 등에서 동일) */
export type ApiEnvelope<T> = {
  httpCode: number;
  data: T;
  message: string;
};

export function isApiEnvelope(body: unknown): body is ApiEnvelope<unknown> {
  return (
    typeof body === "object" &&
    body !== null &&
    "httpCode" in body &&
    "data" in body &&
    "message" in body
  );
}
