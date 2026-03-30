"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { educationDepartmentList } from "@/lib/data/education-departments";
import { cn } from "@/lib/utils";

const home = { href: "/education", label: "다음세대 홈" };

export function EducationDepartmentNav() {
  const pathname = usePathname();

  return (
    <nav
      className="-mx-4 mb-8 flex gap-2 overflow-x-auto overscroll-x-contain px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden"
      aria-label="다음세대 부서"
    >
      <Link
        href={home.href}
        className={cn(
          "shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-colors sm:text-sm",
          pathname === home.href
            ? "border-[#1e2a4a] bg-[#1e2a4a] text-white"
            : "border-[#E6E6E6] bg-white text-[#496674] hover:border-[#1e2a4a]/40",
        )}
      >
        {home.label}
      </Link>
      {educationDepartmentList.map((d) => {
        const href = `/education/${d.slug}`;
        const active = pathname === href;
        return (
          <Link
            key={d.slug}
            href={href}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-colors sm:text-sm",
              active
                ? "border-[#1e2a4a] bg-[#1e2a4a] text-white"
                : "border-[#E6E6E6] bg-white text-[#496674] hover:border-[#1e2a4a]/40",
            )}
          >
            {d.department}
          </Link>
        );
      })}
    </nav>
  );
}
