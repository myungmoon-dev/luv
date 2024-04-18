import { Icon, IconNameType } from "ui";
import SectionCard from "../home/sectionCard";

interface IEducationInformationCardProps {
  title: string;
  text: string;
  iconName: IconNameType;
}

const EducationInformationCard = ({ title, text, iconName }: IEducationInformationCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <SectionCard
        className="h-[100px] w-[110px] rounded-3xl bg-pink-300 pb-2 shadow-lg duration-700 hover:bg-pink-200"
        text={title}
        icon={<Icon name={iconName} size="xl" backgroundColor="white" strokeColor="white" cursor="ui-cursor-pointer" />}
      />
      <p className="w-1/2 border-t-[1px] border-gray-300 pt-2 text-center text-sm text-gray-500 sm:text-base">{text}</p>
    </div>
  );
};

export default EducationInformationCard;
