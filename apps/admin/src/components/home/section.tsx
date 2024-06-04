import React, { ReactNode } from "react";

interface IHomeSectionProps {
  children?: ReactNode;
  title: string;
}

const HomeSection = ({ title, children }: IHomeSectionProps) => {
  return (
    <section className="flex flex-col justify-center items-center border border-white p-5 rounded-lg">
      <p className="font-bold text-lg text-white">{title}</p>
      {children}
    </section>
  );
};

export default HomeSection;
