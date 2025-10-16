const EducationVisionSection = () => {
  return (
    <div data-aos="fade" className="mt-8 flex flex-col gap-3">
      <h2 className="text-[24px] font-bold text-[#001F54] sm:text-[28px] lg:text-[32px]">명문교회 다음세대 비전</h2>

      <div className="flex flex-col gap-4">
        {/* 비전 1 */}
        <div className="flex flex-col gap-1 border-t border-gray-400 pt-4">
          <p className="text-sm leading-relaxed text-[#222222]">하나님을 영화롭게 하며</p>
          <p className="text-sm leading-relaxed text-[#222222]">
            하나님을 깊이 만나는 <span className="font-semibold text-[#001F54]">예배 공동체</span>
          </p>
        </div>

        {/* 비전 2 */}
        <div className="flex flex-col gap-1 border-t border-[#E6E6E6] pt-4">
          <p className="text-sm leading-relaxed text-[#222222]">교회와 가정이 함력하여 분명한 복음과 말씀으로</p>
          <p className="text-sm leading-relaxed text-[#222222]">
            다음세대를 세우는 <span className="font-semibold text-[#001F54]">교육공동체</span>
          </p>
        </div>

        {/* 비전 3 */}
        <div className="flex flex-col gap-1 border-t border-[#E6E6E6] pt-4">
          <p className="text-sm leading-relaxed text-[#222222]">교사와 부모가 다음세대에게 믿음의 선배로서</p>
          <p className="text-sm leading-relaxed text-[#222222]">
            본을 보이는 <span className="font-semibold text-[#001F54]">신앙 전수 공동체</span>
          </p>
        </div>

        {/* 비전 4 */}
        <div className="flex flex-col gap-1 border-t border-[#E6E6E6] pt-4">
          <p className="text-sm leading-relaxed text-[#222222]">이웃을 섬기며 복음을 전하는</p>
          <p className="text-sm leading-relaxed text-[#222222]">
            <span className="font-semibold text-[#001F54]">선교 공동체</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationVisionSection;
