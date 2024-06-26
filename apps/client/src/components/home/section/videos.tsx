import { YoutubeVideo } from "ui";

import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

import DeferredComponent from "@/components/common/deferredComponent";
import View from "@/components/common/view";
import { useGetYoutubeList } from "@/query/youtube";

const VideosSection = () => {
  const { data: main, isLoading: mainLoading } = useGetYoutubeList({ videoType: "main" });
  const { data: shorts, isLoading: shortsLoading } = useGetYoutubeList({ videoType: "shorts" });

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
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="break-keep text-center font-SCoreDream text-3xl text-blue-600 sm:text-5xl"
          >
            {mainVideo?.title}
          </p>
          <Link
            href="https://www.youtube.com/@myungmoonchurch/videos"
            target="_blank"
            data-aos="fade-up"
            delay-aos-delay="400"
            className="mt-3 font-semibold hover:underline sm:text-xl"
          >
            설교 라이브, 1분 설교 보러가기 {">"}
          </Link>
        </div>
        <div className="flex w-full flex-col gap-5 md:flex-row 2xl:w-3/4">
          <View
            isEmpty={mainLoading}
            fallback={
              <DeferredComponent>
                <Skeleton
                  containerClassName="h-[200px] w-full sm:h-[300px] md:w-[70%] lg:h-[350px] xl:h-[500px]"
                  className="h-full"
                />
              </DeferredComponent>
            }
          >
            <YoutubeVideo
              className="h-[200px] w-full sm:h-[300px] md:w-[70%] lg:h-[350px] xl:h-[500px]"
              videoId={main?.[0].videoId}
            />
          </View>
          <View
            isEmpty={shortsLoading}
            fallback={
              <DeferredComponent>
                <Skeleton
                  containerClassName="h-[200px] w-full sm:h-[300px] md:w-[30%] lg:h-[350px] xl:h-[500px]"
                  className="h-full"
                />
              </DeferredComponent>
            }
          >
            <YoutubeVideo
              className="h-[200px] w-full sm:h-[300px] md:w-[30%] lg:h-[350px] xl:h-[500px]"
              videoId={shorts?.[0].videoId}
            />
          </View>
        </div>
      </div>
    </div>
  );
};

export default VideosSection;
