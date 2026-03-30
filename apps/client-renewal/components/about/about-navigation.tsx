"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClipboardList, Eye, Users } from "lucide-react";

import { cn } from "@/lib/utils";

export const aboutSectionNavItems = [
  { href: "/about/vision", label: "교회 비전", icon: Eye, match: (p: string) => p.startsWith("/about/vision") },
  {
    href: "/about/leadership",
    label: "섬기는 분들",
    icon: Users,
    match: (p: string) => p.startsWith("/about/leadership"),
  },
  {
    href: "/about/services",
    label: "예배 정보",
    icon: ClipboardList,
    match: (p: string) => p.startsWith("/about/services"),
  },
] as const;

/** 데스크톱(lg+) — 큰 화면 3분할 카드 네비게이션 */
export function AboutNavigation() {
  const pathname = usePathname();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
      <div className="flex flex-col gap-6 border border-[#E6E6E6] bg-white sm:flex-row sm:divide-x sm:divide-[#E6E6E6]">
        {aboutSectionNavItems.map(({ href, label, icon: Icon, match }) => {
          const active = match(pathname);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "group relative flex flex-1 flex-col items-center gap-4 px-6 py-8 transition-colors sm:py-10",
                active
                  ? "bg-[#1e2a4a]/6"
                  : "hover:bg-[#f8fafc]",
              )}
            >
              <span
                className={cn(
                  "absolute left-0 top-0 h-1 w-full transition-colors",
                  active ? "bg-[#1e2a4a]" : "bg-transparent group-hover:bg-[#1e2a4a]/30",
                )}
                aria-hidden
              />
              <span
                className={cn(
                  "flex size-14 items-center justify-center rounded-full border transition-colors sm:size-16",
                  active
                    ? "border-[#1e2a4a] bg-[#1e2a4a] text-white"
                    : "border-[#E6E6E6] bg-white text-[#1e2a4a] group-hover:border-[#1e2a4a]/50",
                )}
              >
                <Icon className="size-7 sm:size-8" strokeWidth={1.75} aria-hidden />
              </span>
              <span
                className={cn(
                  "text-center text-base font-bold tracking-wide sm:text-lg",
                  active ? "text-[#1e2a4a]" : "text-[#496674] group-hover:text-[#1e2a4a]",
                )}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/** 모바일·태블릿(~lg) — 가로 스크롤 칩 (헤더 아래 서브 네비) */
export function AboutMobileSectionNav() {
  const pathname = usePathname();

  return (
    <nav
      className="border-b border-[#E6E6E6] bg-[#fafbfc] px-3 py-3 lg:hidden"
      aria-label="교회소개 하위 메뉴"
    >
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {aboutSectionNavItems.map(({ href, label, match }) => {
          const active = match(pathname);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "shrink-0 rounded-none border px-4 py-2.5 text-sm font-semibold tracking-wide transition-colors active:bg-[#e8ecf2]",
                active
                  ? "border-[#1e2a4a] bg-[#1e2a4a] text-white shadow-sm"
                  : "border-[#E6E6E6] bg-white text-[#496674]",
              )}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
