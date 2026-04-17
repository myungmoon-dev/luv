import type { Metadata } from "next";

import { NewsHub } from "@/components/news/news-hub";

export const metadata: Metadata = {
  title: "명문 소식 | 명문교회",
  description: "복음으로! 오직 성령의 능력으로! 회복을 넘어 부흥으로!",
};

export default function NewsPage() {
  return <NewsHub />;
}
