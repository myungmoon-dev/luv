interface ISectionDirectionProps {
  chaple: string;
  address: string;
}

export default function SectionDirection({ chaple, address }: ISectionDirectionProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      {/* title */}
      <div className="rounded-[3.5rem] bg-pink-100 px-8 py-3 shadow-md">
        <h3 className="text-md font-bold text-gray-800">{chaple}</h3>
      </div>
      {/* 상세주소 */}
      <div className="flex h-[60px] items-center justify-center">
        <span className="text-md text-center font-light">{address}</span>
      </div>
      {/* 카카오 맵 */}
      <div className="h-[100%] w-[90%] rounded-2xl bg-pink-100 shadow-md"></div>
    </div>
  );
}
