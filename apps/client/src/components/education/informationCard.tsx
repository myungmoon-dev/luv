import { Icon, IconNameType } from "ui";

interface IEducationInformationCardProps {
  title: string;
  text: string;
  iconName: IconNameType;
}

const EducationInformationCard = ({ title, text, iconName }: IEducationInformationCardProps) => {
  return (
    <div data-aos="fade-up" className="flex flex-col items-center justify-start gap-4">
      <Icon name={iconName} size="lg" strokeColor="#2b66f6" backgroundColor="#2b66f6" />
      <p className="text-xl font-bold">{title}</p>
      <div className="h-[2px] w-full bg-black md:w-1/2" />
      <p className="break-keep text-center text-sm md:text-base">{text}</p>
    </div>
  );
};

export default EducationInformationCard;
