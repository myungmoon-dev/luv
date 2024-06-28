import CustomImage from "@/components/customImage";
import EducationSectionTitle from "@/components/education/index/title";

interface IDiscipleship3040VisionSectionProps {
  img: string;
  text1: string;
  text2?: string;
  emphasis: string;
}
const Discipleship3040VisionSection = ({ img, text1, text2, emphasis }: IDiscipleship3040VisionSectionProps) => {
  return (
    <CustomImage className="h-[400px] xl:h-[600px]" src={img} alt="3040세대 비전 이미지" imgClass="brightness-50">
      <div className="absolute flex h-full w-full flex-col items-center justify-center gap-10">
        <EducationSectionTitle
          first="비전"
          second="Vision"
          className="flex items-center justify-center gap-3 text-5xl text-white md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
        />
        <div
          data-aos="fade-up"
          className="flex flex-col items-center justify-center gap-1 text-xl text-white sm:gap-4 md:text-2xl lg:text-3xl"
        >
          <p>{text1}</p>
          {text2 && <p>{text2}</p>}
          <p>{emphasis}</p>
        </div>
      </div>
    </CustomImage>
  );
};

export default Discipleship3040VisionSection;
