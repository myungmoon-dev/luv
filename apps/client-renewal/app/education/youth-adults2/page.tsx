import type { Metadata } from "next";

import { EducationDepartmentView } from "@/components/education/education-department-view";

export const metadata: Metadata = {
  title: "청년부 | 다음세대 | 명문교회",
  description: "복음으로! 오직 성령의 능력으로! 회복을 넘어 부흥으로!",
};

export default function EducationYouthAdults2Page() {
  return <EducationDepartmentView type="2youth" />;
}
