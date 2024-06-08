interface IQtProgramCardProps {
  label: string;
  text: string;
}
const QtProgramCard = ({ label, text }: IQtProgramCardProps) => {
  return (
    <div className="shadow-sm">
      <p className="font-SCoreDream bg-blue-600 py-2 text-center text-white lg:text-lg 2xl:py-4 2xl:text-2xl">
        {label}
      </p>
      <p className="flex h-[100px] items-center justify-center bg-blue-700 font-semibold 2xl:text-xl">{text}</p>
    </div>
  );
};

export default QtProgramCard;
