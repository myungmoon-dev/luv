import type { Metadata } from "next";

import { AboutServicesContent } from "@/components/about/services/about-services-content";
import { AboutMobileSectionNav } from "@/components/about/about-navigation";
import { LgNavigation } from "@/components/about/lg-navigation";

export const metadata: Metadata = {
  title: "예배 정보 | 명문교회",
  description: "복음으로! 오직 성령의 능력으로! 회복을 넘어 부흥으로!",
};

export default function AboutServicesPage() {
  return (
    <>
      <AboutMobileSectionNav />
      <LgNavigation />
      <AboutServicesContent />
    </>
  );
}
