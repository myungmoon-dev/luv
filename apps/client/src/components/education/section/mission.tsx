import CustomImage from "@/components/customImage";
import EducationSectionTitle from "../index/title";

const EducationMissionSection = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <CustomImage
        className="h-[190px] sm:h-[250px] md:h-[320px] lg:h-[400px]"
        src="/images/education/vision1.jpg"
        alt="사명선언문 이미지"
        imgClass="brightness-50"
      >
        <div className="absolute flex h-full w-full flex-col justify-center gap-1 pl-5 sm:gap-2 sm:pl-8 md:gap-3 md:pl-12 lg:pl-16">
          <p data-aos="fade-up" className="pb-2 text-xl font-bold text-white sm:pb-3 sm:text-2xl md:text-4xl lg:text-5xl">
            사명 선언문
          </p>
          <p data-aos="fade-up" className="text-sm text-white sm:text-base md:text-lg lg:text-xl">
            명문교회 교육부서는
          </p>
          <p data-aos="fade-up" className="text-sm text-white sm:text-base md:text-lg lg:text-xl">
            하나님을 경외하는 다음세대를 세우기 위해 존재한다.
          </p>
        </div>
      </CustomImage>
    </div>
  );
};

export default EducationMissionSection;
