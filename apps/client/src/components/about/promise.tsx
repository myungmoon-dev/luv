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
  const aosDirection = direction === "left" ? "fade-left" : "fade-right";
  const imgStyle =
    direction === "left"
      ? "-left-[100px] md:-left-[100px] lg:-left-[50px]"
      : "-right-[100px] md:-right-[100px] lg:-right-[50px]";
  const textStyle = direction === "left" ? "pl-20 md:pl-40 lg:pl-52" : "pr-20 md:pr-40 lg:pr-52";
  return (
    <div data-aos={aosDirection} className="relative flex w-full flex-col items-center justify-center">
      <CustomImage
        className={cn(
          "absolute top-1/2 h-[180px] w-[180px] -translate-y-1/2  md:h-[300px] md:w-[300px] lg:h-[500px] lg:w-[500px]",
          imgStyle,
        )}
        imgClass="brightness-90 rounded-full"
        src={img}
        alt="이미지"
      />
      <div
        className={cn("flex h-[300px] flex-col justify-center gap-6  md:h-[400px] lg:h-[600px] lg:gap-20", textStyle)}
      >
        <div className="flex flex-col justify-center gap-1 md:gap-3">
          <p className="font-SCoreDream text-lg text-blue-500 md:text-3xl lg:text-4xl">{title1}</p>
          <p className="font-SCoreDream text-lg text-blue-500 md:text-3xl lg:text-4xl">{title2}</p>
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
