import React from "react";

const HomeBannerBible = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-center text-4xl font-extrabold text-white sm:text-[3.75rem] sm:leading-[4.5rem]">
        <span data-aos="fade-up">온세대가 함께하는</span>
        <br />
        <span data-aos="fade-up">명문교회 {"<181일 성경통독>"}</span>
      </h1>
      <button data-aos="fade-up" className="text-2xl font-bold text-white">
        4/24일(24일차/181일)
      </button>
    </div>
  );
};

export default HomeBannerBible;