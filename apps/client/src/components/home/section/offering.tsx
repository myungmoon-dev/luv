import useCopy from "@/hooks/useCopy";
import Image from "next/image";
import React from "react";

const OfferingSection = () => {
  const { copy } = useCopy();

  return (
    <div className="relative">
      <div className="absolute left-0 top-0 z-[1] h-full w-full bg-black/40" />
      <div className="relative h-[600px] w-full lg:h-[500px]">
        <Image src="/images/home/section5.jpeg" alt="" fill={true} className="object-cover" />
      </div>
      <div className="absolute left-0 top-0 z-[1] flex w-full flex-col items-center justify-center gap-8 px-5 pb-16 pt-24">
        <h3 className="font-SCoreDream text-3xl text-white sm:text-6xl">온라인 헌금</h3>
        <p className="border-b-2 border-white pb-6 text-center font-semibold text-white sm:text-2xl">
          온라인 특별 목적헌금 구좌
          <br />
          (십일조, 건축, 선교, 장학, 차량, 기타)
          <br />
          헌금을 원하시는 분은
          <br />
          아래 계좌로 송금하실 수 있습니다.
        </p>
        <p
          onClick={() => copy("20608125001021")}
          className="cursor-pointer text-center font-SCoreDream text-lg leading-relaxed text-white hover:underline sm:text-3xl"
        >
          기업은행 206-081250-01-021
          <br />
          예금주: 대한예수교 장로회 명문교회
        </p>
      </div>
    </div>
  );
};

export default OfferingSection;
