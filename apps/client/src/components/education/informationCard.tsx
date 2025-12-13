import { Icon, IconNameType } from "ui";

interface IEducationInformationCardProps {
  title: string;
  text: string;
  iconName: IconNameType;
}

const EducationInformationCard = ({ title, text, iconName }: IEducationInformationCardProps) => {
  return (
    <div data-aos="fade-up" className="flex flex-col items-center justify-start gap-4">
      <Icon name={iconName} size="lg" strokeColor="#001F54" backgroundColor="#001F54" />
      <p className="2xl:text-2xl text-lg font-bold md:text-xl">{title}</p>
      <div className="h-[2px] w-full bg-black md:w-1/2" />
      <p className="2xl:text-lg break-keep text-center text-sm md:text-base">{text}</p>
    </div>
  );
};

export default EducationInformationCard;
