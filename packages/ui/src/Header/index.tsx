import { throttle } from "lodash";

import { useEffect, useState } from "react";
import { Drawer, Icon } from "..";
import { cn } from "../utils/twMerge";

interface IHeaderProps {
  push: (url: string) => void;
}

export const Header = ({ push }: IHeaderProps) => {
  const menus: { label: string; path: string }[] = [
    { label: "교회소개", path: "/about" },
    { label: "설교•찬양", path: "/sermons/sunday-3" },
    { label: "다음세대", path: "/education/youth-adults2" },
    { label: "주보•소식", path: "/news/bulletins" },
    { label: "교회양육", path: "/discipleship/main/bible" },
  ];

  const [isScrolled, setScrolled] = useState(false);
  const [isOpenDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    const updateScroll = throttle(() => {
      const position = window.scrollY || document.documentElement.scrollTop;
      setScrolled(position > 40);
    }, 100);

    window.addEventListener("scroll", updateScroll);

    return () => {
      updateScroll.cancel();
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "ui-z-10",
        isScrolled ? "ui-sticky ui-top-0 ui-px-0" : "ui-w-full ui-absolute -ui-top-0 ui-pt-8 ui-px-4 sm:ui-px-10"
      )}
    >
      <div
        className={cn(
          "ui-h-[60px] ui-bg-white ui-w-full ui-shadow-lg",
          isScrolled ? "ui-px-8 md:ui-px-20" : "ui-px-8 md:ui-px-10 ui-rounded-full"
        )}
      >
        <div className={cn("ui-flex ui-justify-between ui-items-center ui-w-full ui-h-full")}>
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
              className="ui-flex ui-flex-col ui-justify-between ui-items-center ui-px-2 ui-pt-10 ui-pb-5"
            >
              <div className="ui-flex ui-flex-col ui-gap-2 ui-w-full">
                {menus.map((menu) => (
                  <button
                    className="hover:ui-text-pink-200 ui-text-black ui-w-full ui-text-end ui-text-xl"
                    onClick={() => push(menu.path)}
                    key={menu.path}
                  >
                    {menu.label}
                  </button>
                ))}
              </div>
              <img src="/images/Logo.png" alt="myungmoon" width={100} height={50} />
            </Drawer>
          </nav>
        </div>
      </div>
    </header>
  );
};
