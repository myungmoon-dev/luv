import EducationSectionTitle from "../index/title";

const EducationMissionSection = () => {
  return (
    <div className="flex h-[300px] w-full flex-col items-center justify-center gap-3">
      <EducationSectionTitle
        first="사명 선언문"
        second="Mission Statement"
        className="mb-5 flex items-end gap-1 text-3xl text-blue-500"
      />
      <p data-aos="fade-up" className="text-5xl font-bold text-gray-800">
        명문교회 교육부서는
      </p>
      <div data-aos="fade-up" className="flex text-5xl font-bold text-gray-800">
        <p>하나님을 경외하는</p>
        <p className="ml-3 text-blue-500 underline">다음세대</p>
        <p>를 세우기 위해 존재한다.</p>
      </div>
    </div>
  );
};

export default EducationMissionSection;
