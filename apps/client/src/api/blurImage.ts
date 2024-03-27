import { IPostBlurImageResponse } from "@/types/blurImage/response";
import { api } from ".";
import { IGetBlurImageProps } from "@/types/blurImage/props";

export const getBlurImage = async ({ img }: IGetBlurImageProps) => {
  const { data } = await api.post<IPostBlurImageResponse>("/api/blurImage", {
    img,
  });

  return data;
};
