import CustomImage from "@/components/customImage";
import PanoramaDivisionComponent from "../divison";

interface IPanoramaTargetSectionProps {
  title: string;
  img: string;
  oldPanorama: string;
  newPanorama: string;
}

const PanoramaTargetSection = ({ title, img, oldPanorama, newPanorama }: IPanoramaTargetSectionProps) => {
  return (
    <CustomImage className="h-[300px]" src={img} alt="파노라마 교육대상 이미지" imgClass="brightness-50">
      <div className="absolute flex h-full w-full flex-col items-center justify-center gap-10">
        <p className="border-b-2 border-white pb-2 font-SCoreDream text-4xl text-white md:text-5xl lg:text-7xl">
          {title}
        </p>
        <div data-aos="fade-up" className="flex flex-col items-center justify-center gap-1 text-white">
          <PanoramaDivisionComponent text={oldPanorama} type="oldPanorama" />
          <PanoramaDivisionComponent text={newPanorama} type="newPanorama" />
        </div>
      </div>
    </CustomImage>
  );
};

export default PanoramaTargetSection;
