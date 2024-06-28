import QtProgramCard from "../program/card";
import QtTitle from "../title";

interface IQtProgramSectionProps {
  description: string;
  list: { label: string; text: string }[];
}
const QtProgramSection = ({ description, list }: IQtProgramSectionProps) => {
  return (
    <div className="flex w-full max-w-screen-md flex-col justify-start gap-5">
      <QtTitle titleEn="PROGRAM" titleKr="교육과정" />
      <p className="font-semibold lg:text-lg 2xl:text-xl">{description}</p>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {list.map((item) => (
          <QtProgramCard key={item.label} label={item.label} text={item.text} />
        ))}
      </div>
    </div>
  );
};
export default QtProgramSection;
