import { Do_Hyeon } from "next/font/google";
import type { ReactNode } from "react";

import { SiteShell } from "@/components/layout/site-shell";

const doHyeon = Do_Hyeon({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

/** 고정 헤더(~4rem) + 노치 safe-area — 모바일·태블릿에서 본문이 헤더와 겹치지 않도록 */
export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <SiteShell navFontClassName={doHyeon.className}>
      <div className="max-lg:pt-[calc(4rem+env(safe-area-inset-top,0px))]">{children}</div>
    </SiteShell>
  );
}
