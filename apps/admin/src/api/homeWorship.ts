import { api } from ".";

export const postHomeWorship = async (homeWorship: FormData) => {
  const { data } = await api.post("/api/homeWorship", homeWorship, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
