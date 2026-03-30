"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const items = [
  { href: "/discipleship", label: "훈련 홈", match: (p: string) => p === "/discipleship" },
  {
    href: "/discipleship/new-family",
    label: "새가족",
    match: (p: string) => p.startsWith("/discipleship/new-family"),
  },
  {
    href: "/discipleship/family-worship",
    label: "맛있는 가정예배",
    match: (p: string) => p.startsWith("/discipleship/family-worship"),
  },
  {
    href: "/discipleship/faith-education",
    label: "신앙교육",
    match: (p: string) => p.startsWith("/discipleship/faith-education"),
  },
  {
    href: "/discipleship/community-training",
    label: "공동체훈련",
    match: (p: string) => p.startsWith("/discipleship/community-training"),
  },
];

/** 명문 소식 `NewsNavStrip`과 동일 — 상단 칩 줄의 폭·패딩·하단 여백 */
export function DiscipleshipNavStrip() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
      <DiscipleshipSectionNav />
    </div>
  );
}

export function DiscipleshipSectionNav() {
  const pathname = usePathname();

  return (
    <nav
      className="-mx-4 mb-8 flex gap-2 overflow-x-auto overscroll-x-contain px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden"
      aria-label="훈련 메뉴"
    >
      {items.map((item) => {
        const active = item.match(pathname);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-colors sm:text-sm",
              active
                ? "border-[#1e2a4a] bg-[#1e2a4a] text-white"
                : "border-[#E6E6E6] bg-white text-[#496674] hover:border-[#1e2a4a]/40",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
