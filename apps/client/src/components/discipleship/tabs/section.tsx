import { ReactNode } from "react";

interface IDiscipleshipTabBarContentSection {
  title: string;
  text?: string;
  caution?: string;
  children?: ReactNode;
}

const DiscipleshipTabBarContentSection = ({ title, text, caution, children }: IDiscipleshipTabBarContentSection) => {
  return (
    <div className="flex w-full flex-col gap-1 xl:gap-3">
      <h1 className="break-keep font-SCoreDream text-lg text-blue-500 md:text-2xl 2xl:text-4xl">{title}</h1>
      {text && <p className="break-keep md:text-lg">{text}</p>}
      {caution && <p className="text-sm font-bold text-blue-600 md:text-base">{`* ${caution}`}</p>}
      {children}
    </div>
  );
};

export default DiscipleshipTabBarContentSection;
