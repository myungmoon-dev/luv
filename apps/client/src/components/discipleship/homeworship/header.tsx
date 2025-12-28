interface IHomeworshipHeaderSectionProps {
  onClick: () => void;
}

const HomeworshipHeaderSection = ({ onClick }: IHomeworshipHeaderSectionProps) => {
  return (
    <div className="flex flex-col gap-6 px-5 sm:px-8 md:px-12 lg:px-16">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#111111] sm:text-3xl md:text-4xl">맛있는 가정예배</h2>
        <button
          onClick={onClick}
          className="rounded-full bg-[#1e3a5f] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2d4a6f] sm:px-8 sm:py-3 sm:text-base"
        >
          예배 인증하기
        </button>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-base font-medium text-gray-700 sm:text-lg">예배의 갈등, 나눔의 기쁨을 함께해 주세요!</p>
        <p className="break-keep text-sm leading-relaxed text-blue-950 sm:text-base">
          가정예배 후, 그 은혜로운 순간을 사진과 함께 나누어 주세요.
          <br />
          맛있는 식탁, 단란한 예배의 모습, 은혜로운 간증 등 자유롭게 올려주시면 다른 성도들에게도 큰 은혜와 도전이
          됩니다.
        </p>
      </div>
    </div>
  );
};

export default HomeworshipHeaderSection;
