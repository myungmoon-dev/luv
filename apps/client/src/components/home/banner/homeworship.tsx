import { useRouter } from "next/router";
import React from "react";

const HomeBannerHomeWorship = () => {
  const { push } = useRouter();

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-center font-SCoreDream text-4xl font-extrabold text-white sm:text-[3.75rem] sm:leading-[4.5rem]">
        <span data-aos="fade-up">전성도가 함께하는 맛있는 가정예배</span>
      </h1>
      <button
        onClick={() => push("/homeworship")}
        data-aos="fade-up"
        className="text-xl font-bold text-white hover:underline"
      >
        맛있는 가정예배 게시판 바로가기 {">"}
      </button>
    </div>
  );
};

export default HomeBannerHomeWorship;
