import { useRouter } from "next/router";
import { ReactNode } from "react";
import { cn } from "ui";

interface ITabsProps {
  menus: { label: string; path: string }[];
  children: ReactNode;
}

const Tabs = ({ menus, children }: ITabsProps) => {
  const { asPath, push } = useRouter();

  return (
    <div className="flex w-full flex-col gap-14 pb-14 lg:px-12">
      <div className="flex flex-col gap-2.5 sm:gap-3">
        <div className="bg-[#F8F8F8] px-5 py-2 sm:px-7 sm:py-3">
          <p className="text-xs font-medium text-[#888888] sm:text-base md:text-lg">직분</p>
        </div>
        <div className="flex gap-2.5 overflow-x-auto px-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-7 md:gap-5 lg:justify-center [&::-webkit-scrollbar]:hidden">
          {menus.map((menu) => (
            <div
              onClick={() => push(menu.path)}
              key={menu.label}
              className="flex cursor-pointer items-center justify-center border border-[#ECECEC] p-2 sm:px-4 sm:py-3"
            >
              <p
                className={cn(
                  "whitespace-nowrap text-xs font-medium sm:text-base md:text-xl",
                  asPath === menu.path ? "text-[#001F54]" : "text-[#666666]",
                )}
              >
                {menu.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Tabs;
