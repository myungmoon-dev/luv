interface ICurriculumContentComponentProps {
  data: string[];
}

const CurriculumContentComponent = ({ data }: ICurriculumContentComponentProps) => {
  return (
    <div className="my-2 flex flex-col gap-2 border-l-2 border-l-gray-200 pl-3 text-xs md:text-sm">
      {data.map((text, idx) => (
        <p key={idx}>{`- ${text}`}</p>
      ))}
    </div>
  );
};

export default CurriculumContentComponent;
