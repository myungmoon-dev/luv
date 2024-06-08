import { useEffect, useState } from "react";
import { Drawer, Icon, cn } from "..";
import { throttle } from "lodash";

interface IDetailMenu {
  label: string;
  path: string;
  key: string;
}
interface IHeaderProps {
  push: (url: string) => void;
  asPath: string;
  detailMenus: IDetailMenu[];
}

export const Header = ({ push, asPath, detailMenus }: IHeaderProps) => {
  const menus: IDetailMenu[] = [
    { label: "교회소개", path: "/about", key: "/about" },
    { label: "설교•찬양", path: "/sermons/sunday-3", key: "/sermons" },
    { label: "다음세대", path: "/education", key: "/education" },
    { label: "주보•소식", path: "/news/bulletins", key: "/news" },
    {
      label: "교회훈련",
      path: "/discipleship/main/bible",
      key: "/discipleship",
    },
    {
      label: "가정예배",
      path: "/homeworship",
      key: "/homeworship",
    },
  ];
  const favMenus: IDetailMenu[] = [
    {
      label: "맛있는 가정예배",
      path: "/homeworship",
      key: "/education",
    },
    {
      label: "주보",
      path: "/news/bulletins",
      key: "/news",
    },
    {
      label: "성경통독",
      path: "/discipleship/main/bible",
      key: "/discipleship",
    },
  ];

  const getDetailMenu = () => {
    switch (currentDrawerMenu) {
      case "/about":
        return detailMenus.filter((detailMenu) => detailMenu.path.startsWith("/about"));
      case "/sermons":
        return detailMenus.filter((detailMenu) => detailMenu.path.startsWith("/sermons"));
      case "/education":
        return detailMenus.filter((detailMenu) => detailMenu.path.startsWith("/education"));
      case "/news":
        return detailMenus.filter((detailMenu) => detailMenu.path.startsWith("/news"));
      case "/discipleship":
        return detailMenus.filter((detailMenu) => detailMenu.path.startsWith("/discipleship"));
      case "/homeworship":
        return detailMenus.filter((detailMenu) => detailMenu.path.startsWith("/homeworship"));
      default:
        return detailMenus.filter((detailMenu) => detailMenu.path.startsWith("/about"));
    }
  };

  const [isOpenDrawer, setOpenDrawer] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [currentDrawerMenu, setCurrentDrawerMenu] = useState<string>("/about");

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
                  "ui-font-semibold lg:ui-text-lg ui-pb-[0.5px]",
                  asPath.startsWith(menu.path) && "ui-text-blue-500 ui-border-b-2 ui-border-blue-500"
                )}
              >
                {menu.label}
              </button>
            ))}
          </div>
        </nav>
        <div className="ui-pb-[0.5px]">
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
            className="ui-flex ui-flex-col ui-justify-between ui-items-center ui-h-full"
          >
            <div className="ui-w-full ui-flex ui-flex-col ui-items-center ui-justify-center ui-bg-blue-600 ui-h-2/5 ui-p-3 ui-gap-5 md:ui-px-5">
              <div className="ui-flex ui-justify-between ui-w-full ui-items-start ui-pb-2 ui-border-b-[1px] ui-border-white ui-text-white ui-px-5 md:ui-pb-5 xl:ui-px-10">
                <div className="ui-flex ui-flex-col ui-w-full md:ui-text-xl lg:ui-text-2xl xl:ui-text-3xl">
                  <p className="ui-font-SCoreDream">교회여!</p>
                  <p className="ui-font-SCoreDream">일어나 세상으로 흘러가라!</p>
                </div>
                <Icon
                  name="Close"
                  cursor="ui-cursor-pointer"
                  size="md"
                  strokeColor="white"
                  backgroundColor="white"
                  onClick={() => setOpenDrawer(false)}
                />
              </div>
              <div className="ui-grid ui-grid-cols-2 gap-3 lg:ui-grid-cols-4">
                <div className="ui-text-sm ui-p-2 md:ui-p-3 ui-border-[1px] lg:ui-py-2 ui-border-white ui-rounded-3xl ui-bg-white ui-text-blue-600 ui-text-center ui-font-semibold">
                  자주찾는 메뉴
                </div>
                {favMenus.map((favMenu) => (
                  <button
                    key={favMenu.key}
                    onClick={() => push(favMenu.path)}
                    className="ui-text-sm ui-p-2 md:ui-p-3 ui-border-[1px] lg:ui-py-2 ui-border-white ui-rounded-3xl ui-font-semibold ui-text-white hover:ui-text-blue-600 hover:ui-bg-white"
                  >
                    {favMenu.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="ui-grid ui-grid-cols-5 ui-w-full ui-text-black ui-h-full">
              <div className="ui-bg-gray-200 ui-col-span-2 ui-flex ui-flex-col ui-items-center ui-pt-10 ui-gap-5 ui-text-lg xl:ui-text-xl">
                {menus.map((menu) => (
                  <button
                    onClick={() => {
                      setCurrentDrawerMenu(menu.key);
                    }}
                    key={menu.key}
                    className={cn(
                      "ui-font-semibold",
                      currentDrawerMenu === menu.key ? "ui-text-blue-600 ui-underline" : "ui-text-black"
                    )}
                  >
                    {menu.label}
                  </button>
                ))}
              </div>
              <div className="ui-flex ui-flex-col ui-col-span-3 ui-px-4 ui-pt-10 ui-gap-5 md:ui-px-6 xl:ui-px-10">
                <p className="ui-font-SCoreDream ui-pb-2 ui-border-b-[1px] ui-border-gray-200 ui-text-lg xl:ui-text-3xl">
                  {menus.find((menu) => menu.key === currentDrawerMenu && menu.label)?.label}
                </p>
                <div className="ui-flex ui-flex-col ui-gap-3 ui-items-start">
                  {getDetailMenu().map((menu) => (
                    <button
                      key={menu.path}
                      className="ui-text-gray-400 hover:ui-text-blue-600 xl:ui-text-xl"
                      onClick={() => {
                        push(menu.path);
                      }}
                    >
                      {menu.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </header>
  );
};
