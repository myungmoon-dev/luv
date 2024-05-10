import { cn } from "ui";
import CustomImage from "../customImage";

interface IAboutPromiseComponentProps {
  direction: "left" | "right";
  title1: string;
  title2: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  img: string;
}
const AboutPromiseComponent = ({
  direction,
  title1,
  title2,
  text1,
  text2,
  text3,
  text4,
  img,
}: IAboutPromiseComponentProps) => {
  const aosDirection = {
    left: "fade-left",
    right: "fade-right",
  };
  const imgStyle = {
    left: "-left-[100px] md:-left-[100px] xl:-left-[50px]",
    right: "-right-[100px] md:-right-[100px] xl:-right-[50px]",
  };
  const textStyle = {
    left: "pl-20 md:pl-40 lg:pl-52",
    right: "pr-20 md:pr-40 lg:pr-52",
  };

  return (
    <div data-aos={aosDirection[direction]} className="relative flex w-full flex-col items-center justify-center">
      <CustomImage
        className={cn(
          "absolute top-1/2 h-[180px] w-[180px] -translate-y-1/2  md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px]",
          imgStyle[direction],
        )}
        imgClass="brightness-90 rounded-full"
        src={img}
        alt="이미지"
      />
      <div
        className={cn("flex h-[300px] flex-col justify-center gap-6 md:h-[400px] lg:h-[600px]", textStyle[direction])}
      >
        <div className="flex flex-col justify-center gap-1 md:gap-3">
          <p className="font-SCoreDream text-lg text-blue-500 md:text-3xl lg:text-4xl">{title1}</p>
          <p className="font-SCoreDream text-lg text-blue-500 md:text-3xl lg:text-4xl">{title2}</p>
          <div className="h-[2px] w-full bg-blue-500" />
        </div>
        <div className="flex flex-col justify-center gap-1 text-xs font-medium sm:text-sm md:text-2xl">
          <p>{text1}</p>
          <p>{text2}</p>
          <p>{text3}</p>
          <p>{text4}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPromiseComponent;
