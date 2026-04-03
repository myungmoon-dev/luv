"use client";

import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import type { AboutLeaderMenu } from "@/lib/constants/about";

type LeaderTabsProps = {
  menus: AboutLeaderMenu[];
  children: ReactNode;
};

export function LeaderTabs({ menus, children }: LeaderTabsProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex w-full flex-col gap-6 py-12 sm:gap-10 sm:py-14 lg:gap-12 lg:px-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-16">
        <div className="mb-4 flex items-center gap-3 sm:mb-6">
          <div className="h-[3px] w-8 bg-[#1e2a4a]" aria-hidden />
          <h2 className="text-lg font-bold tracking-wide text-[#1e2a4a] sm:text-xl">직분</h2>
        </div>
        <div
          className="-mx-4 flex gap-2 overflow-x-auto overscroll-x-contain px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:justify-start sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="섬기는 분들 직분"
        >
          {menus.map((menu) => {
            const active = pathname === menu.path;
            return (
              <button
                key={menu.label}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => router.push(menu.path)}
                className={cn(
                  "min-h-11 shrink-0 rounded-none border px-3 py-2.5 text-xs font-medium tracking-wide transition-colors sm:min-h-12 sm:px-5 sm:py-3 sm:text-sm md:text-base",
                  active
                    ? "border-[#1e2a4a] bg-[#1e2a4a] text-white shadow-sm"
                    : "border-[#E6E6E6] bg-white text-[#496674] hover:border-[#1e2a4a]/45 hover:text-[#1e2a4a]",
                )}
              >
                {menu.label}
              </button>
            );
          })}
        </div>
      </div>
      {children}
    </div>
  );
}
