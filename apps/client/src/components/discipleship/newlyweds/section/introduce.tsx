interface INewlywedsIntroduceSectionProps {
  text: string;
}
const NewlywedsIntroduceSection = ({ text }: INewlywedsIntroduceSectionProps) => {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center gap-1 md:w-1/2 md:gap-3 xl:gap-10 xl:py-5"
    >
      <h1 className="font-SCoreDream text-2xl text-blue-600 md:text-3xl xl:text-5xl">신혼가정 | Newlyweds</h1>
      <p className="break-keep text-center md:text-lg xl:text-2xl">{text}</p>
    </div>
  );
};
export default NewlywedsIntroduceSection;
