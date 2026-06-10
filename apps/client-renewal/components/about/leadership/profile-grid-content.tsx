"use client";

import { useQuery } from "@tanstack/react-query";
import { LeadershipProfileCard } from "@/components/about/leadership/leadership-profile-card";
import { getStaffByTab } from "@/lib/api-leadership";
import type { StaffTabType } from "type";
import type { OfficerLabel } from "@/lib/constants/officer-type";

type ProfileGridContentProps = {
  tabType: StaffTabType;
};

export function ProfileGridContent({ tabType }: ProfileGridContentProps) {
  const { data: list = [], isPending } = useQuery({
    queryKey: ["staff", tabType],
    queryFn: () => getStaffByTab(tabType),
  });

  if (isPending) {
    return (
      <div className="flex min-h-[20vh] items-center justify-center">
        <div className="size-8 animate-spin rounded-full border-2 border-[#1e2a4a] border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="pb-16 lg:pb-20">
      <div className="mx-auto max-w-5xl px-4 pt-2 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {list.map((profile) => (
            <li key={profile.id}>
              <LeadershipProfileCard
                name={profile.name}
                image={profile.imageUrl}
                officer={profile.officerType as OfficerLabel}
                position={profile.position}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
