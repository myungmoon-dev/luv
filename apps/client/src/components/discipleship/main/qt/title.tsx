interface IQtTitleProps {
  titleKr: string;
  titleEn: string;
}
const QtTitle = ({ titleKr, titleEn }: IQtTitleProps) => {
  return (
    <div className="flex gap-3 text-2xl text-blue-600 ">
      <p className="font-Lora font-semibold">{titleEn}</p>
      <p className="font-semibold">|</p>
      <p className="font-semibold">{titleKr}</p>
    </div>
  );
};

export default QtTitle;
