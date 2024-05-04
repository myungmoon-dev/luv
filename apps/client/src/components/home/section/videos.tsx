import React from "react";
import Image from "next/image";
import { YoutubeVideo } from "ui";

import { useGetYoutubeList } from "@/query/youtube";

const VideosSection = () => {
  const { data: main } = useGetYoutubeList({ videoType: "main" });
  const { data: shorts } = useGetYoutubeList({ videoType: "shorts" });

  return (
    <div className="relative">
      <div className="relative h-[700px] w-full sm:h-[900px] md:h-[600px] xl:h-[800px]">
        <Image src="/images/home/section2.png" alt="" fill={true} className="object-cover" />
      </div>
      <div className="absolute left-0 top-0 flex w-full flex-col items-center justify-center gap-10 px-8 pb-10 pt-16">
        <div className="flex flex-col items-center gap-2 text-white">
          <p data-aos="fade-up" className="text-lg">
            2024.04.24
          </p>
          <p data-aos="fade-up" data-aos-delay="200" className="text-5xl font-bold">
            일어나 걸으라!
          </p>
          <button data-aos="fade-up" delay-aos-delay="400" className="text-2xl hover:underline">
            설교 라이브, 1분 설교 보러가기 {">"}
          </button>
        </div>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <YoutubeVideo
            className="h-[200px] w-full sm:h-[300px] md:w-[70%] lg:h-[270px] xl:h-[500px]"
            videoId={main && main.length > 0 ? main[0].videoId : undefined}
          />
          <YoutubeVideo
            className="h-[200px] w-full sm:h-[300px] md:w-[30%] lg:h-[270px] xl:h-[500px]"
            videoId={shorts && shorts.length > 0 ? shorts[0].videoId : undefined}
          />
        </div>
      </div>
    </div>
  );
};

export default VideosSection;
