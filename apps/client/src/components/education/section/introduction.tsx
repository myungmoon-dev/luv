interface IEducationIntroductionSectionProps {
  text: string;
  department: string;
}

const EducationIntroductionSection = ({ text, department }: IEducationIntroductionSectionProps) => {
  // 조사(은/는) 결정 함수
  const getParticle = (department: string) => {
    const lastChar = department.charAt(department.length - 1);
    const lastCharCode = lastChar.charCodeAt(0);
    // 한글의 경우
    if (lastCharCode >= 0xac00 && lastCharCode <= 0xd7a3) {
      return (lastCharCode - 0xac00) % 28 === 0 ? "는" : "은";
    }
    // 한글 이외의 경우 는으로 고정
    return "는";
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 px-10 md:w-2/3 lg:w-1/2">
      <h1 className="xl:text-4xl font-SCoreDream text-2xl text-[#001F54] md:text-3xl">{`명문교회 ${department}${getParticle(
        department,
      )}`}</h1>
      <p className="max-w-screen-sm whitespace-pre-wrap break-keep text-center md:text-lg md:leading-loose">{text}</p>
    </div>
  );
};

export default EducationIntroductionSection;
