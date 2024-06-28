import Image from "next/image";
import { useState } from "react";
import { cn } from "ui";

import HomeBannerBible from "./bible";
import HomeBannerHomeWorship from "./homeworship";
import HomeBannerLive from "./live";
import HomeBannerNav from "./nav";
import HomeBannerWatchword from "./watchword";

export enum HomeBannerEnum {
  Watchword,
  Live,
  Bible,
  HomeWorship,
}

interface HomeBannerProps {
  blurDataURLs: Record<HomeBannerEnum, string>;
}

const HomeBanner = ({ blurDataURLs }: HomeBannerProps) => {
  const [currentView, setCurrentView] = useState(HomeBannerEnum.Watchword);

  const getBannerImage = () => {
    switch (currentView) {
      case HomeBannerEnum.Watchword:
        return "/images/home/banner1.png";
      case HomeBannerEnum.Live:
        return "/images/home/banner3.jpeg";
      case HomeBannerEnum.Bible:
        return "/images/home/banner2.jpeg";
      case HomeBannerEnum.HomeWorship:
        return "/images/home/homeworship.png";
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
      case HomeBannerEnum.HomeWorship:
        return <HomeBannerHomeWorship />;
      default:
        return <HomeBannerWatchword />;
    }
  };

  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <div className="relative flex w-full flex-col items-center justify-center gap-10">
        <div className="h-[800px] w-full brightness-[.8] md:h-[600px]">
          <div className="relative flex h-full">
            <Image
              src={getBannerImage()}
              alt="banner"
              fill={true}
              className={cn(
                "object-cover",
                currentView === HomeBannerEnum.HomeWorship && "object-[50%] brightness-75 md:object-[100%_15%]",
              )}
              priority
              placeholder="blur"
              blurDataURL={blurDataURLs[currentView]}
            />
          </div>
        </div>
        <div className="absolute flex w-full flex-col gap-24">
          {getBannerText()}
          <HomeBannerNav currentView={currentView} setCurrentView={setCurrentView} />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
