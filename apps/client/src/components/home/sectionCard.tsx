import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { Card, cn } from "ui";

interface ISectionCardProps {
  image?: string;
  icon?: ReactNode;
  className?: string;
  text: string;
  url: string;
}

const SectionCard = ({ image, icon, className, text, url }: ISectionCardProps) => {
  return (
    <Link href={url}>
      <div className="flex cursor-pointer flex-col items-center justify-center gap-4">
        <Card className={cn("relative flex w-full flex-col items-center justify-center", className)}>
          {image && (
            <>
              <Image
                src={`/images/${image}`}
                alt={text}
                fill
                className="rounded-2xl object-cover brightness-75 duration-500 hover:brightness-100"
                loading="lazy"
              />
              <p className="absolute bottom-5 border-b-[1px] text-lg font-semibold text-gray-100 md:font-bold lg:text-2xl">
                {text}
              </p>
            </>
          )}
          {icon}
        </Card>
        {icon && <p className="font-semibold text-gray-700">{text}</p>}
      </div>
    </Link>
  );
};

export default SectionCard;
