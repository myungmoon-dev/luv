import { ReactNode } from "react";
import { cn } from "ui";

interface INewCommersWrapperProps {
  children: ReactNode;
  className?: String;
}
const NewCommersWrapper = ({ children, className }: INewCommersWrapperProps) => {
  return (
    <div className={cn("flex h-[500px] w-full flex-col justify-center bg-gray-50", className)}>
      <div data-aos="fade-left" className="flex w-full flex-col gap-10 px-3 md:items-center md:gap-14 md:px-20">
        {children}
      </div>
    </div>
  );
};
export default NewCommersWrapper;
