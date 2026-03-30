import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CustomImageProps = {
  src: string;
  className?: string;
  alt: string;
  imgClass?: string;
  loading?: "lazy" | "eager";
  quality?: number;
  children?: ReactNode;
  sizes?: string;
};

export function CustomImage({
  alt,
  src,
  className,
  imgClass,
  loading,
  children,
  quality,
  sizes = "100vw",
}: CustomImageProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <Image
        src={src}
        className={cn("object-cover", imgClass)}
        alt={alt}
        fill
        loading={loading}
        quality={quality}
        sizes={sizes}
      />
      {children}
    </div>
  );
}
