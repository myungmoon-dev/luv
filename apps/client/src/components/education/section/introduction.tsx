import EducationIntroductionTitle from "../introductionTitle";

interface IEducationIntroductionSectionProps {
  text: string;
  department: string;
}

const EducationIntroductionSection = ({ text, department }: IEducationIntroductionSectionProps) => {
  return (
    <div className="flex w-full flex-col justify-center gap-7 px-10 md:w-2/3 lg:w-1/2">
      <EducationIntroductionTitle department={department} type="소개" />
      <div className="flex w-full flex-col gap-3">
        <p className="whitespace-pre-wrap break-keep md:text-lg md:leading-loose">{text}</p>
      </div>
    </div>
  );
};

export default EducationIntroductionSection;
