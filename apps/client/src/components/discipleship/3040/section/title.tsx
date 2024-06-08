import { I3040VisionData } from "type";

interface IDiscipleship3040TitleSectionProps {
  titleKr: string;
  titleEn: string;
  verse: string;
}

const Discipleship3040TitleSection = ({ titleEn, titleKr, verse }: IDiscipleship3040TitleSectionProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-3 text-3xl text-blue-600 md:text-4xl xl:gap-5 2xl:text-6xl">
        <p className="font-SCoreDream">{`"${titleEn}"`}</p>
        <p className="font-SCoreDream">{titleKr}</p>
      </div>
      <p className="2xl:text-xl">{verse}</p>
    </div>
  );
};

export default Discipleship3040TitleSection;
