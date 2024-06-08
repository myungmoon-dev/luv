interface ICurriculumTitleProps {
  firstHalf: string;
  secondHalf: string;
}

const CurriculumTitle = ({ firstHalf, secondHalf }: ICurriculumTitleProps) => {
  return (
    <div className="grid min-h-[50px] w-full grid-cols-3 items-center rounded-md bg-gray-200">
      <p className="font-SCoreDream text-center tracking-widest">일 정</p>
      <p className="font-SCoreDream flex items-center justify-center border-l-2 border-r-2 border-l-blue-600 border-r-blue-600 text-center tracking-widest">
        {firstHalf}
      </p>
      <p className="font-SCoreDream flex items-center justify-center text-center tracking-widest">{secondHalf}</p>
    </div>
  );
};

export default CurriculumTitle;
