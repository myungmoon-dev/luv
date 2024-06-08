interface IQtTitleProps {
  titleKr: string;
  titleEn: string;
}
const QtTitle = ({ titleKr, titleEn }: IQtTitleProps) => {
  return (
    <div className="flex gap-3 text-2xl text-blue-600 lg:text-3xl xl:text-4xl 2xl:text-5xl">
      <p className="font-Lora font-semibold">{titleEn}</p>
      <p className="font-semibold">|</p>
      <p className="font-semibold">{titleKr}</p>
    </div>
  );
};

export default QtTitle;
