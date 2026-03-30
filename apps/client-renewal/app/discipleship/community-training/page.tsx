import type { Metadata } from "next";

import { CommunityTrainingSection } from "@/components/discipleship/community-training-section";

export const metadata: Metadata = {
  title: "공동체훈련 | 훈련 | 명문교회",
  description: "복음으로! 오직 성령의 능력으로! 회복을 넘어 부흥으로!",
};

export default function CommunityTrainingPage() {
  return <CommunityTrainingSection />;
}
