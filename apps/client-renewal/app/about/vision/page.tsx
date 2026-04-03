import type { Metadata } from "next";

import { AboutMobileSectionNav } from "@/components/about/about-navigation";
import { LgNavigation } from "@/components/about/lg-navigation";
import { MinistryVisionContent } from "@/components/about/vision/ministry-vision-content";

export const metadata: Metadata = {
  title: "목회비전 | 명문교회",
  description: "복음으로! 오직 성령의 능력으로! 회복을 넘어 부흥으로!",
};

export default function AboutVisionPage() {
  return (
    <>
      <AboutMobileSectionNav />
      <LgNavigation />
      <MinistryVisionContent />
    </>
  );
}
