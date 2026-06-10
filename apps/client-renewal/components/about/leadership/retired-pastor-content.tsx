"use client";

import { useQuery } from "@tanstack/react-query";
import { getStaffByTab } from "@/lib/api-leadership";

export function RetiredPastorContent() {
  const { data = [] } = useQuery({
    queryKey: ["staff", "retiredPastor"],
    queryFn: () => getStaffByTab("retiredPastor"),
  });

  const pastor = data[0];

  return (
    <div className="pb-16 lg:pb-20">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-4 pt-2 sm:gap-8 md:gap-10">
        {pastor?.imageUrl && (
          <div className="relative size-[120px] shrink-0 overflow-hidden rounded-full border-4 border-[#1e2a4a]/15 shadow-sm ring-2 ring-[#E6E6E6] sm:size-[160px] md:size-[200px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={pastor.imageUrl}
              alt="이덕진 원로목사"
              className="h-full w-full object-cover object-[50%_18%]"
            />
          </div>
        )}
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="mb-1 h-[3px] w-10 bg-[#1e2a4a]" aria-hidden />
          <h1 className="text-2xl font-bold tracking-tight text-[#1e2a4a] sm:text-3xl md:text-4xl">
            이덕진 원로목사
          </h1>
          {pastor?.description && (
            <p className="max-w-md whitespace-pre-line text-sm leading-relaxed text-[#496674] sm:text-base md:text-lg">
              {pastor.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
