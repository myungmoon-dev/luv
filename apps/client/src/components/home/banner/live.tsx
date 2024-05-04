import React from "react";

const HomeBannerLive = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-center text-4xl font-extrabold text-white sm:text-[3.75rem] sm:leading-[4.5rem]">
        <span data-aos="fade-up">2024.04.24</span>
        <br />
        <span data-aos="fade-up">주일 1부예배 LIVE</span>
      </h1>
      <button data-aos="fade-up" className="text-2xl font-bold text-white">
        바로가기 {">"}
      </button>
    </div>
  );
};

export default HomeBannerLive;
