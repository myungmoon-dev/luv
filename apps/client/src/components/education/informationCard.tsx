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
        className="h-[100px] w-[110px] rounded-3xl bg-green-100 pb-2 shadow-lg duration-700 hover:bg-brown-200"
        text={title}
        icon={<Icon name={iconName} size="xl" backgroundColor="white" strokeColor="white" cursor="ui-cursor-pointer" />}
      />
      <p className="w-1/2 border-gray-300 pt-2 text-center text-xs text-gray-500 sm:w-8/12 sm:text-sm md:w-[90%] md:border-t-[1px]">
        {text}
      </p>
    </div>
  );
};

export default EducationInformationCard;
