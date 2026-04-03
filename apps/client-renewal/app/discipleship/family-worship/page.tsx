import type { Metadata } from "next";

import { FamilyWorshipSection } from "@/components/discipleship/family-worship-section";

export const metadata: Metadata = {
  title: "맛있는 가정예배 | 훈련 | 명문교회",
  description: "복음으로! 오직 성령의 능력으로! 회복을 넘어 부흥으로!",
};

export default function FamilyWorshipPage() {
  return <FamilyWorshipSection />;
}
