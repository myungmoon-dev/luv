import { useGetBlurImage } from "@/query/blurImage";
import Image from "next/image";

interface IBlurImageProps {
  img: string;
  alt: string;
  fill?: boolean;
}

const BlurImageComponent = ({ img, alt, fill = false }: IBlurImageProps) => {
  const { data } = useGetBlurImage({
    img,
  });

  return <>{data && <Image src={img} fill={fill} alt={alt} placeholder="blur" blurDataURL={data.base64} />}</>;
};

export default BlurImageComponent;
