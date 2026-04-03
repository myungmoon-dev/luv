import type { Metadata } from "next";

import { MissionNewsDetail } from "@/components/news/mission-news-detail";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata(_props: Props): Promise<Metadata> {
  return {
    title: "선교지 소식 | 명문교회",
    description: "선교지에서 전하는 소식입니다.",
  };
}

export default async function NewsMissionNewsDetailPage({ params }: Props) {
  const { id } = await params;
  return <MissionNewsDetail missionId={id} />;
}
