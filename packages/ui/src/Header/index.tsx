import { throttle } from "lodash";

import { useEffect, useState } from "react";
import { Icon } from "..";
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
    { label: "교회양육", path: "/discipleship" },
  ];

  const [isScrolled, setScrolled] = useState(false);

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
        isScrolled
          ? "ui-sticky ui-top-0 ui-px-0"
          : "ui-w-full ui-absolute -ui-top-0 ui-pt-8 ui-px-4 sm:ui-px-10"
      )}
    >
      <div
        className={cn(
          "ui-h-[60px] ui-bg-white ui-w-full ui-shadow-lg",
          isScrolled ? "md:ui-px-20" : "ui-px-4 md:ui-px-10 ui-rounded-full"
        )}
      >
        <div
          className={cn(
            " ui-flex ui-justify-between ui-items-center ui-w-full ui-h-full ui-px-3 sm:ui-px-0"
          )}
        >
          <img
            className="ui-cursor-pointer"
            onClick={() => push("/")}
            src="/images/Logo.png"
            width={100}
            height={50}
            alt="myungmoon"
          />
          <nav className="ui-flex ui-items-center ui-gap-5 lg:ui-gap-7">
            <div className="ui-hidden ui-gap-3 lg:ui-gap-5 sm:ui-flex">
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
            <Icon name="Hamburger" size="md" strokeColor="#892122" />
          </nav>
        </div>
      </div>
    </header>
  );
};
