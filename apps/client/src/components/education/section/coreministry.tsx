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
        <EducationSectionTitle first={`${department} 핵심사역`} className="mb-14 ml-20 w-3/4 text-6xl text-white" />
        <div
          data-aos="fade-up"
          className="ml-20 flex w-3/4 flex-col items-start justify-center gap-4 text-xl text-white"
        >
          {coreministry.map((ministry) => (
            <div className="flex gap-3">
              <p className="font-SCoreDream">{ministry.keyword}</p>
              <p>|</p>
              <p>{ministry.value}</p>
            </div>
          ))}
        </div>
      </div>
    </CustomImage>
  );
};

export default EducationCoreMinistrySection;
