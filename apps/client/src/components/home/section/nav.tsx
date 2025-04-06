import useResponsive from "@/hooks/useResponsive";
import { useRouter } from "next/router";
import { Icon, IconNameType } from "ui";

const NAV_LIST: {
  title: string;
  path: string;
  icon: IconNameType;
}[] = [
  {
    title: "교회소개",
    path: "/about",
    icon: "AboutChurch",
  },
  {
    title: "주보",
    path: "/news/bulletins",
    icon: "Bulletin",
  },
  {
    title: "예배안내",
    path: "/about/services",
    icon: "Info",
  },
  {
    title: "다음세대",
    path: "/education",
    icon: "NextGeneration",
  },
];

const ICON_SIZE_NUMBER = {
  XS: 34,
  SM: 45,
  MD: 45,
  LG: 52,
};

const NavSection = () => {
  const { push } = useRouter();
  const { isSm, isMd, isLg } = useResponsive();

  const getIconSizeNumber = () => {
    if (isLg) return ICON_SIZE_NUMBER.LG;
    if (isMd) return ICON_SIZE_NUMBER.MD;
    if (isSm) return ICON_SIZE_NUMBER.SM;
    return ICON_SIZE_NUMBER.XS;
  };

  return (
    <div className="flex justify-center gap-[11px] pt-[32px] sm:gap-[16px] sm:pt-[38px] md:gap-[12px] md:pt-[50px] lg:gap-[120px] lg:pt-[146px]">
      {NAV_LIST.map((nav) => (
        <button
          onClick={() => push(nav.path)}
          className="flex flex-col items-center gap-1 sm:gap-[3px] sm:px-[12px] sm:pb-[5px] sm:pt-[2px] md:gap-2 md:px-[45px] md:pb-[2px] md:pt-0 lg:gap-5 lg:p-0"
        >
          <div className="flex size-[78px] items-center justify-center rounded-full bg-[#F5F5F5] sm:size-[89px] lg:size-[112px]">
            <Icon name={nav.icon} cursor="ui-cursor-pointer" sizeNumber={getIconSizeNumber()} />
          </div>
          <p className="font-medium text-[#222222] sm:text-[18px] md:font-bold lg:text-[24px] lg:font-medium">
            {nav.title}
          </p>
        </button>
      ))}
    </div>
  );
};

export default NavSection;
