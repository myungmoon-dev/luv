import { useRouter } from "next/router";
import { ReactNode } from "react";
import { Chip, cn, Line } from "ui";

interface ITabsProps {
  menus: { label: string; path: string }[];
  children: ReactNode;
}

const Tabs = ({ menus, children }: ITabsProps) => {
  const { asPath, push } = useRouter();

  return (
    <div className="flex w-full flex-col gap-14 pb-14">
      <div className="flex flex-col gap-2.5">
        <div className="bg-[#F8F8F8] px-5 py-2">
          <p className="text-xs font-medium text-[#888888]">직분</p>
        </div>
        <div className="flex gap-2.5 overflow-x-scroll px-4">
          {menus.map((menu) => (
            <div
              onClick={() => push(menu.path)}
              key={menu.label}
              className="flex cursor-pointer items-center justify-center border border-[#ECECEC] p-2"
            >
              <p
                className={cn(
                  "whitespace-nowrap text-xs font-medium",
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
