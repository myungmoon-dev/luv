import { MinisterCard } from "@/components/about/leadership/minister-card";
import { ministerProfiles } from "@/lib/data/minister-profiles";

export function MinisterListContent() {
  return (
    <div className="pb-16 lg:pb-20">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 pt-2 sm:gap-8 sm:px-6 lg:px-8">
        {ministerProfiles.map((profile) => (
          <MinisterCard
            key={profile.name}
            name={profile.name}
            image={profile.image}
            position={profile.position}
            officer={profile.officerType}
            greeting={profile.greeting}
          />
        ))}
      </div>
    </div>
  );
}
