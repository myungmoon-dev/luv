import { Icon, IconNameType } from "ui";

interface IEducationInformationCardProps {
  title: string;
  text: string;
  iconName: IconNameType;
}

const EducationInformationCard = ({ title, text, iconName }: IEducationInformationCardProps) => {
  return (
    <div data-aos="fade-up" className="flex flex-col items-center justify-start gap-4">
      <div className="rounded-full bg-blue-600 p-5">
        <Icon name={iconName} size="xl" strokeColor="white" backgroundColor="white" />
      </div>
      <p className="text-xl font-bold">{title}</p>
      <div className="h-[0.1em] w-full bg-blue-600 md:w-1/2" />
      <p className="break-keep text-center text-sm md:text-base">{text}</p>
    </div>
  );
};

export default EducationInformationCard;
