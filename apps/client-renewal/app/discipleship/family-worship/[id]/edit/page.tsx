import type { Metadata } from "next";

import { FamilyWorshipForm } from "@/components/discipleship/family-worship/form";

export const metadata: Metadata = {
  title: "예배 수정하기 | 훈련 | 명문교회",
  description: "복음으로! 오직 성령의 능력으로! 회복을 넘어 부흥으로!",
};

export default function FamilyWorshipEditPage() {
  return <FamilyWorshipForm mode="edit" />;
}

