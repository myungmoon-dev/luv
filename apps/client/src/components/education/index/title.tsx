interface IEducationSectionTitleProps {
  first: string;
  second: string;
  className?: string;
}

const EducationSectionTitle = ({ first, second, className }: IEducationSectionTitleProps) => {
  return (
    <div className={className}>
      <p className="font-bold">{first}</p>
      <p className="font-thin">|</p>
      <p className="font-thin">{second}</p>
    </div>
  );
};

export default EducationSectionTitle;
