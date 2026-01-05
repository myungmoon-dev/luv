import { useState } from "react";
import { cn } from "../utils/twMerge";
import CaretDown from "./caretDown";
import { menus } from "./config";

interface IHeaderProps {
  push: (url: string) => void;
  asPath: string;
}

export const Header = ({ push, asPath }: IHeaderProps) => {
  const [openNav, setOpenNav] = useState(false);

  const getActivePath = (path: string) => {
    if (path === "/") {
      if (asPath === "/") return true;
      return false;
    } else {
      return asPath.startsWith(path);
    }
  };

  return (
    <div>
      <div className="ui-items-center ui-flex ui-h-[70px] ui-pl-[30px] sm:ui-pl-[36px] md:ui-pl-[52px] lg:ui-pl-[84px] ui-justify-between ui-pr-[100px]">
        <img
          onClick={() => push("/")}
          src="/images/logo-2026.png"
          className="ui-cursor-pointer ui-w-[115px] ui-h-[35px]"
          alt="myungmoon"
        />
        <nav className="ui-gap-[21px] ui-hidden lg:ui-flex">
          {menus.slice(1).map((menu) => (
            <div
              onClick={() => push(menu.path)}
              key={menu.label}
              className="ui-text-lg ui-font-bold ui-text-[#222222] ui-cursor-pointer"
            >
              {menu.label}
            </div>
          ))}
        </nav>
      </div>
      <div className="ui-block lg:ui-hidden ui-relative">
        <div className="ui-flex ui-border-y ui-border-[#E6E6E6]">
          <div className="ui-overflow-scroll ui-w-full [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:ui-hidden">
            <nav className="ui-flex ui-h-[49px] sm:ui-h-[70px] ui-min-w-max">
              {menus.map((menu) => (
                <div
                  onClick={() => push(menu.path)}
                  className={cn(
                    "ui-flex ui-items-center ui-px-[17px] ui-cursor-pointer ui-font-medium sm:ui-text-xl md:ui-px-[39.5px] md:ui-font-bold",
                    getActivePath(menu.key)
                      ? "ui-text-[#001F54] ui-border-b-2 ui-border-[#001F54] ui-pt-[2px]"
                      : "ui-text-[#777777]",
                  )}
                  key={menu.label}
                >
                  {menu.label}
                </div>
              ))}
            </nav>
          </div>
          <div
            onClick={() => setOpenNav((prev) => !prev)}
            className={cn(
              "ui-min-w-[49px] sm:ui-min-w-[70px] ui-flex ui-items-center ui-justify-center ui-cursor-pointer ui-shadow-[-2px_2px_4px_0px_rgba(0,0,0,0.25)]",
            )}
          >
            <CaretDown className={cn(openNav && "ui-rotate-180")} />
          </div>
        </div>
        {openNav && (
          <div className="ui-grid ui-grid-cols-3 ui-absolute ui-w-full ui-z-10">
            {menus.slice(1).map((menu) => (
              <div
                onClick={() => push(menu.path)}
                className="ui-font-medium ui-text-[#222222] ui-bg-white md:ui-h-[58px] sm:ui-h-[63px] ui-h-[55px] ui-border-r-[0.3px] ui-border-b-[0.3px] ui-border-[#858585] ui-flex ui-justify-center ui-items-center"
                key={menu.label}
              >
                {menu.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
