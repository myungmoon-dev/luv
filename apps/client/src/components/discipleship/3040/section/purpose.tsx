import CustomImage from "@/components/customImage";
import EducationSectionTitle from "@/components/education/index/title";

interface IDiscipleship3040PurposeSectionProps {
  img: string;
  list: string[];
}

const Discipleship3040PurposeSection = ({ img, list }: IDiscipleship3040PurposeSectionProps) => {
  return (
    <div className="relative grid w-full grid-cols-1 md:grid-cols-2 md:gap-10">
      <CustomImage
        className="hidden h-[300px] max-w-screen-sm md:block md:h-[400px] xl:h-[500px]"
        src={img}
        alt="3040세대 목적 이미지"
        imgClass="brightness-50 rounded-md"
      />
      <div data-aos="fade-right" className="flex w-full flex-col justify-center gap-5 px-5 xl:gap-10">
        <EducationSectionTitle
          first="목적"
          second="Purpose"
          className="flex items-center gap-3 text-4xl text-blue-600 lg:text-7xl"
        />
        {list.map((item, idx) => (
          <p key={idx} className="break-keep md:text-lg xl:text-xl">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Discipleship3040PurposeSection;
