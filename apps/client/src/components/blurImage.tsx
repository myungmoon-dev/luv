import Image from "next/image";

interface IBlurImageProps {
  img: string;
  blur: string;
  alt: string;
  fill?: boolean;
}

const BlurImageComponent = ({ img, alt, blur, fill = false }: IBlurImageProps) => {
  return (
    <>
      <Image src={img} fill={fill} alt={alt} placeholder="blur" blurDataURL={blur} />
    </>
  );
};

export default BlurImageComponent;
