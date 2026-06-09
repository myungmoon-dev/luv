import Image from "next/image";

import type { OfficerLabel } from "@/lib/constants/officer-type";
import { officerTypeMap } from "@/lib/constants/officer-type";

type MinisterCardProps = {
  name: string;
  image: string;
  position: string;
  officer: OfficerLabel;
  greeting: string;
};

export function MinisterCard({ name, image, position, officer, greeting }: MinisterCardProps) {
  const title = officerTypeMap[officer];

  return (
    <article className="hover:border-[#1e2a4a]/18 group border border-[#E6E6E6] bg-white p-6 shadow-[0_1px_2px_rgba(30,42,74,0.04)] transition hover:shadow-md sm:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
        <div className="border-[#1e2a4a]/12 relative mx-auto size-[150px] shrink-0 overflow-hidden rounded-full border-2 sm:size-[160px] md:mx-0 md:size-[180px]">
          <Image
            src={image}
            alt={`${name} ${title}`}
            fill
            className="object-cover object-[50%_-5%]"
            sizes="(max-width: 768px) 112px, 140px"
          />
        </div>
        <div className="min-w-0 flex-1 space-y-3 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="text-xl font-bold tracking-tight text-[#1e2a4a] sm:text-2xl">
              {name} <span className="font-semibold text-[#496674]">{title}</span>
            </h3>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#496674]/90 sm:text-[13px]">
              {position} 담당
            </p>
          </div>
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-[#333] sm:text-[15px]">
            {greeting}
          </p>
        </div>
      </div>
    </article>
  );
}
