import EducationSectionTitle from "../index/title";

const EducationMissionSection = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-1 sm:h-[300px] sm:gap-3">
      <EducationSectionTitle
        first="사명 선언문"
        second="Mission Statement"
        className="mb-5 flex items-end gap-1 text-lg text-blue-500 md:text-3xl"
      />
      <p data-aos="fade-up" className="text-lg font-bold text-gray-800 md:text-4xl lg:text-5xl">
        명문교회 교육부서는
      </p>
      <div data-aos="fade-up" className="flex text-lg font-bold text-gray-800 md:text-4xl lg:text-5xl">
        <p>하나님을 경외하는</p>
        <p className="ml-1 text-blue-500 underline md:ml-3">다음세대</p>
        <p>를 세우기 위해 존재한다.</p>
      </div>
    </div>
  );
};

export default EducationMissionSection;
