import { ReactNode } from "react";

interface ISectionProps {
  children: ReactNode;
  className?: string;
}
export default function Section({ children, className }: ISectionProps) {
  return <div className={`flex flex-col gap-10 xl:gap-20 ${className}`}>{children}</div>;
}
