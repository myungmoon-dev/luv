import axios from "axios";

export const api = axios.create({
  baseURL: "/api",
});

/**
 * 응답 데이터 언래핑 인터셉터
 *
 * 서버가 { data: T } 형태로 감싸서 응답할 경우,
 * response.data를 내부 data 값으로 교체해 호출부에서
 * res.data.data 대신 res.data로 바로 접근할 수 있게 한다.
 *
 * Before: response.data = { data: { id: 1, name: "foo" } }
 * After:  response.data = { id: 1, name: "foo" }
 */
api.interceptors.response.use((response) => {
  if (response.data && "data" in response.data) {
    response.data = response.data.data;
  }
  return response;
});
