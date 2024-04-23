import { cn } from "ui";

interface IEducationValueCardProps {
  textColor: string;
  bgColor?: string;
  borderColor?: string;
  index: string;
  text: string;
  className?: string;
}

const EducationValueCard = ({
  text,
  index,
  textColor,
  bgColor,
  className,
  borderColor = "border-white",
}: IEducationValueCardProps) => {
  return (
    <div className={cn("flex h-full w-full flex-col items-center justify-around", className, bgColor, borderColor)}>
      <div className={cn("flex w-1/4 flex-col items-center justify-center gap-1 border-b-2 pb-5", borderColor)}>
        <p className={cn("font-SCoreDream text-4xl", textColor)}>VALUE</p>
        <p className={cn("font-SCoreDream text-4xl", textColor)}>{index}</p>
      </div>
      <p className={cn("px-8 text-center text-4xl font-semibold", textColor)}>{text}</p>
    </div>
  );
};

export default EducationValueCard;
