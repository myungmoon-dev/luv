import { useQuery } from "@tanstack/react-query";
import cloudflareKeys from "./keys";
import { postCloudFlareConnect } from "@/api/cloudflare";
import { ICloudFlareConnectProps } from "@/types/cloudflare/props";

const usePostCloudFlareConnect = ({ expireDate }: ICloudFlareConnectProps) => {
  return useQuery({
    queryKey: cloudflareKeys.connectInfo(),
    queryFn: async () => await postCloudFlareConnect({ expireDate }),
  });
};

export { usePostCloudFlareConnect };
