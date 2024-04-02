interface INavIconProps {
  key: number;
  text: string;
}

export default function NavIcon({ key, text }: INavIconProps) {
  return (
    <div key={key} className="flex flex-col items-center justify-center gap-3">
      {/* icon-component */}
      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-pink-100 p-2 shadow-lg md:h-20 md:w-20">
        <svg className="w-10 xl:w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M14 2H10V8H4V12H10V22H14V12H20V8H14V2Z" fill="white"></path>
        </svg>
      </div>
      <span className="text-sm text-gray-500">{text}</span>
    </div>
  );
}
