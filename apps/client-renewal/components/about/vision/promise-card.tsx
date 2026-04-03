import type { ReactNode } from "react";

type PromiseCardProps = {
  children: ReactNode;
};

export function PromiseCard({ children }: PromiseCardProps) {
  return (
    <div className="flex flex-col gap-3 border border-[#1e2a4a]/20 bg-[#1e2a4a]/6 px-4 pb-6 pt-7 sm:gap-4 sm:px-6 sm:py-9 md:px-10 md:py-11">
      {children}
    </div>
  );
}
