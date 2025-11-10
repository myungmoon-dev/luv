import Image from "next/image";
import { PropsWithChildren } from "react";

interface ImageTextCardProps extends PropsWithChildren {
  imageSrc: string;
  imageAlt: string;
}

const ImageTextCard = ({ imageSrc, imageAlt, children }: ImageTextCardProps) => {
  return (
    <div className="flex flex-col gap-4 md:gap-12">
      <div className="relative h-[362px] w-[323px] sm:h-[440px] sm:w-[455px] md:h-[553px] md:w-[586px]">
        <Image src={imageSrc} fill={true} alt={imageAlt} className="rounded-xl object-cover sm:rounded-2xl md:rounded-3xl" />
      </div>
      <p className="text-[#222222] sm:text-xl md:text-2xl">{children}</p>
    </div>
  );
};

export default ImageTextCard;
