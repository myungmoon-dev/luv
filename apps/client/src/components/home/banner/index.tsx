import Image from "next/image";

import CaretLeftIcon from "./caretLeft";
import CaretRightIcon from "./caretRight";

export enum HomeBannerEnum {
  Watchword,
  Live,
  Bible,
  HomeWorship,
}

const HomeBanner = () => {
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
        <div className="flex min-h-[35px] min-w-[35px] cursor-pointer items-center justify-center">
          <CaretLeftIcon />
        </div>
        <div className="flex w-full cursor-pointer">
          <div className="relative h-[70px] w-[70px]">
            <Image src="/images/profile.png" alt="image" fill={true} objectFit="contain" />
          </div>
          <div className="flex h-[70px] w-full items-center bg-white pl-[41px] text-[17px] font-bold text-[#222222] sm:pl-[38px] sm:text-[18px] md:pl-[33px]">
            명문교회 예배 생방송
          </div>
        </div>
        <div className="flex min-h-[35px] min-w-[35px] cursor-pointer items-center justify-center">
          <CaretRightIcon />
        </div>
      </div>
      <div className="absolute -bottom-[66px] left-1/2 z-10 hidden -translate-x-1/2 gap-5 bg-[#F6F6F6] bg-opacity-[30%] p-5 lg:flex">
        <div className="flex w-full cursor-pointer">
          <div className="relative h-[92px] w-[92px]">
            <Image src="/images/profile.png" alt="image" fill={true} objectFit="contain" />
          </div>
          <div className="flex h-[92px] w-[231px] items-center justify-center bg-white text-[18px] font-bold text-[#222222]">
            명문교회 예배 생방송
          </div>
        </div>
        <div className="h-[92px] w-[1px] bg-white" />
        <div className="flex w-full cursor-pointer">
          <div className="relative h-[92px] w-[92px]">
            <Image src="/images/profile.png" alt="image" fill={true} objectFit="contain" />
          </div>
          <div className="flex h-[92px] w-[231px] items-center justify-center bg-white text-[18px] font-bold text-[#222222]">
            명문교회 예배 생방송
          </div>
        </div>
        <div className="h-[92px] w-[1px] bg-white" />
        <div className="flex w-full cursor-pointer">
          <div className="relative h-[92px] w-[92px]">
            <Image src="/images/profile.png" alt="image" fill={true} objectFit="contain" />
          </div>
          <div className="flex h-[92px] w-[231px] items-center justify-center bg-white text-[18px] font-bold text-[#222222]">
            명문교회 예배 생방송
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
