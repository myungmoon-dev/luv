import QtTitle from "../title";

interface IQtTargetSectionProps {
  emphasis: string;
  text: string;
}

const QtTargetSection = ({ emphasis, text }: IQtTargetSectionProps) => {
  return (
    <div className="flex w-full max-w-screen-md flex-col justify-start gap-5">
      <QtTitle titleEn="TARGET" titleKr="교육대상" />
      <div
        data-aos="fade-right"
        className="break-keep bg-blue-700 px-2 py-5 font-semibold lg:text-lg 2xl:px-4 2xl:py-10 2xl:text-2xl"
      >
        <p>{text}</p>
        <p className="text-blue-500">{`*${emphasis}`}</p>
      </div>
    </div>
  );
};

export default QtTargetSection;
