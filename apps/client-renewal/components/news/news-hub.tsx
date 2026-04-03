import Link from "next/link";
import { BookOpen, FileText, FolderOpen, Globe } from "lucide-react";

import { NewsNavStrip } from "@/components/news/news-section-nav";

const sections = [
  {
    href: "/news/bulletins",
    title: "주보",
    description: "주일 주보를 날짜별로 보실 수 있습니다.",
    Icon: FileText,
  },
  {
    href: "/news/mission-news",
    title: "선교지 소식",
    description: "해외 선교지에서 전해 오는 소식과 나눔입니다.",
    Icon: Globe,
  },
  {
    href: "/news/books",
    title: "추천 도서",
    description: "목회자와 교육자가 추천하는 도서를 소개합니다.",
    Icon: BookOpen,
  },
  {
    href: "/news/resources",
    title: "자료함",
    description: "예배·행사에 필요한 자료를 내려받을 수 있습니다.",
    Icon: FolderOpen,
  },
];

export function NewsHub() {
  return (
    <>
      <NewsNavStrip />
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 md:pb-20 lg:px-8">
      <header className="mb-10 text-center sm:mb-12">
        <div className="mb-3 flex items-center justify-center gap-3">
          <div className="h-[3px] w-10 bg-[#1e2a4a]" aria-hidden />
          <p className="text-sm font-semibold tracking-wide text-[#496674]">명문교회</p>
          <div className="h-[3px] w-10 bg-[#1e2a4a]" aria-hidden />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-[#1e2a4a] sm:text-4xl">명문 소식</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#496674] sm:text-base">
          주보·선교·도서·자료를 한곳에서 안내합니다. 아래 카드를 눌러 각 코너로 이동하세요.
        </p>
      </header>

      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8">
        {sections.map(({ href, title, description, Icon }) => (
          <li key={href}>
            <Link
              href={href}
              className="group flex h-full flex-col rounded-2xl border border-[#E6E6E6] bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#1e2a4a]/25 hover:shadow-md sm:p-8"
            >
              <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-[#1e2a4a]/[0.08] text-[#1e2a4a] transition-colors group-hover:bg-[#1e2a4a] group-hover:text-white">
                <Icon className="size-7" strokeWidth={1.75} aria-hidden />
              </div>
              <h2 className="text-xl font-bold text-[#1e2a4a]">{title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#496674]">{description}</p>
              <span className="mt-4 text-sm font-semibold text-[#1e2a4a] opacity-0 transition-opacity group-hover:opacity-100">
                바로가기 →
              </span>
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}
