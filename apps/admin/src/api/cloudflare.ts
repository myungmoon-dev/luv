import { IPostCloudflareResponse } from "@/types/cloudflare/response";
import { api } from ".";
import { ICloudFlareConnectProps } from "@/types/cloudflare/props";

export const postCloudFlareConnect = async ({
  expireDate,
}: ICloudFlareConnectProps) => {
  const { data } = await api.post<IPostCloudflareResponse>("/api/cloudflare", {
    expireDate,
  });

  return data;
};
