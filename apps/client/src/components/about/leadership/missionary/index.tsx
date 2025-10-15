import CustomImage from "@/components/customImage";
import React from "react";

interface IMissionary {
  location: string;
  names: string[];
  images: string[];
}

const MISSIONARY_PROFILES: IMissionary[] = [
  {
    location: "방글라데시",
    names: ["김종란", "이강선"],
    images: ["kim_jl", "lee_gs"],
  },
  {
    location: "불가리아",
    names: ["김주신", "정다정"],
    images: ["kim_js", "jung_dj"],
  },
  {
    location: "영국",
    names: ["양성호", "김성경"],
    images: ["yang_sh", "kim_sk"],
  },
  {
    location: "우간다",
    names: ["제종완", "신숙화"],
    images: ["je_jw", "shin_sh"],
  },
  {
    location: "인도/태국",
    names: ["이승현", "윤선휘"],
    images: ["lee_sh", "yoon_sh"],
  },
];

const LeadershipMissionary = () => {
  return (
    <div>
      <div className="bg-slate-400">세계지도 이미지</div>
      <div className="mb-5 h-[8px] w-full bg-[#E6E6E6]" />
      <div className="flex flex-col gap-10 px-4">
        {MISSIONARY_PROFILES.map((missionary) => (
          <div className="flex flex-col gap-4" key={missionary.location}>
            <div className="flex items-center justify-between px-3">
              <div className="flex items-center gap-5">
                <span>아이콘</span>
                <p className="text-xl font-bold text-[#001F54]">{missionary.location}</p>
              </div>
              <span>우측 화살표 아이콘</span>
            </div>
            <hr className="border-[#747474]" />
            <div className="flex items-center gap-5 px-3 pb-2.5">
              <div className="flex gap-2">
                {missionary.images.map((image) => (
                  <CustomImage
                    key={image}
                    src={image ? `/images/missionary/${image}.png` : "/images/profile.png"}
                    alt={missionary.location}
                    className="h-[80px] w-[80px]"
                    imgClass="rounded-full object-[50%_0%]"
                  />
                ))}
              </div>
              <p className="font-medium text-[#464646]">{`${missionary.names.join(", ")} 선교사`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipMissionary;
