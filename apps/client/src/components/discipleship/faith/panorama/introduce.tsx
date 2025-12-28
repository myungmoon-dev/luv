const DiscipleshipFaithPanoramaIntroduce = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
      <div className="flex flex-col gap-6 rounded-lg bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-[#001F54] sm:text-3xl">성경파노라마</h2>

        <div className="flex flex-col gap-4 break-keep text-gray-700">
          <div>
            <h3 className="mb-2 font-semibold text-gray-900">교육개요</h3>
            <p className="leading-relaxed">
              구약과 신약의 주요사건을 바탕으로 지리적 배경과 함께 연대순으로 살펴가며 성경을 한눈으로 조망합니다.
            </p>
          </div>
        </div>

        <div className="mt-4 border-t border-gray-200 pt-6">
          <div className="grid gap-3 text-sm sm:text-base">
            <div className="flex flex-col gap-1 sm:flex-row">
              <span className="w-24 font-semibold text-gray-900 sm:w-28">교육대상</span>
              <div className="flex flex-col gap-1 text-gray-700">
                <span>구약의 파노라마: 명문교회 성도</span>
                <span>신약의 파노라마: 구약의 파노라마 수료자</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row">
              <span className="w-24 font-semibold text-gray-900 sm:w-28">교육기간</span>
              <div className="flex flex-col gap-1 text-gray-700">
                <span>4주 과정</span>
                <span className="text-sm text-gray-500">
                  *강의는 상황에 따라 개설되오니 교회소식을 참고해주시길 바랍니다.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row">
              <span className="w-24 font-semibold text-gray-900 sm:w-28">교육시간</span>
              <span className="text-gray-700">평일 오전반, 평일 저녁반</span>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row">
              <span className="w-24 font-semibold text-gray-900 sm:w-28">교육장소</span>
              <span className="text-gray-700">독산동 비전채플</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscipleshipFaithPanoramaIntroduce;
