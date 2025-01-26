import { IGetHomeWorshipsResponse } from "@/types/homeworship/response";
import { api } from ".";

export const getHomeWorships = async () => {
  const { data } = await api.get<IGetHomeWorshipsResponse>("/homeWorships");

  return data;
};

export const postHomeWorship = async (homeWorship: FormData) => {
  const { data } = await api.post("/homeWorships", homeWorship, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
