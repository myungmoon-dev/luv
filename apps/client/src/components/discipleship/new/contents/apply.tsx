const DiscipleshipNewApplySection = () => {
  return (
    <div className="flex flex-col gap-4 px-5 sm:gap-6 sm:px-8 md:px-12 lg:px-16">
      <h2 className="border-b-[0.7px] border-gray-400 pb-5 text-xl font-bold text-[#111111] sm:text-2xl md:text-3xl lg:text-4xl">
        새가족 등록
      </h2>

      <div className="flex flex-col gap-3 sm:gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm leading-relaxed text-[#222222] sm:text-base md:text-lg">
            만 40세 이상의 장년 또는 기혼자 새가족은 온라인(상시), 현장(주일/주중) 등록 가능합니다.
          </p>
        </div>

        <div className="h-px bg-gray-300"></div>

        <div className="flex flex-col gap-2">
          <p className="text-sm leading-relaxed text-[#222222] sm:text-base md:text-lg">
            만 40세 미만의 미혼자는 1,2청년부에서 별도의 과정이 진행됩니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscipleshipNewApplySection;
