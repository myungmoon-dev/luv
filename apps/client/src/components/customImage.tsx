import Image from "next/image";
import { ReactNode } from "react";
import { cn } from "ui";

interface ICustomImageProps {
  src: string;
  className?: string;
  alt: string;
  imgClass?: string;
  blurImage?: string;
  loading?: "lazy" | "eager" | undefined;
  children?: ReactNode;
}

const CustomImage = ({ alt, src, className, imgClass, loading, children, blurImage }: ICustomImageProps) => {
  return (
    <div className={cn("relative w-full", className)}>
      <Image
        src={src}
        className={cn("object-cover", imgClass)}
        alt={alt}
        fill={true}
        blurDataURL={blurImage}
        loading={loading}
      />
      {children}
    </div>
  );
};

export default CustomImage;
