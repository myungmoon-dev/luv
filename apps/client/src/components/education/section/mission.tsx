import EducationSectionTitle from "../index/title";

const EducationMissionSection = () => {
  return (
    <div className="flex w-full flex-col md:gap-3">
      <EducationSectionTitle
        first="사명 선언문"
        second="Mission Statement"
        className="flex items-end gap-1 text-blue-500 sm:text-xl lg:text-2xl"
      />
      <p className="font-bold text-gray-600 sm:text-3xl">명문교회 교육부서는</p>
      <p className="font-bold text-gray-600 sm:text-3xl">하나님을 경외하는 다음세대를 세우기 위해 존재한다.</p>
    </div>
  );
};

export default EducationMissionSection;
