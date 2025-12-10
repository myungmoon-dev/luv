import Link from "next/link";
import React from "react";
import { Icon } from "ui";

const NewsNavigation = () => {
  return (
    <div className="flex justify-center gap-8 sm:gap-16 md:gap-24">
      <Link href="/news/bulletins" className="flex flex-col items-center lg:gap-5">
        <div className="flex size-[78px] items-center justify-center rounded-full bg-[#F5F5F5] sm:size-[90px] lg:size-[112px]">
          <Icon
            name="Vision"
            iconClassName="size-[34px] md:size-[36px] lg:size-[45px] xl:size-[52px]"
            cursor="ui-cursor-pointer"
          />
        </div>
        <p className="font-medium text-[#1B1B1B] sm:text-lg lg:text-xl">주보</p>
      </Link>
      <Link href="/news/mission-news" className="flex flex-col items-center lg:gap-5">
        <div className="flex size-[78px] items-center justify-center rounded-full bg-[#F5F5F5] sm:size-[90px] lg:size-[112px]">
          <Icon
            name="Leadership"
            iconClassName="size-[34px] md:size-[36px] lg:size-[45px] xl:size-[52px]"
            cursor="ui-cursor-pointer"
          />
        </div>
        <p className="font-medium text-[#1B1B1B] sm:text-lg lg:text-xl">선교지 소식</p>
      </Link>
      <Link href="/news/books" className="flex flex-col items-center lg:gap-5">
        <div className="flex size-[78px] items-center justify-center rounded-full bg-[#F5F5F5] sm:size-[90px] lg:size-[112px]">
          <Icon
            name="Information"
            iconClassName="size-[34px] md:size-[36px] lg:size-[45px] xl:size-[52px]"
            cursor="ui-cursor-pointer"
          />
        </div>
        <p className="font-medium text-[#1B1B1B] sm:text-lg lg:text-xl">추천 도서</p>
      </Link>
    </div>
  );
};

export default NewsNavigation;
