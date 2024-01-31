interface ISectionContactProps {
  text: string;
  textClassName: string;
}

export default function SectionContact({ text, textClassName }: ISectionContactProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      {/* icon-component */}
      <div className="rounded-xl bg-[#dfc7c7] p-8">
        <svg className="w-10 xl:w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M14 2H10V8H4V12H10V22H14V12H20V8H14V2Z" fill="white"></path>
        </svg>
      </div>
      <span className={`text-gray-500 ${textClassName}`}>{text}</span>
    </div>
  );
}
