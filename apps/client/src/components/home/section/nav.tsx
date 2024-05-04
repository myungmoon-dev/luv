import React from "react";
import Image from "next/image";
import CustomImage from "@/components/customImage";
import { useRouter } from "next/router";

const NavSection = () => {
  const { push } = useRouter();

  const navList: {
    titleEn: string;
    titleKr: string;
    description: string;
    path: string;
    img: string;
    imgClass: string;
  }[] = [
    {
      titleKr: "교회 소개",
      titleEn: "Worship information",
      description: "지역과 민족을 품고\n세계와 열방을 향해 나아가는\n명문교회를 소개합니다.",
      path: "/",
      img: "/images/sermon/banner2.jpg",
      imgClass: "brightness-75 object-[20%_40%] rounded-xl",
    },
    {
      titleKr: "예배 안내",
      titleEn: "Worship information",
      description: "평일예배와 주일예배의\n시간과 장소를\n안내해드립니다.",
      path: "/about/services",
      img: "/images/sermon/banner2.jpg",
      imgClass: "brightness-75 object-[20%_40%] rounded-xl",
    },
    {
      titleKr: "주보",
      titleEn: "Worship information",
      description: "매주/매월 진행되는\n사역과 소식을\n안내해드립니다.",
      path: "/news/bulletins",
      img: "/images/home/focus.jpg",
      imgClass: "brightness-75 object-[20%_40%] rounded-xl",
    },
    {
      titleKr: "다음 세대",
      titleEn: "Worship information",
      description: "하나님을 영화롭게 하며\n하나님을 깊이 만나는\n다음세대를 소개합니다.",
      path: "/education",
      img: "/images/education/banner.jpg",
      imgClass: "brightness-75 object-[20%_40%] rounded-xl",
    },
  ];

  return (
    <div className="relative">
      <div className="absolute left-0 top-0 z-[1] h-full w-full bg-black/40" />
      <div className="relative h-[650px] w-full md:h-[800px]">
        <Image src="/images/home/section3.jpg" alt="" fill={true} className="object-cover" />
      </div>
      <div className="absolute left-0 top-0 z-[1] flex w-full flex-col gap-12 px-8 py-16 md:gap-32">
        <div className="flex flex-col gap-8 text-white">
          <div data-aos="fade-up" className="h-[5px] w-[120px] bg-white" />
          <p data-aos="fade-up" className="font-SCoreDream w-3/4 text-xl font-bold md:text-5xl">
            명문교회 홈페이지를 방문해주신 여러분을
            <br />
            주님의 이름으로 환영하고 축복합니다.
          </p>
          <p data-aos="fade-up" className="font-Yanone text-xl leading-5 md:text-4xl">
            Thank you for visiting
            <br />
            the Myungmoon Church website.
            <br />
            We welcome and bless you
            <br />
            in the name of the Lord.
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-4">
          {navList.map((nav, idx) => (
            <div
              onClick={() => push(nav.path)}
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay={idx * 50}
              data-aos-duration="400"
              className="flex h-full w-full cursor-pointer items-center justify-center text-white sm:gap-16"
            >
              <div className="flex flex-col items-center justify-center gap-5">
                <div className="flex flex-col items-center justify-center gap-1">
                  <p className="font-SCoreDream text-white transition-colors hover:text-blue-600 hover:underline sm:text-5xl md:text-4xl lg:text-6xl">
                    {nav.titleKr}
                  </p>
                  <p className="font-Lora hidden text-white md:text-lg lg:block">{nav.titleEn}</p>
                </div>
                <p className="whitespace-pre text-center text-xs text-gray-300 md:text-base">{nav.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="flex w-full items-center gap-8">
          <div data-aos="fade-in" className="relative hidden h-[300px] w-1/2 md:block md:h-[300px] lg:h-[300px]">
            <Image src="/images/home/focus.jpg" alt="" fill={true} className="object-cover" />
          </div>
          <div className="flex w-full flex-col gap-5 md:w-1/2">
            {navList.map((nav, idx) => (
              <p
                data-aos="fade-up"
                data-aos-offset="20"
                data-aos-delay={idx * 50}
                data-aos-duration="400"
                className="font-SCoreDream w-fit cursor-pointer text-5xl font-bold text-[#a0a0a0] transition-colors hover:text-white hover:underline"
                key={nav.label}
              >
                {nav.label}
              </p>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default NavSection;
