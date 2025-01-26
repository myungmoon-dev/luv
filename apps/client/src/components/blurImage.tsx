import { useGetBlurImage } from "@/query/blurImage";
import Image from "next/image";

interface IBlurImageProps {
  img: string;
  alt: string;
  fill?: boolean;
}

const BlurImageComponent = ({ img, alt, fill = false }: IBlurImageProps) => {
  // FIXME: useGetBlurImage 수정 해야함
  // const { data } = useGetBlurImage({
  //   img,
  // });

  return <>{<Image src={img} fill={fill} alt={alt} />}</>;
};

export default BlurImageComponent;
