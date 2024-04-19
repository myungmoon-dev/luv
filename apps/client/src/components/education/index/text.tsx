import { cn } from "ui";

interface IEducationSectionTextProps {
  first: string;
  second: string;
  third: string;
  className?: string;
}
const EducationSectionText = ({ first, second, third, className }: IEducationSectionTextProps) => {
  return (
    <div className={cn("flex", className)}>
      <p>{first}</p>
      <p>{second}</p>
      <p className="text-lg font-bold text-blue-500 lg:text-2xl">{third}</p>
    </div>
  );
};
export default EducationSectionText;
