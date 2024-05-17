import { useRouter } from "next/router";
import React from "react";

const HomeBannerHomeWorship = () => {
    const { push} = useRouter();

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="font-SCoreDream text-center text-4xl font-extrabold text-white sm:text-[3.75rem] sm:leading-[4.5rem]">
        <span data-aos="fade-up">5월 가정의 달 캠페인</span>
        <br />
        <span data-aos="fade-up">맛있는 가정예배</span>
      </h1>
      <button
        onClick={() => push("/education/home-worship")}
        data-aos="fade-up"
        className="text-2xl text-white hover:underline font-bold"
      >
        맛있는 가정예배 게시판 바로가기 {">"}
      </button>
    </div>
  );
};

export default HomeBannerHomeWorship;
