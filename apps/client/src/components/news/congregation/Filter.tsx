import useCongregationNewsStore from "@/store/News/congregation";
import { CongregationNewsType } from "@/types/news/common";
import { cn } from "ui";
import { CONGREGATION_NEWS_TYPE_MAP } from "./config";

interface IMenu {
  label: (typeof CONGREGATION_NEWS_TYPE_MAP)[CongregationNewsType | "all"];
  value: CongregationNewsType | "all";
}

const MENU_LIST: IMenu[] = [
  { label: CONGREGATION_NEWS_TYPE_MAP.all, value: "all" },
  { label: CONGREGATION_NEWS_TYPE_MAP.marriage, value: "marriage" },
  { label: CONGREGATION_NEWS_TYPE_MAP.birth, value: "birth" },
  { label: CONGREGATION_NEWS_TYPE_MAP.funeral, value: "funeral" },
  { label: CONGREGATION_NEWS_TYPE_MAP.opening, value: "opening" },
  { label: CONGREGATION_NEWS_TYPE_MAP.hospitalization, value: "hospitalization" },
  { label: CONGREGATION_NEWS_TYPE_MAP.sundayManna, value: "sundayManna" },
  { label: CONGREGATION_NEWS_TYPE_MAP.iceCream, value: "iceCream" },
];

const CongregationNewsFilter = () => {
  const [selectedMenu, setSelectedMenu] = useCongregationNewsStore((state) => [
    state.selectedMenu,
    state.setSelectedMenu,
  ]);

  const handleClickMenu = (value: CongregationNewsType | "all") => {
    setSelectedMenu(value);
  };

  return (
    <div className="flex gap-2.5 overflow-x-scroll px-4 sm:px-7 md:gap-5 md:px-20 lg:justify-center">
      {MENU_LIST.map((menu) => (
        <div
          onClick={() => handleClickMenu(menu.value)}
          key={menu.value}
          className="flex cursor-pointer items-center justify-center border border-[#ECECEC] p-2 sm:px-4 sm:py-3"
        >
          <p
            className={cn(
              "whitespace-nowrap text-xs font-medium sm:text-base md:text-xl",
              selectedMenu === menu.value ? "text-[#001F54]" : "text-[#666666]",
            )}
          >
            {menu.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CongregationNewsFilter;
