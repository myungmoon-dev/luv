import React from "react";
import Image from "next/image";
import { YoutubeVideo } from "ui";
import { useRouter } from "next/navigation";

import { useGetYoutubeList } from "@/query/youtube";
import dayjs from "dayjs";

const VideosSection = () => {
  const { push } = useRouter();
  const { data: main } = useGetYoutubeList({ videoType: "main" });
  const { data: shorts } = useGetYoutubeList({ videoType: "shorts" });

  const mainVideo = main?.[0];

  return (
    <div className="relative">
      <div className="relative h-[700px] w-full sm:h-[900px] md:h-[600px] xl:h-[800px]">
        <Image src="/images/home/video1.jpeg" alt="" fill={true} />
      </div>
      <div className="absolute left-0 top-0 flex w-full flex-col items-center justify-center gap-10 px-5 pb-10 pt-16">
        <div className="flex flex-col items-center gap-2">
          <p data-aos="fade-up" className="font-SCoreDream text-xl text-blue-600 md:text-3xl">
            {dayjs(mainVideo?.date).format("YYYY.MM.DD")}
          </p>
          <p data-aos="fade-up" data-aos-delay="200" className="font-SCoreDream text-3xl text-blue-600 sm:text-5xl">
            {mainVideo?.title}
          </p>
          <button
            onClick={() => push("https://www.youtube.com/@myungmoonchurch/videos")}
            data-aos="fade-up"
            delay-aos-delay="400"
            className="font-semibold hover:underline sm:text-xl mt-3"
          >
            설교 라이브, 1분 설교 보러가기 {">"}
          </button>
        </div>
        <div className="flex w-full flex-col gap-5 md:flex-row 2xl:w-3/4">
          <YoutubeVideo
            className="h-[200px] w-full sm:h-[300px] md:w-[70%] lg:h-[350px] xl:h-[500px]"
            videoId={main && main.length > 0 ? main[0].videoId : undefined}
          />
          <YoutubeVideo
            className="h-[200px] w-full sm:h-[300px] md:w-[30%] lg:h-[350px] xl:h-[500px]"
            videoId={shorts && shorts.length > 0 ? shorts[0].videoId : undefined}
          />
        </div>
      </div>
    </div>
  );
};

export default VideosSection;
