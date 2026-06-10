"use client";

import { useQuery } from "@tanstack/react-query";
import { MinisterCard } from "@/components/about/leadership/minister-card";
import { getStaffByTab } from "@/lib/api-leadership";
import type { OfficerLabel } from "@/lib/constants/officer-type";

export function MinisterListContent() {
  const { data: ministers = [], isPending } = useQuery({
    queryKey: ["staff", "minister"],
    queryFn: () => getStaffByTab("minister"),
  });

  if (isPending) {
    return (
      <div className="flex min-h-[30vh] items-center justify-center">
        <div className="size-8 animate-spin rounded-full border-2 border-[#1e2a4a] border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="pb-16 lg:pb-20">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 pt-2 sm:gap-8 sm:px-6 lg:px-8">
        {ministers.map((minister) => (
          <MinisterCard
            key={minister.id}
            name={minister.name}
            image={minister.imageUrl}
            position={minister.position ?? ""}
            officer={minister.officerType as OfficerLabel}
            greeting={minister.greeting ?? ""}
          />
        ))}
      </div>
    </div>
  );
}
