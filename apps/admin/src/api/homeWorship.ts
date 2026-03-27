import { IGetHomeWorshipsResponse } from "@/types/homeworship/response";
import { api } from ".";

export const getHomeWorships = async ({ page = 0 }: { page?: number } = {}) => {
  const { data } = await api.get<IGetHomeWorshipsResponse>("/homeworships", { params: { page } });

  return data;
};

export const postHomeWorship = async (homeWorship: FormData) => {
  const { data } = await api.post("/homeworships", homeWorship, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
