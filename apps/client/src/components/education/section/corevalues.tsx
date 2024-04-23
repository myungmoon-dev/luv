import CustomImage from "@/components/customImage";
import EducationValueCard from "../index/valueCard";
import EducationSectionTitle from "../index/title";

const EducationCoreValuesSection = () => {
  return (
    <div className="flex w-full flex-col">
      <EducationSectionTitle
        className="flex w-full gap-1 p-10 text-5xl text-blue-500"
        first="핵심가치"
        second="Core Values"
      />

      <div className="relative grid w-full grid-cols-2 items-center justify-items-center">
        <CustomImage
          src="/images/education/value1.jpg"
          className="h-[500px] bg-black"
          imgClass="opacity-40"
          alt="핵심가치1"
          loading="lazy"
        >
          <EducationValueCard
            className="absolute"
            index="01"
            textColor="text-white"
            text="영적 변화와 회심이 일어나는 교육"
          />
        </CustomImage>
        <EducationValueCard
          index="02"
          textColor="text-white"
          bgColor="bg-blue-500"
          text="성경의 핵심 진리를 이해하도록 돕는 교육"
        />
        <EducationValueCard
          className="border-2"
          index="03"
          textColor="text-blue-500"
          bgColor="bg-white"
          borderColor="border-blue-500"
          text="그리스도인의 삶으로 나아가는 교육"
        />
        <CustomImage
          src="/images/education/value2.jpg"
          className="h-[500px] bg-black"
          imgClass="opacity-40"
          alt="핵심가치4"
          loading="lazy"
        >
          <EducationValueCard
            className="absolute"
            index="04"
            textColor="text-white"
            text="교회와 가정의 동역으로 이루어지는 교육"
          />
        </CustomImage>
      </div>
    </div>
  );
};

export default EducationCoreValuesSection;
