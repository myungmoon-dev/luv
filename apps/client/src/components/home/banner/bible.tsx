import dayjs from "dayjs";
import React from "react";

const HomeBannerBible = () => {
  const today = dayjs().format(`M/D일`);

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-center text-4xl font-extrabold text-white sm:text-[3.75rem] sm:leading-[4.5rem]">
        <span data-aos="fade-up">온세대가 함께하는</span>
        <br />
        <span data-aos="fade-up">명문교회 {"<181일 성경통독>"}</span>
      </h1>
      <p data-aos="fade-up" className="text-2xl font-bold text-white">
        {/* TODO: 일차 추가 */}
        {today}(181일)
      </p>
    </div>
  );
};

export default HomeBannerBible;
