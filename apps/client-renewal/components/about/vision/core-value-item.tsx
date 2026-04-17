import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

type CoreValueItemProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function CoreValueItem({ title, subtitle, children }: CoreValueItemProps) {
  return (
    <details className="group border-b border-[#E6E6E6] open:bg-[#fafbfc] [&[open]_summary_svg]:rotate-180">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 sm:px-2 md:min-h-[72px] md:py-6 lg:min-h-[96px] lg:px-4 [&::-webkit-details-marker]:hidden">
        <div className="flex flex-col gap-1 sm:px-3 lg:px-8">
          <p className="text-lg font-bold tracking-tight text-[#1e2a4a] md:text-xl lg:text-2xl">{title}</p>
          {subtitle ? (
            <p className="text-xs font-medium uppercase tracking-wider text-[#496674] md:text-sm lg:text-base">
              {subtitle}
            </p>
          ) : null}
        </div>
        <ChevronDown
          strokeWidth={2}
          className="size-5 shrink-0 text-[#496674] transition-transform duration-200 md:size-6"
          aria-hidden
        />
      </summary>
      <div className="space-y-3 border-t border-[#E6E6E6] bg-white px-4 py-5 text-[#496674] sm:px-6 lg:px-12 [&_p]:leading-relaxed">
        {children}
      </div>
    </details>
  );
}
