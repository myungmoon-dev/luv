import { useMutation, useQuery } from "@tanstack/react-query";
import cloudflareKeys from "./keys";
import { postCloudFlareConnect, postCloudFlareUpload } from "@/api/cloudflare";

const usePostCloudFlareConnect = () => {
  return useQuery({
    queryKey: cloudflareKeys.connectInfo(),
    queryFn: async () => await postCloudFlareConnect(),
  });
};

const usePostCloudFlareUpload = (images: FormData) => {
  return useQuery({
    queryKey: cloudflareKeys.uploadInfo(),
    queryFn: async () => await postCloudFlareUpload(images),
  });
};

const usePostCloudFlareUpload2 = () =>
  useMutation({ mutationFn: postCloudFlareUpload });

export {
  usePostCloudFlareConnect,
  usePostCloudFlareUpload,
  usePostCloudFlareUpload2,
};
