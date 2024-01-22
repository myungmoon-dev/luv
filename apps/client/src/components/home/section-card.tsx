import Image from "next/image";

interface ISectionCardProps {
  img: string;
  firstText: string;
  secondText: string;
}

export default function SectionCard({ firstText, secondText, img }: ISectionCardProps) {
  return (
    <div className="flex flex-col justify-center gap-3 xl:gap-7">
      <div className="h-[90px] xl:h-[200px] relative bg-gray-200 p-4 rounded-xl overflow-clip">
        <Image src={`/images/${img}`} layout="fill" objectFit="cover" alt="balance" />
      </div>
      <span className="text-center text-sm xl:text-lg text-gray-700">
        {firstText} <br />
        {secondText}
      </span>
    </div>
  );
}
