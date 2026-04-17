import type { Metadata } from "next";

import { AboutMobileSectionNav } from "@/components/about/about-navigation";
import { LgNavigation } from "@/components/about/lg-navigation";
import { LeaderTabs } from "@/components/about/leader-tabs";
import { RetiredPastorContent } from "@/components/about/leadership/retired-pastor-content";
import { aboutLeaderMenus } from "@/lib/constants/about";

export const metadata: Metadata = {
  title: "섬기는 분들-원로목사 | 명문교회",
  description: "복음으로! 오직 성령의 능력으로! 회복을 넘어 부흥으로!",
};

export default function LeadershipRetiredPage() {
  return (
    <>
      <AboutMobileSectionNav />
      <LgNavigation />
      <LeaderTabs menus={aboutLeaderMenus}>
        <RetiredPastorContent />
      </LeaderTabs>
    </>
  );
}
