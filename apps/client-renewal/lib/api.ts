import axios from "axios";

import { isApiEnvelope } from "@/lib/api-types";

/** Next.js rewrite가 /api/:path* → 백엔드로 프록시 */
export const api = axios.create({
  baseURL: "/api",
});

/** 응답 본문이 { httpCode, data, message } 형태면 axios의 data를 안쪽 payload로 맞춤 */
api.interceptors.response.use((response) => {
  const body = response.data;
  if (isApiEnvelope(body)) {
    response.data = body.data;
  }
  return response;
});
