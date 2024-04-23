import EducationIntroductionSection from "./section/introduction";
import EducationInformationSection from "./section/information";

interface IEducationOverViewProps {
  image: string;
  title: string;
  words: string;
  target: string;
  time: string;
  place: string;
}

const EducationOverView = ({ place, target, time, title, words, image }: IEducationOverViewProps) => {
  return (
    <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-center gap-14">
      <EducationIntroductionSection image={image} title={title} words={words} />
      <EducationInformationSection target={target} time={time} place={place} />
    </div>
  );
};

export default EducationOverView;
