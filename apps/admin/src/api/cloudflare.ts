import { IPostCloudflareResponse } from "@/types/cloudflare/response";
import { api } from ".";

export const postCloudFlareConnect = async () => {
  const { data } = await api.post<IPostCloudflareResponse>(
    "/api/cloudflare",
    null,
    {
      params: { type: "connect" },
    }
  );

  return data;
};

export const postCloudFlareUpload = async (images: FormData) => {
  const { data } = await api.post("/api/cloudflare/upload", images, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};
