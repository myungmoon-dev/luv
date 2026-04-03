import type { Metadata } from "next";

import { NewFamilySection } from "@/components/discipleship/new-family-section";

export const metadata: Metadata = {
  title: "새가족 | 훈련 | 명문교회",
  description: "복음으로! 오직 성령의 능력으로! 회복을 넘어 부흥으로!",
};

export default function NewFamilyPage() {
  return <NewFamilySection />;
}
