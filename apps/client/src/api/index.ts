import axios from "axios";

const origin = process.env.NEXT_PUBLIC_AXIOS_DEFAULT_BASEURL?.replace(/\/$/, "") ?? "";

export const isClientApiConfigured = () => origin.length > 0;

export const api = axios.create({
  baseURL: "/api",
});

api.interceptors.response.use((response) => {
  const body = response.data;
  if (
    body &&
    typeof body === "object" &&
    "httpCode" in body &&
    "data" in body
  ) {
    response.data = body.data;
  }
  return response;
});
