import type { ReactNode } from "react";

import { SiteShell } from "@/components/layout/site-shell";

export default function EducationLayout({ children }: { children: ReactNode }) {
  return (
    <SiteShell>
      <div className="pt-[calc(4rem+env(safe-area-inset-top,0px))] lg:pt-[calc(5rem+env(safe-area-inset-top,0px))]">
        {children}
      </div>
    </SiteShell>
  );
}
