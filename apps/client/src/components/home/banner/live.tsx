import { useGetYoutubeList } from "@/query/youtube";
import dayjs from "dayjs";
import React from "react";

const HomeBannerLive = () => {
  const { data } = useGetYoutubeList({ videoType: "live" });
  const liveVideo = data?.[0];

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-center text-4xl font-extrabold text-white sm:text-[3.75rem] sm:leading-[4.5rem]">
        <span data-aos="fade-up">{dayjs(liveVideo?.date).format("YYYY.MM.DD")}</span>
        <br />
        <span data-aos="fade-up">{liveVideo?.title} LIVE</span>
      </h1>
      <button
        onClick={() => open(`https://youtu.be/${liveVideo?.videoId}`)}
        data-aos="fade-up"
        className="text-2xl font-bold text-white"
      >
        바로가기 {">"}
      </button>
    </div>
  );
};

export default HomeBannerLive;
