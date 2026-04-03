import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

type SiteShellProps = {
  children: ReactNode;
  navFontClassName?: string;
};

export function SiteShell({ children, navFontClassName }: SiteShellProps) {
  return (
    <main className="relative">
      <SiteHeader navFontClassName={navFontClassName} />
      <div>{children}</div>
      <div className="h-[8px] w-full bg-[#E6E6E6]" />
      <SiteFooter />
    </main>
  );
}
