import type { Metadata } from "next";

import { EducationMainPage } from "@/components/education/education-main-page";

export const metadata: Metadata = {
  title: "다음세대 사역안내 | 명문교회",
  description: "복음으로! 오직 성령의 능력으로! 회복을 넘어 부흥으로!",
};

export default function EducationPage() {
  return <EducationMainPage />;
}
