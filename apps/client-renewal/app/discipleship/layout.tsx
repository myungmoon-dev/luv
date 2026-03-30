import { Do_Hyeon } from "next/font/google";
import type { ReactNode } from "react";

import { SiteShell } from "@/components/layout/site-shell";

const doHyeon = Do_Hyeon({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function DiscipleshipLayout({ children }: { children: ReactNode }) {
  return (
    <SiteShell navFontClassName={doHyeon.className}>
      <div className="bg-[#fafbfc] pt-[calc(4rem+env(safe-area-inset-top,0px))] lg:pt-[calc(5rem+env(safe-area-inset-top,0px))]">
        {children}
      </div>
    </SiteShell>
  );
}
