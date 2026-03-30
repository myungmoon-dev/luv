import { AboutNavigation } from "@/components/about/about-navigation";

export function LgNavigation() {
  return (
    <div className="hidden bg-[#fafbfc] pt-36 lg:block">
      <div className="pb-12">
        <AboutNavigation />
      </div>
      <div className="h-2 w-full bg-[#E6E6E6]" />
    </div>
  );
}
