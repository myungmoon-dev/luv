import axios from "axios";

const origin = process.env.NEXT_PUBLIC_AXIOS_DEFAULT_BASEURL?.replace(/\/$/, "") ?? "";

export const isClientApiConfigured = () => origin.length > 0;

export const api = axios.create({
  baseURL: origin ? `${origin}/api/client` : "",
});
