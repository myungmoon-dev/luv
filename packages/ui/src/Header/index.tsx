import { useEffect, useState } from "react";
import { Drawer, Icon, cn } from "..";
import { throttle } from "lodash";

interface IHeaderProps {
  push: (url: string) => void;
  asPath: string;
}

export const Header = ({ push, asPath }: IHeaderProps) => {
  const menus: { label: string; path: string; key: string }[] = [
    { label: "교회소개", path: "/about", key: "/about" },
    { label: "설교•찬양", path: "/sermons/sunday-3", key: "/sermons" },
    { label: "다음세대", path: "/education", key: "/education" },
    { label: "주보•소식", path: "/news/bulletins", key: "/news" },
    {
      label: "교회양육",
      path: "/discipleship/main/bible",
      key: "/discipleship",
    },
  ];

  const [isOpenDrawer, setOpenDrawer] = useState(false);
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
        "ui-flex ui-fixed ui-top-0 ui-z-10 ui-justify-between ui-items-center ui-w-full ui-py-4 ui-px-8 lg:ui-px-16 ui-transition ui-duration-300 ui-ease-in-out ui-text-black",
        isScrolled ? "ui-bg-white ui-shadow-lg ui-text-black" : "ui-text-white"
      )}
    >
      <img
        onClick={() => push("/")}
        src={isScrolled ? "/images/LogoBlue.png" : "/images/LogoWhite.png"}
        className="ui-cursor-pointer ui-w-auto ui-h-[30px] md:ui-h-[40px]"
        alt="myungmoon"
      />
      <div className="ui-flex ui-justify-end ui-items-center ui-gap-5 sm:ui-gap-7">
        <nav className="ui-flex ui-items-center ui-gap-5 lg:ui-gap-7">
          <div className="ui-hidden sm:ui-flex ui-gap-3 lg:ui-gap-5">
            {menus.map((menu) => (
              <button
                onClick={() => push(menu.path)}
                key={menu.path}
                className={cn(
                  "ui-font-semibold lg:ui-text-lg ui-pb-1",
                  asPath.startsWith(menu.key) &&
                    "ui-text-blue-500  ui-border-b-2 ui-border-blue-500"
                )}
              >
                {menu.label}
              </button>
            ))}
          </div>
        </nav>
        <div className="ui-pb-1">
          <Icon
            name="Hamburger"
            cursor="ui-cursor-pointer"
            size="md"
            strokeColor={isScrolled ? "black" : "white"}
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
                  className="hover:ui-blue-500 ui-text-black ui-w-full ui-text-center ui-text-xl"
                  onClick={() => push(menu.path)}
                  key={menu.path}
                >
                  {menu.label}
                </button>
              ))}
            </div>
            <img
              src="/images/LogoBlue.png"
              alt="myungmoon"
              width={100}
              height={50}
            />
          </Drawer>
        </div>
      </div>
    </header>
  );
};
