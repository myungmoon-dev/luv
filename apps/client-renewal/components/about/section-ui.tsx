import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** 교회소개(담임목사·교회 비전) 페이지 공통 타이포/색상 */
export const SECTION_H2 =
  "text-[1.75rem] font-extrabold leading-[1.32] tracking-[-0.03em] sm:text-4xl lg:text-[44px]";
export const SECTION_BODY = "text-base leading-[1.85] text-[#4E5968] sm:text-[19px]";
/** 헤더 nav·푸터와 같은 네이비 */
export const NAVY_BG = "bg-[#0A1E51]";
export const GRAY_BG = "bg-[#F4F6F9]";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("mb-5 text-[15px] font-bold text-[#2453C9] sm:text-[17px]", className)}>
      {children}
    </p>
  );
}
