import { useState } from "react";
import { Drawer, Icon } from "..";

interface IHeaderProps {
  push: (url: string) => void;
}

export const Header = ({ push }: IHeaderProps) => {
  const menus: { label: string; path: string }[] = [
    { label: "교회소개", path: "/about" },
    { label: "설교•찬양", path: "/sermons/sunday-3" },
    { label: "다음세대", path: "/education/infants" },
    { label: "주보•소식", path: "/news/bulletins" },
    { label: "교회양육", path: "/discipleship/main/bible" },
  ];

  const [isOpenDrawer, setOpenDrawer] = useState(false);

  return (
    <header className="ui-flex ui-shadow-lg ui-fixed ui-top-0 ui-z-10 ui-justify-between ui-items-center ui-w-full ui-bg-white ui-py-4 ui-px-8">
      <img
        onClick={() => push("/")}
        src="/images/Logo.png"
        className="ui-cursor-pointer"
        width={100}
        height={50}
        alt="myungmoon"
      />
      <nav className="ui-flex ui-items-center ui-gap-5 lg:ui-gap-7">
        <div className="ui-hidden sm:ui-flex ui-gap-3 lg:ui-gap-5">
          {menus.map((menu) => (
            <button
              onClick={() => push(menu.path)}
              key={menu.path}
              className="ui-text-pink-200 ui-font-semibold ui-text-sm"
            >
              {menu.label}
            </button>
          ))}
        </div>
      </nav>
      <div>
        <Icon
          name="Hamburger"
          cursor="ui-cursor-pointer"
          size="md"
          strokeColor="#892122"
          onClick={() => setOpenDrawer(true)}
        />
        <Drawer
          open={isOpenDrawer}
          onClose={() => setOpenDrawer(false)}
          className="ui-flex ui-flex-col ui-justify-between ui-items-center ui-pt-10 ui-pb-5"
        >
          <div className="ui-flex ui-flex-col ui-gap-2 ui-w-full">
            {menus.map((menu) => (
              <button
                className="hover:ui-text-pink-200 ui-text-black ui-w-full ui-text-center ui-text-xl"
                onClick={() => push(menu.path)}
                key={menu.path}
              >
                {menu.label}
              </button>
            ))}
          </div>
          <img src="/images/Logo.png" alt="myungmoon" width={100} height={50} />
        </Drawer>
      </div>
    </header>
  );
};
