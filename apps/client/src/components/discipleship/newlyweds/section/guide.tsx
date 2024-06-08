import EducationInformationCard from "@/components/education/informationCard";

interface INewlywedsGuideSectionProps {
  target: { title: string; description: string };
  time: { title: string; description: string };
  place: { title: string; description: string };
  manager: { name: string; number: string };
}

const NewlywedsGuideSection = ({ target, time, place, manager }: INewlywedsGuideSectionProps) => {
  return (
    <div className="grid grid-cols-3 gap-5 overflow-y-hidden">
      <EducationInformationCard iconName="CircleHeart" title={target.title} text={target.description} />
      <EducationInformationCard iconName="Clock" title={time.title} text={time.description} />
      <EducationInformationCard iconName="Map" title={place.title} text={place.description} />
      <p className="col-span-3 mt-5 flex items-center justify-center break-keep text-center font-bold text-blue-600 no-underline xl:text-xl">
        {`*문의: ${manager.name} (${manager.number})`}
      </p>
    </div>
  );
};

export default NewlywedsGuideSection;
