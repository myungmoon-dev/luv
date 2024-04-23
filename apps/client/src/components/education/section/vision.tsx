import EducationSectionTitle from "../index/title";
import EducationSectionText from "../index/text";
import CustomImage from "@/components/customImage";

const EducationVisionSection = () => {
  return (
    <div className="flex w-full flex-col gap-10">
      <CustomImage
        className="h-[200px] sm:h-[400px] lg:h-[600px]"
        src="/images/education/vision1.jpg"
        alt="비전 이미지"
        imgClass="brightness-50"
      >
        <EducationSectionTitle
          first="비전"
          second="Vision"
          className="absolute flex h-full w-full items-center justify-center gap-3 text-2xl text-white sm:text-5xl lg:text-8xl"
        />
      </CustomImage>

      <div className="flex w-full flex-col gap-5 self-end sm:w-2/5">
        <CustomImage
          className="h-[400px] lg:h-[700px]"
          src="/images/education/vision2.jpg"
          alt="교육공동체 이미지"
          imgClass="brightness-90"
        />
        <EducationSectionText
          className="flex-col gap-1 text-sm font-semibold text-gray-600 lg:text-xl"
          first="교회와 가정이 합력하여"
          second="분명한 복음과 말씀으로 다음세대를 세우는"
          third="교육 공동체"
        />
      </div>

      <div className="flex w-full flex-col gap-5 sm:-mt-72 sm:w-1/2">
        <CustomImage
          className="h-[400px] lg:h-[700px]"
          src="/images/education/vision3.jpg"
          alt="신앙전수공동체 이미지"
          imgClass="brightness-90"
        />
        <EducationSectionText
          className="flex flex-col gap-1 text-sm font-semibold text-gray-600 lg:text-xl"
          first="교사와 부모가"
          second="다음세대에게 믿음의 선배로서 본을 보이는"
          third="신앙 전수 공동체"
        />
      </div>

      <div className="mb-10 flex w-full flex-col gap-5 self-end sm:w-3/4 lg:w-1/2">
        <CustomImage
          className="h-[400px] lg:h-[500px]"
          src="/images/education/vision4.jpg"
          alt="선교공동체 이미지"
          imgClass="brightness-90"
        />
        <EducationSectionText
          className="flex items-center gap-1 text-sm font-semibold text-gray-600 lg:text-xl"
          first="이웃을 섬기며"
          second="복음을 전하는"
          third="선교 공동체"
        />
      </div>
    </div>
  );
};

export default EducationVisionSection;
