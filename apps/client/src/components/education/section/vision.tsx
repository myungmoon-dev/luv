import EducationSectionTitle from "../index/title";
import EducationSectionText from "../index/text";
import CustomImage from "@/components/customImage";

const EducationVisionSection = () => {
  return (
    <div className="flex w-full flex-col gap-10">
      <CustomImage
        className="h-[200px] sm:h-[400px] lg:h-[600px]"
        src="https://imagedelivery.net/XBJ9Uf9wqjQ5z1gg-GjLDw/c0aefec6-229b-4fe7-89da-51b7adb96400/bgHorizontal"
        blurImage="https://imagedelivery.net/XBJ9Uf9wqjQ5z1gg-GjLDw/c0aefec6-229b-4fe7-89da-51b7adb96400/blur"
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
          src="https://imagedelivery.net/XBJ9Uf9wqjQ5z1gg-GjLDw/a9a1ebdf-56ef-4f02-5c78-467cc4a88f00/bgVertical"
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
          src="https://imagedelivery.net/XBJ9Uf9wqjQ5z1gg-GjLDw/0dae9603-7576-445a-ee74-6fd2afbc6000/bgVertical"
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
          src="https://imagedelivery.net/XBJ9Uf9wqjQ5z1gg-GjLDw/6fd76f3f-1c69-4a7d-34aa-02360d3ad600/bgHorizontal"
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
