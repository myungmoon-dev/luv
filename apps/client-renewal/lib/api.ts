import axios from "axios";

import { getBackendApiBase } from "@/lib/api-config";
import { isApiEnvelope } from "@/lib/api-types";

/** 브라우저: 같은 origin /api (HTTP·HTTPS 자동 일치). SSR: 빌드 시 백엔드 절대 URL */
const baseURL = typeof window === "undefined" ? getBackendApiBase() : "/api";

export const api = axios.create({ baseURL });

/** 응답 본문이 { httpCode, data, message } 형태면 axios의 data를 안쪽 payload로 맞춤 */
api.interceptors.response.use((response) => {
  const body = response.data;
  if (isApiEnvelope(body)) {
    response.data = body.data;
  }
  return response;
});
