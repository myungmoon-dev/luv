"use client";

import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { ChevronRight, Loader2 } from "lucide-react";

import { YoutubeVideo } from "@/components/youtube/youtube-video";
import { getYoutube } from "@/lib/api-youtube";
import { getYoutubeIdFromUrl } from "@/lib/youtube-id";
import { useMinWidthMd } from "@/hooks/use-media-query";
import type { IYoutube } from "type";

function BigVideo({ video }: { video: IYoutube }) {
  const id = getYoutubeIdFromUrl(video.url) ?? video.url;
  return (
    <div className="w-fit border border-[#E6E6E6] bg-white md:w-full lg:border-none lg:bg-[#F6F6F6]">
      <YoutubeVideo
        videoId={id}
        className="aspect-video w-[325px] sm:w-[373px] md:h-[184px] md:w-full lg:h-[281px]"
      />
      <div className="px-[20px] pb-[13px] pt-[18px] sm:pb-[15px] sm:pt-[16px] lg:pb-[18px] lg:pl-[32px] lg:pt-[20px]">
        <p className="mb-[5px] text-[13px] font-medium text-[#001F54] sm:mb-[6px] sm:text-[15px] md:mb-[7px]">
          주일예배
        </p>
        <p className="mb-[6px] text-[18px] font-medium text-[#222222] sm:mb-[3px] sm:text-[20px] lg:mb-[8px] lg:text-[18px]">
          {video.title}
        </p>
        <p className="text-[13px] font-medium text-[#666666] lg:text-[16px]">
          {video.preacher} • 주후 {dayjs(video.createdAt).format("YYYY.MM.DD")}
        </p>
      </div>
    </div>
  );
}

function SmallVideo({ video }: { video: IYoutube }) {
  const id = getYoutubeIdFromUrl(video.url) ?? video.url;
  return (
    <div>
      <YoutubeVideo
        videoId={id}
        className="aspect-video w-[157px] sm:w-[180px] lg:w-[250px]"
      />
      <div className="pt-[6px] sm:px-[12px] sm:pt-[13px] lg:px-0 lg:pt-[10px]">
        <p className="mb-[1px] text-[12px] font-medium text-[#001F54] sm:mb-[5px] sm:text-[15px] lg:mb-[9px] lg:text-[12px]">
          주일예배
        </p>
        <p className="text-[15px] font-medium text-[#222222] sm:text-[17px] lg:mb-[4px]">{video.title}</p>
        <p className="text-[12px] text-[#666666] sm:text-[13px] lg:text-[12px]">
          주후 {dayjs(video.createdAt).format("YYYY.MM.DD")}
        </p>
      </div>
    </div>
  );
}

export function VideosSection() {
  const isMd = useMinWidthMd();
  const { data, isPending, isError } = useQuery({
    queryKey: ["youtube", "main"],
    queryFn: () => getYoutube("main"),
  });

  if (isPending) {
    return (
      <div className="flex min-h-[200px] w-full items-center justify-center pb-[60px] pt-[55px]">
        <Loader2 className="h-10 w-10 animate-spin text-[#1e2a4a]" />
      </div>
    );
  }

  if (isError || !data?.videos?.length) {
    return null;
  }

  const { videos } = data;
  const getBigVideos = () => (isMd ? videos.slice(0, 2) : videos);
  const getSmallVideos = () => videos;

  return (
    <div className="pb-[60px] pl-[22px] pt-[55px] sm:pb-[48px] sm:pl-[35px] md:px-[30px] md:pb-[60px] md:pt-[80px] lg:px-[125px] lg:pb-[70px]">
      <button
        type="button"
        className="mb-[12px] flex items-center gap-[1px] sm:mb-[26px] sm:gap-[12px] md:mb-[48px] md:w-full md:justify-between lg:mb-[40px]"
      >
        <p className="text-[22px] font-bold text-[#222222] sm:text-[25px] lg:text-[30px]">말씀과 찬양</p>
        <span className="flex size-[41px] items-center justify-center gap-2 md:w-auto">
          <p className="hidden text-[14px] font-medium md:block">자세히 보기</p>
          <ChevronRight className="size-4 text-[#222222] md:block" aria-hidden />
        </span>
      </button>
      <div className="mb-[20px] flex gap-[10px] overflow-scroll sm:mb-[44px] sm:gap-[35px] md:mb-[40px] md:grid md:grid-cols-2 md:gap-[12px] lg:mb-[60px] lg:gap-[30px]">
        {getBigVideos().map((video) => (
          <BigVideo video={video} key={video._id} />
        ))}
      </div>
      <div className="flex gap-[18px] overflow-scroll sm:gap-[23px] md:gap-[11px] lg:gap-[20px]">
        {getSmallVideos().map((video) => (
          <SmallVideo video={video} key={video._id} />
        ))}
      </div>
    </div>
  );
}
