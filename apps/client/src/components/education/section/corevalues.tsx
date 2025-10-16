const EducationCoreValuesSection = () => {
  return (
    <div data-aos="fade-up" className="mt-8 flex flex-col gap-3 pt-10">
      <h2 className="text-[24px] font-bold text-[#001F54] sm:text-[28px] lg:text-[32px]">명문교회 다음세대 핵심가치</h2>

      <div className="flex flex-col gap-4">
        {/* value 1 */}
        <div className="flex flex-col border-t border-gray-400 pt-4">
          <p className="font-semibold leading-relaxed text-[#222222]">VALUE 01</p>
          <p className="leading-relaxed text-[#001F54]">영적 변화와 회심이 일어나는 교육</p>
        </div>

        {/* value 2 */}
        <div className="flex flex-col border-t border-[#E6E6E6] pt-4">
          <p className="font-semibold leading-relaxed text-[#222222]">VALUE 02</p>
          <p className="leading-relaxed text-[#001F54]">성경의 핵심 진리를 이해하도록 돕는 교육</p>
        </div>

        {/* value 3 */}
        <div className="flex flex-col border-t border-[#E6E6E6] pt-4">
          <p className="font-semibold leading-relaxed text-[#222222]">VALUE 03</p>
          <p className="leading-relaxed text-[#001F54]">그리스도인의 삶으로 나아가는 교육</p>
        </div>

        {/* value 4 */}
        <div className="flex flex-col border-t border-[#E6E6E6] pt-4">
          <p className="font-semibold leading-relaxed text-[#222222]">VALUE 04</p>
          <p className="leading-relaxed text-[#001F54]">교회와 가정의 동역으로 이루어지는 교육</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCoreValuesSection;
