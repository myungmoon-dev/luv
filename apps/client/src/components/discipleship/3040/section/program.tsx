import CustomImage from "@/components/customImage";
import EducationSectionTitle from "@/components/education/index/title";

interface IDiscipleship3040ProgramSectionProps {
  img: string;
  list: { title: string; informations: string[] }[];
}
const Discipleship3040ProgramSection = ({ img, list }: IDiscipleship3040ProgramSectionProps) => {
  return (
    <div className="relative grid w-full grid-cols-1 md:grid-cols-2 md:gap-10">
      <CustomImage
        className="hidden h-[500px] max-w-screen-md md:block xl:h-[700px]"
        src={img}
        alt="3040세대 프로그램 이미지"
        imgClass="brightness-95"
      />
      <div data-aos="fade-right" className="flex w-full flex-col justify-center gap-5 px-5 xl:gap-10">
        <EducationSectionTitle
          first="프로그램"
          second="Program"
          className="flex items-center gap-3 text-4xl text-blue-600 lg:text-5xl"
        />
        <div className="flex flex-col gap-3 xl:gap-10 ">
          {list.map((program) => (
            <div key={program.title} className="flex flex-col gap-1">
              <p className="text-lg font-bold text-blue-600 xl:text-2xl">{`[${program.title}]`}</p>
              {program.informations.map((info, idx) => (
                <p key={idx} className="break-keep xl:text-xl">
                  {info}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discipleship3040ProgramSection;
