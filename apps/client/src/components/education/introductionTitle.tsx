interface IEducationIntroductionTitleProps {
  department: string;
  type: "소개" | "안내" | "앨범";
}

const EducationIntroductionTitle = ({ department, type }: IEducationIntroductionTitleProps) => {
  return (
    <div className="flex gap-2 border-b-2 border-gray-200 pb-5">
      <p className="font-SCoreDream text-3xl font-bold text-blue-500">{department}</p>
      <p className="font-SCoreDream text-3xl font-bold">{type}</p>
    </div>
  );
};

export default EducationIntroductionTitle;
