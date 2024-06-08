interface IAboutCoreLabelProps {
  type: "corevalue" | "vision";
}
const AboutCoreLabel = ({ type }: IAboutCoreLabelProps) => {
  const labelTitle = type === "corevalue" ? "5대 핵심 가치" : "5대 비전";
  const labelSubTitle = type === "corevalue" ? "Core Values" : "Vision";

  return (
    <div
      data-aos="fade-right"
      className="flex w-full flex-col items-center justify-center gap-5 bg-blue-600 py-12 text-white md:py-20"
    >
      <p className="font-SCoreDream text-xl sm:text-4xl md:text-4xl md:font-medium lg:text-5xl">
        명문교회 2024 핵심가치와 비전
      </p>
      <div className="flex w-full items-end justify-center gap-3 md:gap-7">
        <p className="text-2xl font-bold md:text-5xl lg:text-7xl">{labelTitle}</p>
        <p className="text-xl md:text-5xl lg:text-7xl">|</p>
        <p className="font-Lora text-2xl font-bold md:text-5xl lg:text-7xl">{labelSubTitle}</p>
      </div>
    </div>
  );
};

export default AboutCoreLabel;
