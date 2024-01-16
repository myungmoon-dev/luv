import { ReactNode } from "react";

interface ISectionProps {
  children: ReactNode;
  propsClassName?: string;
}
export default function Section({ children, propsClassName }: ISectionProps) {
  return <div className={`flex flex-col gap-10 xl:gap-20 ${propsClassName}`}>{children}</div>;
}
