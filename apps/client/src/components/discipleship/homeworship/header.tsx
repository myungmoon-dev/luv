interface IHomeworshipHeaderSectionProps {
  onClick: () => void;
}

const HomeworshipHeaderSection = ({ onClick }: IHomeworshipHeaderSectionProps) => {
  return (
    <div className="flex flex-col gap-4 px-4 sm:gap-6 sm:px-6 md:px-12 lg:px-16">
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        <h2 className="break-keep text-xl font-bold text-[#111111] sm:text-2xl md:text-3xl lg:text-4xl">
          맛있는 가정예배
        </h2>
        <button
          onClick={onClick}
          className="shrink-0 rounded-full bg-[#1e3a5f] px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-[#2d4a6f] sm:px-6 sm:py-2.5 sm:text-sm md:px-8 md:py-3 md:text-base"
        >
          예배 인증하기
        </button>
      </div>

      <div className="flex flex-col gap-2 sm:gap-3">
        <p className="break-keep text-sm font-medium text-gray-700 sm:text-base md:text-lg">
          예배의 갈등, 나눔의 기쁨을 함께해 주세요!
        </p>
        <p className="break-keep text-xs leading-relaxed text-blue-950 sm:text-sm md:text-base">
          가정예배 후, 그 은혜로운 순간을 사진과 함께 나누어 주세요. 맛있는 식탁, 단란한 예배의 모습, 은혜로운
          간증 등 자유롭게 올려주시면 다른 성도들에게도 큰 은혜와 도전이 됩니다.
        </p>
      </div>
    </div>
  );
};

export default HomeworshipHeaderSection;
