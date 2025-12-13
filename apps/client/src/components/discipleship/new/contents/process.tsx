const DiscipleshipNewProcessSection = () => {
  return (
    <div className="flex flex-col gap-4 px-5 sm:gap-6 sm:px-8 md:px-12 lg:px-16">
      <h2 className="border-b-[0.7px] border-gray-400 pb-5 text-xl font-bold text-[#111111] sm:text-2xl md:text-3xl lg:text-4xl">
        5주 새신자 과정
      </h2>

      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
        {/* 1주차 */}
        <div className="flex items-center gap-10 border-b border-[#E6E6E6] px-10 pb-3 sm:pb-4 md:pb-5">
          <p className="text-sm font-semibold leading-relaxed text-[#001F54] sm:text-base md:text-lg">1주차</p>
          <p className="text-sm leading-relaxed text-[#222222] sm:text-base md:text-lg">하나님의 창조와 사람의 죄</p>
        </div>

        {/* 2주차 */}
        <div className="flex items-center gap-10 border-b border-[#E6E6E6] px-10 pb-3 sm:pb-4 md:pb-5">
          <p className="text-sm font-semibold leading-relaxed text-[#001F54] sm:text-base md:text-lg">2주차</p>
          <p className="text-sm leading-relaxed text-[#222222] sm:text-base md:text-lg">죄 그리고 구원의 길</p>
        </div>

        {/* 3주차 */}
        <div className="flex items-center gap-10 border-b border-[#E6E6E6] px-10 pb-3 sm:pb-4 md:pb-5">
          <p className="text-sm font-semibold leading-relaxed text-[#001F54] sm:text-base md:text-lg">3주차</p>
          <p className="text-sm leading-relaxed text-[#222222] sm:text-base md:text-lg">예수님 안에서의 성장하는 삶</p>
        </div>

        {/* 4주차 */}
        <div className="flex items-center gap-10 border-b border-[#E6E6E6] px-10 pb-3 sm:pb-4 md:pb-5">
          <p className="text-sm font-semibold leading-relaxed text-[#001F54] sm:text-base md:text-lg">4주차</p>
          <p className="text-sm leading-relaxed text-[#222222] sm:text-base md:text-lg">신앙의 성장과 말씀(성경)</p>
        </div>

        {/* 5주차 */}
        <div className="flex items-center gap-10 border-b border-[#E6E6E6] px-10 pb-3 sm:pb-4 md:pb-5">
          <p className="text-sm font-semibold leading-relaxed text-[#001F54] sm:text-base md:text-lg">5주차</p>
          <p className="text-sm leading-relaxed text-[#222222] sm:text-base md:text-lg">
            성도에게 교회의 유익과 신앙여정
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscipleshipNewProcessSection;
