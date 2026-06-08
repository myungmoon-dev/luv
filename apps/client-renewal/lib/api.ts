import axios from "axios";

import { isApiEnvelope } from "@/lib/api-types";

/** client-renewal 전용(최우선). 루트 monorepo .env 와 충돌 시 이 값으로 맞춤 */
const DEFAULT_API_ORIGIN = process.env.NEXT_PUBLIC_AXIOS_DEFAULT_BASEURL;

const origin =
  process.env.NEXT_PUBLIC_CLIENT_RENEWAL_API_ORIGIN?.replace(/\/$/, "") ||
  process.env.NEXT_PUBLIC_AXIOS_DEFAULT_BASEURL?.replace(/\/$/, "") ||
  DEFAULT_API_ORIGIN;

/** 전체 base(경로 포함)를 직접 쓸 때만 설정. 예: http://host:port/api */
const explicitBase = process.env.NEXT_PUBLIC_CLIENT_RENEWAL_API_BASE?.replace(/\/$/, "");

/** /popups → {origin}/api/popups (레거시 /api/client 가 아님) */
export const api = axios.create({
  baseURL: explicitBase || `${origin}/api`,
});

/** 응답 본문이 { httpCode, data, message } 형태면 axios의 data를 안쪽 payload로 맞춤 */
api.interceptors.response.use((response) => {
  const body = response.data;
  if (isApiEnvelope(body)) {
    response.data = body.data;
  }
  return response;
});
