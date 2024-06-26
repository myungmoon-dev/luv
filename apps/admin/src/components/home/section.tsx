import React, { ReactNode } from "react";

interface IHomeSectionProps {
  children?: ReactNode;
  title: string;
}

const HomeSection = ({ title, children }: IHomeSectionProps) => {
  return (
    <section className="flex flex-col items-center justify-center gap-2 rounded-lg border border-white p-5">
      <p className="text-xl font-bold text-white">{title}</p>
      {children}
    </section>
  );
};

export default HomeSection;
