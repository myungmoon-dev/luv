import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_AXIOS_DEFAULT_BASEURL}/api/admin`,
});
