import Image from "next/image";
import React, { useState } from "react";
import { cn } from "ui";
import HomeBannerNav from "./nav";
import HomeBannerWatchword from "./watchword";
import HomeBannerLive from "./live";
import HomeBannerBible from "./bible";

export enum HomeBannerEnum {
  Watchword,
  Live,
  Bible,
}

const HomeBanner = () => {
  const [currentView, setCurrentView] = useState(HomeBannerEnum.Watchword);

  const getBannerImage = () => {
    switch (currentView) {
      case HomeBannerEnum.Watchword:
        return "/images/home/banner1.png";
      case HomeBannerEnum.Live:
        return "/images/home/banner3.jpeg";
      case HomeBannerEnum.Bible:
        return "/images/home/banner2.jpeg";
      default:
        return "/images/home/banner1.png";
    }
  };

  const getBannerText = () => {
    switch (currentView) {
      case HomeBannerEnum.Watchword:
        return <HomeBannerWatchword />;
      case HomeBannerEnum.Live:
        return <HomeBannerLive />;
      case HomeBannerEnum.Bible:
        return <HomeBannerBible />;
      default:
        return <HomeBannerWatchword />;
    }
  };

  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <div className="relative flex w-full flex-col items-center justify-center gap-10">
        <div className={cn("h-[800px] w-full brightness-[.8] md:h-[600px]")}>
          <div className="relative flex h-full">
            <Image src={getBannerImage()} alt="banner" fill={true} className="object-cover" />
          </div>
        </div>
        <div className="absolute flex w-full flex-col gap-24">
          {getBannerText()}
          <HomeBannerNav setCurrentView={setCurrentView} />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
