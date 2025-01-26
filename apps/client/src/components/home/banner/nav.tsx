import React, { Dispatch, SetStateAction } from "react";
import { HomeBannerEnum } from ".";
import dayjs from "dayjs";
import { cn } from "ui";
import { useGetLive } from "@/query/youtube";

interface IHomeBannerNavProps {
  currentView: HomeBannerEnum;
  setCurrentView: Dispatch<SetStateAction<HomeBannerEnum>>;
}

const HomeBannerNav = ({ setCurrentView, currentView }: IHomeBannerNavProps) => {
  const { data } = useGetLive();

  const navList: { label: string; path: HomeBannerEnum }[] = [
    { label: "보라! 내가 반드시\n길을 내리라", path: HomeBannerEnum.Watchword },
    {
      label: `${dayjs(data?.updatedAt).format("YYYY.MM.DD")}\n<예배 생중계> 바로가기`,
      path: HomeBannerEnum.Live,
    },
    { label: "온세대가 함께하는\n명문교회 <181일 성경통독>", path: HomeBannerEnum.Bible },
    { label: "전성도가 함께하는\n맛있는 가정예배", path: HomeBannerEnum.HomeWorship },
  ];

  return (
    <div className="grid w-full gap-10 px-5 md:grid-cols-2 md:px-20 lg:px-40 xl:grid-cols-4 xl:px-60 2xl:px-80">
      {navList.map((nav) => (
        <div
          onClick={() => setCurrentView(nav.path)}
          className={cn("flex cursor-pointer flex-col gap-5 text-white", currentView === nav.path && "")} // TODO: 색상 추가
          key={nav.label}
        >
          <p className="whitespace-pre font-bold md:text-xl">{nav.label}</p>
          <div className="h-[2px] w-full bg-white" />
        </div>
      ))}
    </div>
  );
};

export default HomeBannerNav;
