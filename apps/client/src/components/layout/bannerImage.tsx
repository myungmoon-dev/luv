import Image from "next/image";
import { cn } from "ui";

interface IBannerImageProps {
  image: string;
  imgClass?: string;
}
export const BannerImageComponent = ({ image, imgClass }: IBannerImageProps) => {
  return (
    <div className="relative flex h-[inherit]">
      <Image src={image} alt="배너 이미지" className={cn("object-cover", imgClass)} fill priority />
    </div>
  );
};
