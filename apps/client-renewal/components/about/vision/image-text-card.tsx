import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ImageTextCardProps = {
  imageSrc: string;
  imageAlt: string;
  objectPosition?: string;
  reverse?: boolean;
  children: ReactNode;
};

export function ImageTextCard({
  imageSrc,
  imageAlt,
  objectPosition = "object-center",
  reverse = false,
  children,
}: ImageTextCardProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-5 sm:gap-6 md:flex-row md:items-start md:gap-8 lg:gap-10",
        reverse && "md:flex-row-reverse",
      )}
    >
      <div className="relative w-full shrink-0 overflow-hidden border border-[#E6E6E6] md:w-[42%] md:max-w-[380px] lg:max-w-[420px]">
        <div className="relative aspect-[16/10] w-full max-h-[220px] sm:max-h-[240px] md:aspect-[5/3] md:max-h-[260px] lg:max-h-[280px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className={cn("object-cover", objectPosition)}
            sizes="(max-width: 768px) 100vw, 380px"
          />
        </div>
      </div>
      <div className="min-w-0 flex-1 space-y-4 text-[#333] [&_p]:leading-relaxed">{children}</div>
    </div>
  );
}
