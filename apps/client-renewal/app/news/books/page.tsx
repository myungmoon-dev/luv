import type { Metadata } from "next";

import { BooksSection } from "@/components/news/books-section";

export const metadata: Metadata = {
  title: "추천 도서 | 명문 소식 | 명문교회",
  description: "복음으로! 오직 성령의 능력으로! 회복을 넘어 부흥으로!",
};

export default function NewsBooksPage() {
  return <BooksSection />;
}
