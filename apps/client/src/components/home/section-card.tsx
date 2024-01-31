import Image from "next/image";

interface ISectionCardProps {
  img: string;
  firstText: string;
  secondText: string;
}

export default function SectionCard({ firstText, secondText, img }: ISectionCardProps) {
  return (
    <div className="flex flex-col justify-center gap-3 xl:gap-7">
      <div className="relative h-[90px] overflow-clip rounded-xl bg-gray-200 p-4 xl:h-[200px]">
        <Image src={`/images/${img}`} layout="fill" objectFit="cover" alt="balance" />
      </div>
      <span className="text-center text-sm text-gray-700 xl:text-lg">
        {firstText} <br />
        {secondText}
      </span>
    </div>
  );
}
