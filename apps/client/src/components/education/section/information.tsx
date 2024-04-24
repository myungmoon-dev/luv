import EducationInformationCard from "../informationCard";
import EducationIntroductionTitle from "../introductionTitle";

interface IEducationInformationSectionProps {
  department: string;
  target: string;
  time: string;
  place: string;
}

const EducationInformationSection = ({ department, target, time, place }: IEducationInformationSectionProps) => {
  return (
    <div className="flex w-1/2 flex-col justify-center gap-10">
      <EducationIntroductionTitle department={department} type="안내" />
      <div className="grid grid-cols-3 gap-5">
        <EducationInformationCard iconName="CircleHeart" title="대상" text={target} />
        <EducationInformationCard iconName="CircleHeart" title="예배시간" text={time} />
        <EducationInformationCard iconName="CircleHeart" title="예배장소" text={place} />
      </div>
    </div>
  );
};

export default EducationInformationSection;
