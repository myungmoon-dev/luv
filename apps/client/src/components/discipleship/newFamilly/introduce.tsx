const DiscipleshipNewFamillyIntroduce = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
      <div className="flex flex-col gap-6 rounded-lg bg-white p-4 shadow-sm sm:gap-8 sm:p-6 md:p-8">
        {/* 제목 및 설명 */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <h2 className="break-keep text-xl font-bold text-[#001F54] sm:text-2xl md:text-3xl">
            새가족 등록
          </h2>
          <div className="flex flex-col gap-2 break-keep text-sm sm:gap-3 sm:text-base">
            <p className="leading-relaxed text-gray-700">
              만 40세 이상의 장년 또는 기혼자 세가족은 온라인(실시), 현장(주일/주중) 등록 가능합니다.
            </p>
            <p className="leading-relaxed text-[#001F54]">
              만 40세 미만의 미혼자는 1,2청년부에서 별도의 과정이 진행됩니다.
            </p>
          </div>
        </div>

        {/* 새가족을 위한 5단계 */}
        <div className="flex flex-col gap-3 border-t border-gray-200 pt-4 sm:gap-4 sm:pt-6">
          <h3 className="break-keep text-lg font-bold text-[#001F54] sm:text-xl md:text-2xl">
            새가족을 위한 5단계
          </h3>
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="grid gap-3 rounded-lg bg-gray-50 p-3 sm:gap-4 sm:p-4 md:p-6">
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <span className="text-sm font-semibold text-gray-900 sm:text-base">1. 등록</span>
                <div className="flex flex-col gap-0.5 break-keep text-xs text-gray-700 sm:gap-1 sm:text-sm md:text-base">
                  <p className="leading-relaxed">등록하시면 환영인사 후 담임목사님과 면담</p>
                  <p className="leading-relaxed text-[#001F54]">주일 : 사랑채플 본당 입구</p>
                  <p className="leading-relaxed text-[#001F54]">주중 : 비전채플 4층 세가족담당교역자</p>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 sm:gap-2">
                <span className="text-sm font-semibold text-gray-900 sm:text-base">2. 교육</span>
                <div className="flex flex-col gap-0.5 break-keep text-xs text-gray-700 sm:gap-1 sm:text-sm md:text-base">
                  <p className="leading-relaxed">이슬비 편지, 관리문자, 교육 수료 후 구역 연결</p>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 sm:gap-2">
                <span className="text-sm font-semibold text-gray-900 sm:text-base">3. 등반</span>
                <div className="flex flex-col gap-0.5 break-keep text-xs text-gray-700 sm:gap-1 sm:text-sm md:text-base">
                  <p className="leading-relaxed">등록 실행, 신앙훈련 과정 참여</p>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 sm:gap-2">
                <span className="text-sm font-semibold text-gray-900 sm:text-base">4. 성장교육</span>
                <div className="flex flex-col gap-0.5 break-keep text-xs text-gray-700 sm:gap-1 sm:text-sm md:text-base">
                  <p className="leading-relaxed">등반 후 교회에서 실제적인 신앙의 도움을 주는 추가 교육</p>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 sm:gap-2">
                <span className="text-sm font-semibold text-gray-900 sm:text-base">5. 새가족 환영식</span>
                <div className="flex flex-col gap-0.5 break-keep text-xs text-gray-700 sm:gap-1 sm:text-sm md:text-base">
                  <p className="leading-relaxed">연 2회 새가족 환영식</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5주 새신자 과정 */}
        <div className="flex flex-col gap-3 border-t border-gray-200 pt-4 sm:gap-4 sm:pt-6">
          <h3 className="break-keep text-lg font-bold text-[#001F54] sm:text-xl md:text-2xl">
            5주 새신자 과정
          </h3>

          {/* 모바일: 카드 형식 */}
          <div className="flex flex-col gap-2 sm:hidden">
            <div className="rounded-lg border border-gray-200 bg-white p-3">
              <div className="mb-2 text-sm font-semibold text-gray-900">1주차</div>
              <div className="break-keep text-xs text-gray-700">하나님의 창조와 사람의 죄</div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-3">
              <div className="mb-2 text-sm font-semibold text-gray-900">2주차</div>
              <div className="break-keep text-xs text-gray-700">죄 그리고 구원의 길</div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-3">
              <div className="mb-2 text-sm font-semibold text-gray-900">3주차</div>
              <div className="break-keep text-xs text-gray-700">예수님 안에서의 성장하는 삶</div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-3">
              <div className="mb-2 text-sm font-semibold text-gray-900">4주차</div>
              <div className="break-keep text-xs text-gray-700">신앙의 성장과 말씀(성경)</div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-3">
              <div className="mb-2 text-sm font-semibold text-gray-900">5주차</div>
              <div className="break-keep text-xs text-gray-700">성도에게 교회의 유익과 신앙여정</div>
            </div>
          </div>

          {/* 태블릿 이상: 테이블 형식 */}
          <div className="hidden overflow-hidden rounded-lg border border-gray-200 sm:block">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-3 text-center text-sm font-semibold text-gray-900 md:px-6 md:py-4 md:text-base">
                    1주차
                  </td>
                  <td className="break-keep px-4 py-3 text-sm text-gray-700 md:px-6 md:py-4 md:text-base">
                    하나님의 창조와 사람의 죄
                  </td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-3 text-center text-sm font-semibold text-gray-900 md:px-6 md:py-4 md:text-base">
                    2주차
                  </td>
                  <td className="break-keep px-4 py-3 text-sm text-gray-700 md:px-6 md:py-4 md:text-base">
                    죄 그리고 구원의 길
                  </td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-3 text-center text-sm font-semibold text-gray-900 md:px-6 md:py-4 md:text-base">
                    3주차
                  </td>
                  <td className="break-keep px-4 py-3 text-sm text-gray-700 md:px-6 md:py-4 md:text-base">
                    예수님 안에서의 성장하는 삶
                  </td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-3 text-center text-sm font-semibold text-gray-900 md:px-6 md:py-4 md:text-base">
                    4주차
                  </td>
                  <td className="break-keep px-4 py-3 text-sm text-gray-700 md:px-6 md:py-4 md:text-base">
                    신앙의 성장과 말씀(성경)
                  </td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-3 text-center text-sm font-semibold text-gray-900 md:px-6 md:py-4 md:text-base">
                    5주차
                  </td>
                  <td className="break-keep px-4 py-3 text-sm text-gray-700 md:px-6 md:py-4 md:text-base">
                    성도에게 교회의 유익과 신앙여정
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscipleshipNewFamillyIntroduce;
