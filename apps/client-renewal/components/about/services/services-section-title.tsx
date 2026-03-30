type ServicesSectionTitleProps = {
  title: string;
  /** 작은 라벨 (선택) */
  eyebrow?: string;
};

export function ServicesSectionTitle({ title, eyebrow }: ServicesSectionTitleProps) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-4">
      <div className="h-[3px] w-8 shrink-0 bg-[#1e2a4a]" aria-hidden />
      <div>
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-wider text-[#496674]">{eyebrow}</p>
        ) : null}
        <h2 className="text-xl font-bold tracking-tight text-[#1e2a4a] sm:text-2xl md:text-3xl">{title}</h2>
      </div>
    </div>
  );
}
