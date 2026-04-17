import Link from "next/link";
import { BookMarked, Heart, Soup, Users } from "lucide-react";

import { DiscipleshipNavStrip } from "@/components/discipleship/discipleship-section-nav";

const sections = [
  {
    href: "/discipleship/new-family",
    title: "새가족",
    description: "교회에 처음 오신 분들을 위한 등록 안내와 단계별 교육 과정입니다.",
    Icon: Heart,
  },
  {
    href: "/discipleship/family-worship",
    title: "맛있는 가정예배",
    description: "가정에서 드리는 예배와 말씀 나눔을 돕는 콘텐츠와 안내입니다.",
    Icon: Soup,
  },
  {
    href: "/discipleship/faith-education",
    title: "신앙교육",
    description: "성경 파노라마, 큐티 세미나, 성경통독 등 말씀 집중 과정을 한 페이지에서 안내합니다.",
    Icon: BookMarked,
  },
  {
    href: "/discipleship/community-training",
    title: "공동체훈련",
    description: "신혼가정, 3040세대, 시니어를 위한 공동체 훈련과 교제입니다.",
    Icon: Users,
  },
];

export function DiscipleshipHub() {
  return (
    <>
      <DiscipleshipNavStrip />
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 md:pb-20 lg:px-8">
        <header className="mb-10 text-center sm:mb-12">
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="h-[3px] w-10 bg-[#1e2a4a]" aria-hidden />
            <p className="text-sm font-semibold tracking-wide text-[#496674]">명문교회</p>
            <div className="h-[3px] w-10 bg-[#1e2a4a]" aria-hidden />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-[#1e2a4a] sm:text-4xl">훈련</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#496674] sm:text-base">
            새가족·가정예배·신앙교육·공동체훈련까지, 믿음 안에서 성장하는 여정을 함께합니다. 아래
            카드를 눌러 각 영역을 확인하세요.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8">
          {sections.map(({ href, title, description, Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex h-full flex-col rounded-2xl border border-[#E6E6E6] bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#1e2a4a]/25 hover:shadow-md sm:p-8"
              >
                <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-[#1e2a4a]/8 text-[#1e2a4a] transition-colors group-hover:bg-[#1e2a4a] group-hover:text-white">
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
