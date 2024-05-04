import React from "react";
import Image from "next/image";

const NavSection = () => {
  const navList: { label: string; path: string }[] = [
    { label: "예배 라이브", path: "/" },
    { label: "주보", path: "/" },
    { label: "예배안내", path: "/" },
    { label: "명문앨범", path: "/" },
  ];

  return (
    <div className="relative">
      <div className="absolute left-0 top-0 z-[1] h-full w-full bg-black/40" />
      <div className="relative h-[650px] w-full md:h-[800px]">
        <Image src="/images/home/section3.jpg" alt="" fill={true} className="object-cover" />
      </div>
      <div className="absolute left-0 top-0 z-[1] flex w-full flex-col gap-12 px-8 py-16">
        <div className="flex flex-col gap-8 text-white">
          <div data-aos="fade-up" className="h-[5px] w-[120px] bg-white" />
          <p data-aos="fade-up" className="text-xl font-bold md:text-2xl">
            명문교회 홈페이지를 방문해주신 여러분을
            <br />
            주님의 이름으로 환영하고 축복합니다.
          </p>
          <p data-aos="fade-up" className="text-lg leading-5 md:text-xl">
            Thank you for visiting
            <br />
            the Myungmoon Church website.
            <br />
            We welcome and bless you
            <br />
            in the name of the Lord.
          </p>
        </div>
        <div className="flex w-full items-center gap-8">
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
                className="w-fit cursor-pointer text-5xl font-bold text-[#a0a0a0] transition-colors hover:text-white hover:underline"
                key={nav.label}
              >
                {nav.label}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavSection;
