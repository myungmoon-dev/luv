import EducationIntroductionTitle from "../introductionTitle";

interface IEducationIntroductionSectionProps {
  text: string;
  department: string;
}

const EducationIntroductionSection = ({ text, department }: IEducationIntroductionSectionProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 px-10 md:w-2/3 lg:w-1/2">
      <h1 className="font-SCoreDream text-2xl text-blue-600 md:text-3xl xl:text-4xl">{`명문교회 ${department}는`}</h1>
      <p className="max-w-screen-sm whitespace-pre-wrap break-keep text-center md:text-lg md:leading-loose">{text}</p>
    </div>
  );
};

export default EducationIntroductionSection;
