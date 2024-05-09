import { cn } from "ui";

interface IEducationSectionTextProps {
  first: string;
  second?: string;
  third?: string;
  pointText: string;
  className?: string;
}
const EducationSectionText = ({ first, second, third, pointText, className }: IEducationSectionTextProps) => {
  return (
    <div className={cn("flex", className)}>
      <p>{first}</p>
      <p>{second}</p>
      <p>{third}</p>
      <p className="mt-4 w-fit border-b-2 border-blue-500 pb-1 font-SCoreDream font-bold text-blue-500 md:text-3xl lg:text-4xl xl:text-5xl">
        {pointText}
      </p>
    </div>
  );
};
export default EducationSectionText;
