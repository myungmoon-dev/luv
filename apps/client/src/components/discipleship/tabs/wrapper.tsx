import { ReactNode } from "react";
import { cn } from "ui";

interface IDiscipleshipTabBarContentWrapperProps {
  children: ReactNode;
  className?: String;
}
const DiscipleshipTabBarContentWrapper = ({ children, className }: IDiscipleshipTabBarContentWrapperProps) => {
  return (
    <div className={cn("flex h-[500px] w-full flex-col justify-center bg-gray-50", className)}>
      <div data-aos="fade-left" className="flex w-full flex-col gap-10 px-3 md:items-center md:gap-14 md:px-20">
        {children}
      </div>
    </div>
  );
};
export default DiscipleshipTabBarContentWrapper;
