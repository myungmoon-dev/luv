import Image from "next/image";

interface IBannerImageProps {
  image: string;
}
export const BannerImageComponent = ({ image }: IBannerImageProps) => {
  return (
    <div className="relative h-[550px] sm:h-[400px]">
      <Image src={image} alt="배너 이미지" className="object-cover" fill priority />
    </div>
  );
};
