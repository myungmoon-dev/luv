import Image from "next/image";

import CaretLeftIcon from "./caretLeft";
import CaretRightIcon from "./caretRight";
import { useGetLive } from "@/query/youtube";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import HomeBannerLgCard from "./card/lg";
import HomeBannerSmCard from "./card/sm";

enum HomeBannerEnum {
  Live,
  Bible,
  HomeWorship,
}

const HomeBanner = () => {
  const [currentBanner, setCurrentBanner] = useState<HomeBannerEnum>(HomeBannerEnum.Live);

  const { push } = useRouter();

  const { data } = useGetLive();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => {
        if (prev === HomeBannerEnum.Live) return HomeBannerEnum.Bible;
        if (prev === HomeBannerEnum.Bible) return HomeBannerEnum.HomeWorship;
        return HomeBannerEnum.Live;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleOpenLive = () => {
    open(data?.url);
  };

  const handleClickBible = () => {
    push("/discipleship/main/bible");
  };

  const handleClickHomeworship = () => {
    push("/discipleship/homeworship");
  };

  const handleClickPrev = () => {
    if (currentBanner === HomeBannerEnum.Live) return setCurrentBanner(HomeBannerEnum.HomeWorship);
    if (currentBanner === HomeBannerEnum.Bible) return setCurrentBanner(HomeBannerEnum.Live);
    setCurrentBanner(HomeBannerEnum.Bible);
  };

  const handleClickNext = () => {
    if (currentBanner === HomeBannerEnum.Live) return setCurrentBanner(HomeBannerEnum.Bible);
    if (currentBanner === HomeBannerEnum.Bible) return setCurrentBanner(HomeBannerEnum.HomeWorship);
    setCurrentBanner(HomeBannerEnum.Live);
  };

  return (
    <div className="relative">
      <div className="relative h-[474.23px] w-auto sm:h-[398px] md:h-[368px] lg:h-[676px]">
        <Image src="/images/home/banner-2025.jpg" alt="banner" fill={true} objectFit="cover" />
      </div>
      <div className="absolute left-[35px] top-[195px] flex flex-col gap-2.5 text-white sm:left-[65px] sm:top-[144px] sm:gap-1.5 md:top-[173px] md:gap-1 lg:left-[182px] lg:top-[344px] lg:gap-2.5">
        <p className="text-[26px] font-black leading-[26px] sm:text-[27px] sm:leading-[28px] md:text-[29px] md:leading-[30px] lg:text-[42px] lg:font-bold lg:leading-[50px]">
          보라
          <br />
          내가 반드시 길을 내리라
        </p>
        <p className="text-[18px] font-bold sm:text-[20px] lg:text-[24px]">이사야 43:19</p>
      </div>
      <div className="absolute bottom-0 flex w-full items-center bg-[#F6F6F6] bg-opacity-[30%] py-[18px] sm:py-[26px] md:static lg:hidden">
        <div
          className="flex min-h-[35px] min-w-[35px] cursor-pointer items-center justify-center"
          onClick={handleClickPrev}
        >
          <CaretLeftIcon />
        </div>
        {currentBanner === HomeBannerEnum.Live && (
          <HomeBannerSmCard description="명문교회 예배 생방송" handleClick={handleOpenLive} image="onair" />
        )}
        {currentBanner === HomeBannerEnum.Bible && (
          <HomeBannerSmCard
            description={"온세대가 함께하는\n명문교회 181일 성경통독"}
            handleClick={handleClickBible}
            image="bible"
          />
        )}
        {currentBanner === HomeBannerEnum.HomeWorship && (
          <HomeBannerSmCard
            description={"전 성도가 함께하는\n맛있는 가정예배"}
            handleClick={handleClickHomeworship}
            image="hand"
          />
        )}
        <div
          className="flex min-h-[35px] min-w-[35px] cursor-pointer items-center justify-center"
          onClick={handleClickNext}
        >
          <CaretRightIcon />
        </div>
      </div>
      <div className="absolute -bottom-[66px] left-1/2 z-10 hidden -translate-x-1/2 gap-5 bg-[#F6F6F6] bg-opacity-[30%] p-5 lg:flex">
        <HomeBannerLgCard
          description={"온세대가 함께하는\n명문교회 181일 성경통독"}
          handleClick={handleClickBible}
          image="bible"
        />
        <div className="h-[92px] w-[1px] bg-white" />
        <HomeBannerLgCard description="명문교회 예배 생방송" handleClick={handleOpenLive} image="onair" />
        <div className="h-[92px] w-[1px] bg-white" />
        <HomeBannerLgCard
          description={"전 성도가 함께하는\n맛있는 가정예배"}
          handleClick={handleClickHomeworship}
          image="hand"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
