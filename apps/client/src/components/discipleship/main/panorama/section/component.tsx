import { ReactNode } from "react";

interface IPanoramaSectionComponentProps {
  title: string;
  children: ReactNode;
}

const PanoramaSectionComponent = ({ title, children }: IPanoramaSectionComponentProps) => {
  return (
    <div className="flex w-full flex-col justify-center gap-7 px-10 md:w-2/3 lg:w-1/2">
      <div className="flex gap-2 border-b-2 border-gray-200 pb-2">
        <p className="font-SCoreDream text-3xl text-blue-500">{title}</p>
      </div>
      {children}
    </div>
  );
};

export default PanoramaSectionComponent;
