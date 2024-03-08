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
    { label: "섬기는 분들", path: "/leadership/elders/" },
    { label: "설교말씀", path: "/sermons/sunday-3" },
    { label: "교회양육", path: "/discipleship" },
    { label: "교육부서", path: "/education/young-adults2" },
    { label: "성도의 교제", path: "/fellowship/news" },
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
    <header className={cn("ui-z-10 ui-sticky -ui-top-8 ui-pt-8", isScrolled ? "ui-px-0" : "ui-px-10")}>
      <div
        className={cn(
          "ui-h-[60px] ui-bg-white ui-w-full ui-shadow-lg",
          isScrolled ? "md:ui-px-20" : "ui-px-8 md:ui-px-10 ui-rounded-full"
        )}
      >
        <div className={cn(" ui-flex ui-justify-between ui-items-center ui-w-full ui-h-full")}>
          <img src="/images/Logo.png" width={100} height={50} alt="myungmoon" />
          <nav className="ui-flex ui-items-center ui-gap-5 lg:ui-gap-7">
            <div className="ui-flex ui-gap-3 lg:ui-gap-5">
              {menus.map((menu) => (
                <button
                  onClick={() => push(menu.path)}
                  key={menu.path}
                  className="ui-text-pink-200 ui-font-semibold text-sm"
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
