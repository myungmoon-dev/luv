import AboutCoreAlbum, { IValueVision } from "./coreAlbum";
import AboutCoreLabel from "./coreLabel";

interface IAboutCoreSectionProps {
  type: "corevalue" | "vision";
  dataList: IValueVision[];
}

const AboutCoreSection = ({ type, dataList }: IAboutCoreSectionProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center xl:h-screen">
      <AboutCoreLabel type={type} />
      <AboutCoreAlbum dataList={dataList} />
    </div>
  );
};

export default AboutCoreSection;
