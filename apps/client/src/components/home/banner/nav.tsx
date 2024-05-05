import React, { Dispatch, SetStateAction } from "react";
import { HomeBannerEnum } from ".";
import { useGetYoutubeList } from "@/query/youtube";
import dayjs from "dayjs";

interface IHomeBannerNavProps {
  setCurrentView: Dispatch<SetStateAction<HomeBannerEnum>>;
}

const HomeBannerNav = ({ setCurrentView }: IHomeBannerNavProps) => {
  const { data } = useGetYoutubeList({ videoType: "live" });
  const liveVideo = data?.[0];

  const navList: { label: string; path: HomeBannerEnum }[] = [
    { label: "교회여 일어나!\n세상으로 흘러가라!", path: HomeBannerEnum.Watchword },
    {
      label: `${dayjs(liveVideo?.date).format("YYYY.MM.DD")} ${liveVideo?.title || ""}\n<예배 생중계> 바로가기`,
      path: HomeBannerEnum.Live,
    },
    { label: "온세대가 함께하는\n명문교회 <181일 성경통독>", path: HomeBannerEnum.Bible },
  ];

  return (
    <div className="grid w-full gap-10 px-5 md:grid-cols-3 md:px-20 lg:px-40 xl:px-60 2xl:px-80">
      {navList.map((nav) => (
        <div onClick={() => setCurrentView(nav.path)} className="flex cursor-pointer flex-col gap-5" key={nav.label}>
          <p className="font-SCoreDream whitespace-pre text-xl font-bold text-white">{nav.label}</p>
          <div className="h-1 w-full bg-white" />
        </div>
      ))}
    </div>
  );
};

export default HomeBannerNav;
