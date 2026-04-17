import type { Metadata } from "next";

import { SermonsBoard } from "@/components/sermons/sermons-board";

export const metadata: Metadata = {
  title: "설교 & 찬양 | 명문교회",
  description: "복음으로! 오직 성령의 능력으로! 회복을 넘어 부흥으로!",
};

export default function SermonsPage() {
  return <SermonsBoard />;
}
