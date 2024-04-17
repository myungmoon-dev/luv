import Image from "next/image";

interface IEducationIntroductionSectionProps {
  image: string;
  title: string;
  words: string;
  bible: string;
}

const EducationIntroductionSection = ({ image, title, words, bible }: IEducationIntroductionSectionProps) => {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
      <div className="relative h-[200px] w-full shadow-lg sm:h-[230px] lg:h-[300px]">
        <Image src={image} className="rounded-lg object-cover shadow-2xl" alt={title} fill />
      </div>
      <div className="flex flex-col items-center justify-center gap-7 sm:items-stretch">
        <h1 className="border-b-[1px] border-gray-300 pb-4 text-xl font-bold sm:text-2xl">{title}</h1>
        <div className="flex flex-col gap-3">
          <p className="text-sm text-gray-700 sm:text-base">{words}</p>
          <p className="text-sm text-gray-700 sm:text-base">{bible}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationIntroductionSection;
