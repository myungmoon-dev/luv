import React, { ReactNode } from "react";
import { SectionHeader } from "ui";

interface ISectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ children, className, title }: ISectionProps) => {
  return (
    <section className={`${className}`}>
      <SectionHeader text={title} hasLine={true} selected={true} size="sm" color="blue" />
      <div className="my-5">{children}</div>
    </section>
  );
};

export default Section;
