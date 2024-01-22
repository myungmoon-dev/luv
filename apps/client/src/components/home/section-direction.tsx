interface ISectionDirectionProps {
  chaple: string;
  address: string;
}

export default function SectionDirection({ chaple, address }: ISectionDirectionProps) {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      {/* title */}
      <div className="px-8 py-3 bg-[#dfc7c7] rounded-[3.5rem] shadow-md">
        <h3 className="font-bold text-md text-gray-800">{chaple}</h3>
      </div>
      {/* 상세주소 */}
      <div className="h-[60px] flex justify-center items-center">
        <span className="font-light text-md text-center">{address}</span>
      </div>
      {/* 카카오 맵 */}
      <div className="w-[90%] h-[100%] bg-[#dfc7c7] rounded-2xl shadow-md"></div>
    </div>
  );
}
