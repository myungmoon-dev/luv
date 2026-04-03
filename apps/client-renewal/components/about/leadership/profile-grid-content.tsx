import { LeadershipProfileCard } from "@/components/about/leadership/leadership-profile-card";
import type { StaffProfileTabType } from "@/lib/data/staff-profiles";
import { staffProfiles } from "@/lib/data/staff-profiles";

type ProfileGridContentProps = {
  tabType: StaffProfileTabType;
};

export function ProfileGridContent({ tabType }: ProfileGridContentProps) {
  const list = staffProfiles.filter((p) => p.tabType === tabType);

  return (
    <div className="pb-16 lg:pb-20">
      <div className="mx-auto max-w-5xl px-4 pt-2 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {list.map((profile) => (
            <li key={`${profile.name}-${profile.image}`}>
              <LeadershipProfileCard
                name={profile.name}
                image={profile.image}
                officer={profile.officerType}
                position={profile.position}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
