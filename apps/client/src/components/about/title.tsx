interface IAboutTitleProps {
  title: string;
}

const AboutTitle = ({ title }: IAboutTitleProps) => {
  return (
    <div>
      <h1 className="mb-6 text-4xl font-bold">{title}</h1>
      <hr className="border-t-2 border-[#f0f0f0]" />
    </div>
  );
};

export default AboutTitle;
