import { useRouter } from "next/router";
import { ReactNode } from "react";
import { Chip, Line } from "ui";

interface ITabsProps {
  menus: { label: string; path: string }[];
  children: ReactNode;
}

const Tabs = ({ menus, children }: ITabsProps) => {
  const { asPath, push } = useRouter();

  return (
    <div className="flex w-full flex-col gap-20">
      <div className="relative flex flex-wrap items-center justify-center gap-4">
        {menus.map((menu) => (
          <Chip
            onClick={() => push(menu.path)}
            selected={menu.path === asPath}
            text={menu.label}
            size="xs"
            color="pink"
            key={menu.label}
            shadow="md"
            className="z-[1]"
          />
        ))}
        <Line className="absolute left-0 right-0 hidden h-[0.15rem] sm:flex" />
      </div>
      {children}
    </div>
  );
};

export default Tabs;