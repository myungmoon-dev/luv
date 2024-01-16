interface ISectionHeaderProps {
  text: string;
}

export default function SectionHeader({ text }: ISectionHeaderProps) {
  return (
    <div className="flex justify-center items-center gap-3 w-full">
      <div className="flex-1 h-[2px] bg-[#dfc7c7] rounded-lg" />
      <h1 className="flex-shrink-0 font-bold mx-5 text-2xl xl:text-3xl text-center">{text}</h1>
      <div className="flex-1 h-[2px] bg-[#dfc7c7] rounded-lg" />
    </div>
  );
}
