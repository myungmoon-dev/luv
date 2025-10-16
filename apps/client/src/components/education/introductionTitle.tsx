interface IEducationIntroductionTitleProps {
  department: string;
  type: "소개" | "안내" | "앨범" | "핵심사역";
}

const EducationIntroductionTitle = ({ department, type }: IEducationIntroductionTitleProps) => {
  return (
    <div className="flex justify-center gap-2">
      <p className="font-SCoreDream text-3xl text-[#001F54]">{department}</p>
      <p className="font-SCoreDream text-3xl">{type}</p>
    </div>
  );
};

export default EducationIntroductionTitle;
