const DiscipleshipNewGuideSection = () => {
  return (
    <div className="flex flex-col gap-4 px-5 sm:gap-6 sm:px-8 md:px-12 lg:px-16">
      <h2 className="border-b-[0.7px] border-gray-400 pb-5 text-xl font-bold text-[#111111] sm:text-2xl md:text-3xl lg:text-4xl">
        새가족을 위한 5단계
      </h2>

      <div className="flex flex-col gap-0">
        {/* 1. 등록 */}
        <div className="grid grid-cols-[100px_1fr] gap-4 bg-gray-100 p-4 sm:grid-cols-[120px_1fr] sm:gap-6 sm:p-5 md:grid-cols-[150px_1fr] md:p-6 lg:p-8">
          <p className="text-sm font-bold text-[#222222] sm:text-base md:text-lg lg:text-xl">1. 등록</p>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-[#222222] sm:text-base md:text-lg">등록하시면 환영인사 후 담임목사님과 면담</p>
            <div className="flex flex-col gap-1 text-xs sm:text-sm md:text-base">
              <p className="font-semibold text-[#001F54]">주일 : 사랑채플 본당 입구</p>
              <p className="font-semibold text-[#001F54]">주중 : 비전채플 4층 새가족담당교역자</p>
            </div>
          </div>
        </div>

        {/* 2. 교육 */}
        <div className="grid grid-cols-[100px_1fr] gap-4 p-4 sm:grid-cols-[120px_1fr] sm:gap-6 sm:p-5 md:grid-cols-[150px_1fr] md:p-6 lg:p-8">
          <p className="text-sm font-bold text-[#222222] sm:text-base md:text-lg lg:text-xl">2. 교육</p>
          <p className="break-keep text-sm text-[#222222] sm:text-base md:text-lg">
            이슬비 편지, 관리문자, 교육 수료 후 구역 연결
          </p>
        </div>

        {/* 3. 등반 */}
        <div className="grid grid-cols-[100px_1fr] gap-4 bg-gray-100 p-4 sm:grid-cols-[120px_1fr] sm:gap-6 sm:p-5 md:grid-cols-[150px_1fr] md:p-6 lg:p-8">
          <p className="text-sm font-bold text-[#222222] sm:text-base md:text-lg lg:text-xl">3. 등반</p>
          <p className="text-sm text-[#222222] sm:text-base md:text-lg">등록 심방, 신앙훈련 과정 참여</p>
        </div>

        {/* 4. 성장교육 */}
        <div className="grid grid-cols-[100px_1fr] gap-4 p-4 sm:grid-cols-[120px_1fr] sm:gap-6 sm:p-5 md:grid-cols-[150px_1fr] md:p-6 lg:p-8">
          <p className="text-sm font-bold text-[#222222] sm:text-base md:text-lg lg:text-xl">4. 성장교육</p>
          <p className="break-keep text-sm text-[#222222] sm:text-base md:text-lg">
            등반 후 교회에서 실제적인 신앙의 도움을 주는 추가 교육
          </p>
        </div>

        {/* 5. 새가족 환영식 */}
        <div className="grid grid-cols-[100px_1fr] gap-4 bg-gray-100 p-4 sm:grid-cols-[120px_1fr] sm:gap-6 sm:p-5 md:grid-cols-[150px_1fr] md:p-6 lg:p-8">
          <p className="text-sm font-bold text-[#222222] sm:text-base md:text-lg lg:text-xl">5. 새가족 환영식</p>
          <p className="text-sm text-[#222222] sm:text-base md:text-lg">연 2회 새가족 환영식</p>
        </div>
      </div>
    </div>
  );
};

export default DiscipleshipNewGuideSection;
