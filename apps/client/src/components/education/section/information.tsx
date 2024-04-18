import EducationInformationCard from "../informationCard";

interface IEducationInformationSectionProps {
  target: string;
  time: string;
  place: string;
  minister: string;
}

const EducationInformationSection = ({ target, time, place, minister }: IEducationInformationSectionProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      <div className="grid w-full grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-0">
        <EducationInformationCard iconName="CircleHeart" title="대상" text={target} />
        <EducationInformationCard iconName="Clock" title="예배시간" text={time} />
        <EducationInformationCard iconName="Map" title="예배장소" text={place} />
        <EducationInformationCard iconName="User" title="섬기는 이" text={minister} />
      </div>
    </div>
  );
};

export default EducationInformationSection;
