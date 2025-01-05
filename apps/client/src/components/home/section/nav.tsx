import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const NAV_LIST: {
  titleEn: string;
  titleKr: string;
  description: string;
  path: string;
}[] = [
  {
    titleKr: "교회 소개",
    titleEn: "About Myungmoon",
    description: "지역과 민족을 품고\n세계와 열방을 향해 나아가는\n명문교회를 소개합니다.",
    path: "/about",
  },
  {
    titleKr: "예배 안내",
    titleEn: "Worship Information",
    description: "평일예배와 주일예배의\n시간과 장소를\n안내해드립니다.",
    path: "/about/services",
  },
  {
    titleKr: "주보",
    titleEn: "Bulletin",
    description: "매주/매월 진행되는\n사역과 소식을\n안내해드립니다.",
    path: "/news/bulletins",
  },
  {
    titleKr: "다음 세대",
    titleEn: "Next Generation",
    description: "하나님을 영화롭게 하며\n하나님을 깊이 만나는\n다음세대를 소개합니다.",
    path: "/education",
  },
];

const NavSection = () => {
  const { push } = useRouter();

  return (
    <div className="relative">
      <div className="absolute left-0 top-0 z-[1] h-full w-full bg-black/40" />
      <div className="relative h-[500px] w-full md:h-[800px]">
        <Image src="/images/home/sectionChristmas.jpg" alt="" fill={true} className="object-cover" />
      </div>
      <div className="absolute left-0 top-0 z-[1] flex h-full w-full flex-col gap-12 px-8 py-16 md:justify-center md:gap-32 xl:gap-40">
        <div className="flex flex-col gap-3 text-white sm:gap-8">
          <div data-aos="fade-up" className="h-1 w-1/2 bg-white" />
          <div
            data-aos="fade-up"
            className="flex w-full flex-col font-SCoreDream font-bold sm:gap-1 sm:text-xl md:gap-3 md:text-4xl lg:text-5xl xl:text-6xl"
          >
            <p>명문교회 홈페이지를 방문해주신 여러분을</p>
            <p>주님의 이름으로 환영하고 축복합니다.</p>
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-10 md:grid-cols-4 md:gap-3">
          {NAV_LIST.map((nav, idx) => (
            <div
              onClick={() => push(nav.path)}
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay={idx * 50}
              data-aos-duration="400"
              key={nav.path}
              className="flex h-full w-full cursor-pointer items-center justify-center text-white hover:text-[#001f54] sm:gap-16"
            >
              <div className="flex flex-col items-center justify-center gap-3 md:gap-5">
                <div className="flex flex-col items-center justify-center sm:gap-1">
                  <p className="font-SCoreDream transition-colors sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                    {nav.titleKr}
                  </p>
                  <p className="font-Cormorant text-xs md:text-lg lg:text-xl">{nav.titleEn}</p>
                </div>
                <p className="whitespace-pre text-center text-xs md:text-base lg:text-xl xl:text-2xl">
                  {nav.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavSection;
