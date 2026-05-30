import type { Metadata } from "next";

import { EducationDepartmentView } from "@/components/education/education-department-view";

export const metadata: Metadata = {
  title: "브릿지 | 다음세대 | 명문교회",
  description: "복음으로! 오직 성령의 능력으로! 회복을 넘어 부흥으로!",
};

export default function EducationBridgePage() {
  return <EducationDepartmentView type="bridge" />;
}
