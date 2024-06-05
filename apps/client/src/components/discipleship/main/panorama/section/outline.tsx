interface IPanoramaOutlineSectionProps {
  title: string;
  description: string;
}

const PanoramaOutlineSection = ({ title, description }: IPanoramaOutlineSectionProps) => {
  return (
    <div data-aos="fade-up" className="flex flex-col items-center justify-center gap-2">
      <div className="flex items-end gap-1 text-3xl text-blue-500">
        <p className="font-SCoreDream">성경 파노라마</p>
        <>
          <p>|</p>
          <p className="font-SCoreDream text-xl text-black">{title}</p>
        </>
      </div>
      <p className="break-keep text-center font-bold text-gray-800 md:text-4xl lg:text-5xl">{description}</p>
    </div>
  );
};

export default PanoramaOutlineSection;
