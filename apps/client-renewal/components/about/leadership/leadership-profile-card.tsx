import Image from "next/image";

import type { OfficerLabel } from "@/lib/constants/officer-type";
import { officerTypeMap } from "@/lib/constants/officer-type";

type LeadershipProfileCardProps = {
  name: string;
  image: string;
  officer: OfficerLabel;
  position?: string;
};

export function LeadershipProfileCard({
  name,
  image,
  officer,
  position,
}: LeadershipProfileCardProps) {
  const title = officerTypeMap[officer];

  return (
    <article className="hover:border-[#1e2a4a]/18 group flex gap-4 border border-[#E6E6E6] bg-white p-4 shadow-[0_1px_2px_rgba(30,42,74,0.04)] transition hover:shadow-md sm:gap-5 sm:p-5">
      <div className="border-[#1e2a4a]/12 relative size-32 shrink-0 overflow-hidden rounded-full border-2 ring-2 ring-[#1e2a4a]/[0.06] sm:size-40">
        <Image
          src={image}
          alt={`${name} ${title}`}
          fill
          className="object-cover object-[50%_2%]"
          sizes="(max-width: 640px) 80px, 92px"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
        {position ? (
          <p className="text-xs font-medium tracking-wide text-[#1e2a4a] sm:text-sm">{position}</p>
        ) : null}
        <p className="text-base font-semibold text-[#1e2a4a] sm:text-lg">
          {name.trim()} <span className="font-medium text-[#496674]">{title}</span>
        </p>
      </div>
    </article>
  );
}
