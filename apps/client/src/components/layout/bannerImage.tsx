import Image from "next/image";
import { cn } from "ui";

interface IBannerImageProps {
  image: string;
  imgClass?: string;
  bannerBlurDataURL?: string;
}
export const BannerImageComponent = ({ image, imgClass, bannerBlurDataURL }: IBannerImageProps) => {
  return (
    <div className="relative flex h-full">
      <Image
        src={image}
        alt="배너 이미지"
        className={cn("object-cover", imgClass)}
        fill
        priority
        blurDataURL={bannerBlurDataURL}
        placeholder={bannerBlurDataURL ? "blur" : "empty"}
      />
    </div>
  );
};
