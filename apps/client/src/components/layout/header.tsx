import Image from "next/image";
import React from "react";

const Header = () => {
  const menus = ["교회소개", "섬기는 분들", "설교말씀", "교회양육", "교육부서", "성도의 교제"];

  return (
    <header className="z-10 h-[75px] w-full flex justify-between items-center bg-black bg-opacity-40 px-5 lg:px-48 fixed">
      <Image src="https://www.myungmoon.or.kr/img/body/logo.png" width={150} height={50} alt="myungmoon" />
      <nav className="flex items-center gap-5 lg:gap-10">
        {menus.map((menu) => (
          <span key={menu} className="text-white font-semibold text-sm">
            {menu}
          </span>
        ))}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </span>
      </nav>
    </header>
  );
};

export default Header;
