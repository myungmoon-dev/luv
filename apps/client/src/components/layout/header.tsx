import Image from "next/image";
import React from "react";

const Header = () => {
  const menus = ["교회소개", "섬기는 분들", "설교말씀", "교회양육", "교육부서", "성도의 교제"];

  return (
    <header className="h-[76px] bg-[#dfc7c7] flex justify-center sticky -top-4 pt-4 z-[1000]">
      <div className="max-w-[1100px] w-full flex items-center justify-between py-2">
        <div className="relative w-[200px] h-full">
          <Image src="https://www.myungmoon.or.kr/img/body/logo.png" fill={true} alt="myungmoon" />
        </div>
        <nav className="flex gap-2">
          {menus.map((menu) => (
            <span key={menu}>{menu}</span>
          ))}
          <span>🍔</span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
