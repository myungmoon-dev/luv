import { ReactNode } from "react";

interface INewCommersSection {
  title: string;
  text?: string;
  caution?: string;
  children?: ReactNode;
}

const NewCommersSection = ({ title, text, caution, children }: INewCommersSection) => {
  return (
    <div className="flex w-full flex-col gap-1">
      <h1 className="break-keep font-SCoreDream text-lg text-blue-500 md:text-2xl 2xl:text-4xl">{title}</h1>
      {text && <p className="md:text-lg">{text}</p>}
      {caution && <p className="text-sm font-thin text-blue-600 md:text-base md:font-light">{`* ${caution}`}</p>}
      {children}
    </div>
  );
};

export default NewCommersSection;
