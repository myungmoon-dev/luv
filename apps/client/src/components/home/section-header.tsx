interface ISectionHeaderProps {
  text: string;
}

export default function SectionHeader({ text }: ISectionHeaderProps) {
  return (
    <div className="flex w-full items-center justify-center gap-3">
      <div className="h-[2px] flex-1 rounded-lg bg-[#dfc7c7]" />
      <h1 className="mx-5 flex-shrink-0 text-center text-2xl font-bold xl:text-3xl">{text}</h1>
      <div className="h-[2px] flex-1 rounded-lg bg-[#dfc7c7]" />
    </div>
  );
}
