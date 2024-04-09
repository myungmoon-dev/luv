import { ReactNode } from "react";
import { cn } from "..";

interface ICardProps {
  className?: string;
  children?: ReactNode;
}

export const Card = ({ children, className }: ICardProps) => {
  return <div className={className}>{children}</div>;
};
