import type { Metadata } from "next";

import { AboutMobileSectionNav } from "@/components/about/about-navigation";
import { LgNavigation } from "@/components/about/lg-navigation";
import { LeaderTabs } from "@/components/about/leader-tabs";
import { MinisterListContent } from "@/components/about/leadership/minister-list-content";
import { aboutLeaderMenus } from "@/lib/constants/about";

export const metadata: Metadata = {
  title: "섬기는 분들-교역자 | 명문교회",
  description: "복음으로! 오직 성령의 능력으로! 회복을 넘어 부흥으로!",
};

export default function LeadershipMinisterPage() {
  return (
    <>
      <AboutMobileSectionNav />
      <LgNavigation />
      <LeaderTabs menus={aboutLeaderMenus}>
        <MinisterListContent />
      </LeaderTabs>
    </>
  );
}
