import QtTitle from "../title";

interface IQtTargetSectionProps {
  emphasis: string;
  text: string;
}

const QtTargetSection = ({ emphasis, text }: IQtTargetSectionProps) => {
  return (
    <div className="flex w-full max-w-screen-md flex-col justify-start gap-5">
      <QtTitle titleEn="TARGET" titleKr="교육대상" />
      <div data-aos="fade-right" className="flex flex-col break-keep bg-blue-700 px-2 py-5 font-semibold">
        <p className="px-1 text-blue-600">{emphasis}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default QtTargetSection;
