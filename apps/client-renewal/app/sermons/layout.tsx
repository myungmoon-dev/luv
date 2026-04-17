import { Do_Hyeon } from "next/font/google";
import type { ReactNode } from "react";

import { SiteShell } from "@/components/layout/site-shell";

const doHyeon = Do_Hyeon({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function SermonsLayout({ children }: { children: ReactNode }) {
  return (
    <SiteShell navFontClassName={doHyeon.className}>
      {/*
        고정 헤더: ~4rem(h-16) · lg+ ~5rem(h-20). max-lg만 주면 데스크톱에서 본문이 헤더와 겹침.
      */}
      <div className="pt-[calc(4rem+env(safe-area-inset-top,0px))] lg:pt-[calc(5rem+env(safe-area-inset-top,0px))]">
        {children}
      </div>
    </SiteShell>
  );
}
