import { ReactNode } from "react";

interface ICardProps {
  className?: string;
  children?: ReactNode;
}

export const Card = ({ children, className }: ICardProps) => {
  return <div className={`${className} ui-rounded-lg`}>{children}</div>;
};
