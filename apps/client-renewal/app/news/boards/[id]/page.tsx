import type { Metadata } from "next";

import { BoardDetail } from "@/components/news/board-detail";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata(_props: Props): Promise<Metadata> {
  return {
    title: "게시판 | 명문교회",
    description: "교회의 공지와 소식입니다.",
  };
}

export default async function NewsBoardDetailPage({ params }: Props) {
  const { id } = await params;
  return <BoardDetail boardId={id} />;
}
