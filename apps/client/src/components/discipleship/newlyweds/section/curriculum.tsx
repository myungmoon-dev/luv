import CurriculumContent from "../curriculum/content";
import CurriculumTitle from "../curriculum/title";

interface INewlywedsCurriculumSecitonProps {
  firstHalf: { title: string; content: string[] };
  secondHalf: { title: string; content: string[] };
}

const NewlywedsCurriculumSeciton = ({ firstHalf, secondHalf }: INewlywedsCurriculumSecitonProps) => {
  return (
    <div className="flex w-full max-w-screen-md flex-col items-center justify-center">
      <CurriculumTitle firstHalf={firstHalf.title} secondHalf={secondHalf.title} />
      <div className="grid min-h-[50px] w-full grid-cols-3 items-center border-b-2 border-b-gray-200">
        <p className="text-center text-lg font-bold md:text-2xl xl:text-lg 2xl:text-2xl">교육과정</p>
        <CurriculumContent data={firstHalf.content} />
        <CurriculumContent data={secondHalf.content} />
      </div>
    </div>
  );
};

export default NewlywedsCurriculumSeciton;
