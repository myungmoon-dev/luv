import type { ReactNode } from "react";

import { SiteShell } from "@/components/layout/site-shell";

export default function NewsLayout({ children }: { children: ReactNode }) {
  return (
    <SiteShell>
      <div className="bg-[#fafbfc] pt-[calc(4rem+env(safe-area-inset-top,0px))] lg:pt-[calc(5rem+env(safe-area-inset-top,0px))]">
        {children}
      </div>
    </SiteShell>
  );
}
