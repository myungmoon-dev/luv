import type { Metadata } from "next";
import { Suspense } from "react";

import { MissionNewsSection } from "@/components/news/mission-news-section";

export const metadata: Metadata = {
  title: "선교지 소식 | 명문 소식 | 명문교회",
  description: "복음으로! 오직 성령의 능력으로! 회복을 넘어 부흥으로!",
};

function MissionFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center px-4 text-sm text-[#496674]">
      불러오는 중…
    </div>
  );
}

export default function NewsMissionNewsPage() {
  return (
    <Suspense fallback={<MissionFallback />}>
      <MissionNewsSection />
    </Suspense>
  );
}
