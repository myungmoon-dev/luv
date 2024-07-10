interface IAboutHeaderSectionProps {
  texts: string[];
}

const AboutHeaderSection = ({ texts }: IAboutHeaderSectionProps) => {
  return (
    <div data-aos="fade-up" className="flex flex-col items-center justify-start gap-3 md:gap-7">
      {texts.map((text, index) => (
        <p key={index} className="font-SCoreDream text-2xl md:text-4xl lg:text-6xl">
          {text}
        </p>
      ))}
    </div>
  );
};

export default AboutHeaderSection;
