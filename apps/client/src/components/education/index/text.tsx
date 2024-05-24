import { cn } from "ui";

interface IEducationSectionTextProps {
  text: string;
  pointText: string;
  className?: string;
}
const EducationSectionText = ({ text, pointText, className }: IEducationSectionTextProps) => {
  return (
    <div className={cn("flex", className)}>
      <p className="break-keep text-center md:mr-20 md:text-start md:text-lg md:leading-loose lg:text-2xl">{text}</p>
      <p className="mt-4 w-fit border-b-2 border-blue-500 font-SCoreDream text-blue-500 md:text-3xl lg:text-4xl">
        {pointText}
      </p>
    </div>
  );
};
export default EducationSectionText;
