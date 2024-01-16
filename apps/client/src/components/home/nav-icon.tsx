interface INavIconProps {
  key: number;
  text: string;
}

export default function NavIcon({ key, text }: INavIconProps) {
  return (
    <>
      <div key={key} className="flex flex-col justify-center items-center gap-3">
        {/* icon-component */}
        <div className="w-16 md:w-20 h-16 md:h-20 flex justify-center items-center bg-[#dfc7c7] p-2 rounded-xl shadow-lg">
          <svg className="w-10 xl:w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M14 2H10V8H4V12H10V22H14V12H20V8H14V2Z" fill="white"></path>
          </svg>
        </div>
        <span className="text-gray-500 text-sm">{text}</span>
      </div>
    </>
  );
}
