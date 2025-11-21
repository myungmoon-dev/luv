import CustomImage from "@/components/customImage";
import Image from "next/image";
import React from "react";
import { Icon } from "ui";

interface IMissionary {
  location: string;
  names: string[];
  images: string[];
  color: string;
}

const MISSIONARY_PROFILES: IMissionary[] = [
  {
    location: "방글라데시",
    names: ["김종란", "이강선"],
    images: ["kim_jl", "lee_gs"],
    color: '#9B7811'
  },
  {
    location: "불가리아",
    names: ["김주신", "정다정"],
    images: ["kim_js", "jung_dj"],
    color: '#119B51'
  },
  {
    location: "영국",
    names: ["양성호", "김성경"],
    images: ["yang_sh", "kim_sk"],
    color: '#9B111E'
  },
  {
    location: "우간다",
    names: ["제종완", "신숙화"],
    images: ["je_jw", "shin_sh"],
    color: '#999B11'
  },
  {
    location: "인도/태국",
    names: ["이승현", "윤선휘"],
    images: ["lee_sh", "yoon_sh"],
    color: '#115B9B'
  },
];

const LeadershipMissionary = () => {
  return (
    <div className="lg:pb-20">
      <Image src="/images/about/world-map.png" alt="map" width={1000} height={1000} className="w-full h-auto object-cover" />
      <div className="mb-5 h-[8px] w-full bg-[#E6E6E6]" />
      <div className="flex flex-col gap-10 px-4 sm:gap-12 md:gap-20 lg:px-0">
        {MISSIONARY_PROFILES.map((missionary) => (
          <div className="flex flex-col gap-4 md:gap-6" key={missionary.location}>
            <div className="flex items-center justify-between px-3 lg:pl-10">
              <div className="flex items-center gap-5">
                <Icon name="Marker" iconClassName="size-[22px] sm:size-[40px] md:size-[54px]" backgroundColor={missionary.color} cursor="ui-cursor-pointer" />
                <p className="text-xl font-bold text-[#001F54] sm:text-2xl">{missionary.location}</p>
              </div>
              <Icon name="CaretRight" iconClassName="size-[13px] md:size-[15px] lg:size-[18px] xl:size-[21px]" strokeColor="#555555" cursor="ui-cursor-pointer" />
            </div>
            <hr className="border-[#747474]" />
            <div className="flex items-center gap-5 px-3 pb-2.5 md:gap-14 lg:pl-10">
              <div className="flex gap-2 md:gap-9">
                {missionary.images.map((image) => (
                  <CustomImage
                    key={image}
                    src={image ? `/images/missionary/${image}.png` : "/images/profile.png"}
                    alt={missionary.location}
                    className="h-[80px] w-[80px] sm:h-[95px] sm:w-[95px] md:h-[110px] md:w-[110px]"
                    imgClass="rounded-full object-[50%_0%]"
                  />
                ))}
              </div>
              <p className="font-medium text-[#464646] sm:text-lg md:text-xl">{`${missionary.names.join(", ")} 선교사`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipMissionary;
