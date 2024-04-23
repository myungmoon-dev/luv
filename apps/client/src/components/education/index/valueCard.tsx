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
      <div className={cn("flex w-1/4 flex-col items-center justify-center gap-1 border-b-2 pb-3", borderColor)}>
        <p className={cn("text-xs font-semibold lg:text-2xl", textColor)}>VALUE</p>
        <p className={cn("text-xs font-semibold lg:text-2xl", textColor)}>{index}</p>
      </div>
      <p className={cn("px-8 text-center text-xs font-semibold sm:px-0 lg:text-2xl", textColor)}>{text}</p>
    </div>
  );
};

export default EducationValueCard;
