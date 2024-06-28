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
    <div
      className={cn(
        "flex h-[200px] w-full flex-col items-center justify-around md:h-[400px]",
        className,
        bgColor,
        borderColor,
      )}
    >
      <div className={cn("flex w-1/4 flex-col items-center justify-center gap-1 border-b-2 pb-5", borderColor)}>
        <p className={cn("font-SCoreDream md:text-3xl", textColor)}>VALUE</p>
        <p className={cn("font-SCoreDream md:text-3xl", textColor)}>{index}</p>
      </div>
      <p
        data-aos="fade-up"
        className={cn(
          "break-keep px-5 text-center text-sm font-semibold md:text-xl lg:text-2xl xl:text-3xl",
          textColor,
        )}
      >
        {text}
      </p>
    </div>
  );
};

export default EducationValueCard;
