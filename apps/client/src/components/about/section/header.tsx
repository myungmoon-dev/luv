import { DoubleQuote } from "ui";

interface IAboutHeaderSectionProps {
  text1: string;
  text2: string;
  text3: string;
}

const AboutHeaderSection = ({ text1, text2, text3 }: IAboutHeaderSectionProps) => {
  return (
    <div data-aos="fade-up" className="flex flex-col items-center justify-start gap-3 md:gap-7">
      <DoubleQuote direction="up" className="w-full" size="lg" />
      <p className="font-SCoreDream text-2xl font-bold text-blue-500 md:text-4xl lg:text-6xl">{text1}</p>
      <p className="font-SCoreDream text-2xl font-bold text-blue-500 md:text-4xl lg:text-6xl">{text2}</p>
      <p className="font-SCoreDream text-2xl md:text-4xl lg:text-6xl">{text3}</p>
      <DoubleQuote direction="down" className="w-full" size="lg" />
    </div>
  );
};

export default AboutHeaderSection;
