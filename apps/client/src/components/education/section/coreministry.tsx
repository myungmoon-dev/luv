import CustomImage from "@/components/customImage";
import EducationSectionTitle from "../index/title";

interface IEducationCoreMinistrySectionProps {
  img: string;
  department: string;
  coreministry: { keyword: string; value: string }[];
}

const EducationCoreMinistrySection = ({ img, department, coreministry }: IEducationCoreMinistrySectionProps) => {
  return (
    <CustomImage src={img} alt={`${department} 핵심사역 이미지`} className="h-[600px]" imgClass="brightness-50">
      <div className="absolute flex h-full w-full flex-col items-center justify-center gap-7">
        <EducationSectionTitle
          first={`${department} 핵심사역`}
          className="mb-5 border-b-2 border-white pb-2 text-4xl text-white md:text-5xl lg:text-7xl"
        />
        <div data-aos="fade-up" className="flex flex-col justify-center gap-8 px-5 text-xl text-white">
          {coreministry.map((ministry) => (
            <div className="flex w-full flex-col items-center gap-1 lg:flex-row lg:gap-3">
              <p className="font-SCoreDream lg:text-3xl">{ministry.keyword}</p>
              <p className="hidden lg:block">|</p>
              <p className="whitespace-pre-wrap break-keep text-center text-sm md:text-lg lg:text-start lg:text-xl">
                {ministry.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </CustomImage>
  );
};

export default EducationCoreMinistrySection;
