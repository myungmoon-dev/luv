import EducationIntroductionTitle from "../introductionTitle";

interface IEducationIntroductionSectionProps {
  text: string;
  department: string;
}

const EducationIntroductionSection = ({ text, department }: IEducationIntroductionSectionProps) => {
  return (
    <div className="flex w-1/2 flex-col justify-center gap-7">
      <EducationIntroductionTitle department={department} type="소개" />
      <div className="flex w-full flex-col gap-3 break-keep">
        <p className="text-lg leading-loose">{text}</p>
      </div>
    </div>
  );
};

export default EducationIntroductionSection;
