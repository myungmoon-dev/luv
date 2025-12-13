import EducationSectionTitle from "../index/title";
import EducationSectionText from "../index/text";
import CustomImage from "@/components/customImage";

const EducationOldVisionSection = () => {
  return (
    <div className="flex w-full flex-col gap-10 md:gap-20">
      <CustomImage className="h-[600px]" src="/images/education/vision1.jpg" alt="비전 이미지" imgClass="brightness-50">
        <div className="absolute flex h-full w-full flex-col items-center justify-center gap-10">
          <EducationSectionTitle
            first="비전"
            second="Vision"
            className="flex items-center justify-center gap-3 text-5xl text-white md:text-6xl lg:text-8xl"
          />
          <div
            data-aos="fade-up"
            className="flex flex-col items-center justify-center gap-1 text-xl text-white sm:gap-4 md:text-3xl lg:text-5xl"
          >
            <p>하나님을 영화롭게 하며</p>
            <div className="flex gap-3">
              <p>하나님을 깊이 만나는</p>
              <p className="font-SCoreDream text-white underline">예배 공동체</p>
            </div>
          </div>
        </div>
      </CustomImage>
      <div className="grid grid-cols-4 lg:gap-5" data-aos="fade-right">
        <EducationSectionText
          className="xl:col-span-1 xl:px-12 col-span-2 w-full flex-col items-center justify-center px-5 font-medium sm:gap-2 md:items-start md:px-16"
          text="교회와 가정이 합력하여 분명한 복음과 말씀으로 다음세대를 세우는"
          pointText="교육 공동체"
        />
        <CustomImage
          className="xl:col-span-3 xl:h-[600px] col-span-2 h-[200px] w-full md:h-[300px] lg:h-[400px]"
          src="/images/education/vision2.jpg"
          alt="교육공동체 이미지"
          imgClass="brightness-90 rounded-s-xl xl:rounded-none"
        />
      </div>

      <div className="grid grid-cols-4 lg:gap-5" data-aos="fade-left">
        <CustomImage
          className="xl:col-span-3 xl:h-[600px] col-span-2 h-[200px] w-full md:h-[300px] lg:h-[400px]"
          src="/images/education/vision3.jpg"
          alt="신앙전수공동체 이미지"
          imgClass="brightness-90 rounded-e-xl xl:rounded-none"
        />
        <EducationSectionText
          className="xl:col-span-1 xl:px-12 col-span-2 w-full flex-col items-center justify-center px-5 font-medium sm:gap-2 md:items-start md:px-16"
          text="교사와 부모가 다음세대에게 믿음의 선배로서 본을 보이는"
          pointText="신앙 전수 공동체"
        />
      </div>

      <div className="grid grid-cols-4 lg:gap-5" data-aos="fade-right">
        <EducationSectionText
          className="xl:col-span-1 xl:px-12 col-span-2 w-full flex-col items-center justify-center px-5 font-medium sm:gap-2 md:items-start md:px-16"
          text="이웃을 섬기며 복음을 전하는"
          pointText="선교 공동체"
        />
        <CustomImage
          className="xl:col-span-3 xl:h-[600px] col-span-2 h-[200px] w-full md:h-[300px] lg:h-[400px]"
          src="/images/education/vision4.jpg"
          alt="선교공동체 이미지"
          imgClass="brightness-90 rounded-s-xl xl:rounded-none"
        />
      </div>
    </div>
  );
};

export default EducationOldVisionSection;
