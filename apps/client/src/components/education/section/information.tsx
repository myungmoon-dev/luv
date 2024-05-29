import EducationInformationCard from "../informationCard";
import EducationIntroductionTitle from "../introductionTitle";

interface IEducationInformationSectionProps {
  department: string;
  target: string;
  time: string;
  place: string;
}

const EducationInformationSection = ({ department, target, time, place }: IEducationInformationSectionProps) => {
  const vipsSection = () => {
    switch (department) {
      case "M'embers":
        return (
          <p data-aos="fade-up" className="col-span-3 mt-5 flex justify-center break-keep text-center font-bold text-blue-600 xl:text-xl">
            *M'embers에 처음 오신 분들은 <br /> 6주간 Vip's 새신자 교육에 참여하게 됩니다.
          </p>
        );
      case "1청년부":
        return (
          <p data-aos="fade-up" className="col-span-3 mt-5 flex justify-center break-keep text-center font-bold text-blue-600 xl:text-xl">
            1청년부에 처음 오신 분들은 <br /> 4주간 Vip’s 새신자 교육에 참여합니다.
          </p>
        );
      default:
        return null;
    }
  };
  return (
    <div className="flex w-full flex-col justify-center gap-10 px-10 md:w-2/3 lg:w-1/2">
      <EducationIntroductionTitle department={department} type="안내" />
      <div className="grid grid-cols-3 gap-5">
        <EducationInformationCard iconName="CircleHeart" title="대상" text={target} />
        <EducationInformationCard iconName="Clock" title="예배시간" text={time} />
        <EducationInformationCard iconName="Map" title="예배장소" text={place} />
        {vipsSection()}
      </div>
    </div>
  );
};

export default EducationInformationSection;
