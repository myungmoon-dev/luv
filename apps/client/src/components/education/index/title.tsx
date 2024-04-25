interface IEducationSectionTitleProps {
  first: string;
  second?: string;
  className?: string;
}

const EducationSectionTitle = ({ first, second, className }: IEducationSectionTitleProps) => {
  return (
    <div className={className}>
      <p className="font-extrabold">{first}</p>
      {second && (
        <>
          <p>|</p>
          <p className="font-Lora font-medium">{second}</p>
        </>
      )}
    </div>
  );
};

export default EducationSectionTitle;
