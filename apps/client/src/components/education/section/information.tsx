import EducationInformationCard from "../informationCard";

interface IEducationInformationSectionProps {
  target: string;
  time: string;
  place: string;
}

const EducationInformationSection = ({ target, time, place }: IEducationInformationSectionProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
        <EducationInformationCard iconName="CircleHeart" title="대상" text={target} />
        <EducationInformationCard iconName="Clock" title="예배시간" text={time} />
        <EducationInformationCard iconName="Map" title="예배장소" text={place} />
      </div>
    </div>
  );
};

export default EducationInformationSection;
