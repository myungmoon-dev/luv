interface IQtProgramCardProps {
  label: string;
  text: string;
}
const QtProgramCard = ({ label, text }: IQtProgramCardProps) => {
  return (
    <div className="shadow-xl">
      <p className=" font-SCoreDream bg-blue-600 py-2 text-center text-white">{label}</p>
      <p className="flex h-[100px] items-center justify-center bg-blue-700 font-semibold">{text}</p>
    </div>
  );
};

export default QtProgramCard;
