import React, { ReactNode } from "react";

interface IHomeSectionProps {
  children?: ReactNode;
  title: string;
}

const HomeSection = ({ title, children }: IHomeSectionProps) => {
  return (
    <section className="flex flex-col justify-center items-center">
      <p className="font-bold text-xl">{title}</p>
      {children}
    </section>
  );
};

export default HomeSection;
