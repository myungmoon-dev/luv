import EducationSectionTitle from "../index/title";
import EducationSectionText from "../index/text";
import CustomImage from "@/components/customImage";

const EducationVisionSection = () => {
  return (
    <div className="flex w-full flex-col gap-32">
      <CustomImage className="h-[800px]" src="/images/education/vision1.jpg" alt="비전 이미지" imgClass="brightness-50">
        <div className="absolute flex h-full w-full flex-col items-center justify-center gap-10">
          <EducationSectionTitle
            first="비전"
            second="Vision"
            className="flex items-center justify-center gap-3 text-9xl text-white"
          />
          <div className="flex flex-col items-center justify-center gap-4 text-5xl text-white">
            <p>하나님을 영화롭게 하며</p>
            <div className="flex gap-3">
              <p>하나님을 깊이 만나는</p>
              <p className="font-SCoreDream font-bold text-white underline">예배 공동체</p>
            </div>
          </div>
        </div>
      </CustomImage>

      <div className="grid grid-cols-3 gap-5">
        <EducationSectionText
          className="w-full flex-col justify-center gap-2 px-20 text-3xl font-medium"
          first="교회와 가정이 합력하여"
          second="분명한 복음과 말씀으로"
          third="다음세대를 세우는"
          pointText="교육 공동체"
        />
        <CustomImage
          className="col-span-2 h-[800px] w-full"
          src="/images/education/vision2.jpg"
          alt="교육공동체 이미지"
          imgClass="brightness-90"
        />
      </div>

      <div className="grid grid-cols-3 gap-5">
        <CustomImage
          className="col-span-2 h-[800px] w-full"
          src="/images/education/vision3.jpg"
          alt="신앙전수공동체 이미지"
          imgClass="brightness-90"
        />
        <EducationSectionText
          className="w-full flex-col justify-center gap-2 px-12 text-3xl font-medium"
          first="교사와 부모가"
          second="다음세대에게 믿음의 선배로서"
          third="본을 보이는"
          pointText="신앙 전수 공동체"
        />
      </div>

      <div className="grid grid-cols-3 gap-5">
        <EducationSectionText
          className="w-full flex-col justify-center gap-2 px-20 text-3xl font-medium"
          first="이웃을 섬기며"
          second="복음을 전하는"
          pointText="선교 공동체"
        />
        <CustomImage
          className="col-span-2 h-[800px] w-full"
          src="/images/education/vision4.jpg"
          alt="선교공동체 이미지"
          imgClass="brightness-90"
        />
      </div>
    </div>
  );
};

export default EducationVisionSection;
