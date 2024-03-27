import { useQuery } from "@tanstack/react-query";
import { getBlurImage } from "@/api/blurImage";
import { IGetBlurImageProps } from "@/types/blurImage/props";
import blurImageKeys from "./keys";

const useGetBlurImage = ({ img }: IGetBlurImageProps) => {
  return useQuery({
    queryFn: () => getBlurImage({ img }),
    queryKey: blurImageKeys.bulletin(),
  });
};

export { useGetBlurImage };
