const DiscipleshipFaithPanoramaIntroduce = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
      <div className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-sm sm:gap-6 sm:p-6 md:p-8">
        <h2 className="break-keep text-xl font-bold text-[#001F54] sm:text-2xl md:text-3xl">
          성경파노라마
        </h2>

        <div className="flex flex-col gap-3 break-keep text-sm text-gray-700 sm:text-base">
          <div>
            <h3 className="mb-1.5 text-sm font-semibold text-gray-900 sm:mb-2 sm:text-base">교육개요</h3>
            <p className="leading-relaxed">
              구약과 신약의 주요사건을 바탕으로 지리적 배경과 함께 연대순으로 살펴가며 성경을 한눈으로
              조망합니다.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-3 sm:pt-4 md:mt-2 md:pt-6">
          <div className="grid gap-2 text-xs sm:gap-3 sm:text-sm md:text-base">
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-gray-900">교육대상</span>
              <div className="flex flex-col gap-0.5 break-keep text-gray-700 sm:gap-1">
                <span>구약의 파노라마: 명문교회 성도</span>
                <span>신약의 파노라마: 구약의 파노라마 수료자</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-gray-900">교육기간</span>
              <div className="flex flex-col gap-0.5 break-keep text-gray-700 sm:gap-1">
                <span>4주 과정</span>
                <span className="text-xs text-gray-500 sm:text-sm">
                  *강의는 상황에 따라 개설되오니 교회소식을 참고해주시길 바랍니다.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-gray-900">교육시간</span>
              <span className="break-keep text-gray-700">평일 오전반, 평일 저녁반</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-gray-900">교육장소</span>
              <span className="break-keep text-gray-700">독산동 비전채플</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscipleshipFaithPanoramaIntroduce;
