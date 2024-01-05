import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#dfc7c7] h-[250px] flex justify-center">
      <div className="max-w-[1100px] w-full flex items-center h-full gap-10">
        <div className="relative w-[300px] h-[100px]">
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
