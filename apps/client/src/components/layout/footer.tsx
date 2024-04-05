import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex h-[250px] justify-center bg-pink-100">
      <div className="flex h-full w-full max-w-[1100px] items-center gap-10">
        <div className="relative h-[100px] w-[300px]">
          <Image src="https://www.myungmoon.or.kr/img/body/logo.png" fill={true} alt="myungmoon" />
        </div>
        <div className="flex flex-col">
          <span>담임목사: 김지혁</span>
          <span>전화: 02-861-5071</span>
          <span>이메일: myungmoon@myungmoon.or.kr</span>
          <span>주소: 서울특별시 금천구 남부순환로 1406</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
