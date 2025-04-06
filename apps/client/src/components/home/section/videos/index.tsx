import useResponsive from "@/hooks/useResponsive";
import { useGetYoutubeLinkSuspense } from "@/query/youtube";
import { Icon, Spinner } from "ui";
import BigVideo from "./big";
import SmallVideo from "./small";
import { Suspense } from "@suspensive/react";

const VideosSection = () => {
  return (
    <Suspense
      clientOnly
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <Spinner />
        </div>
      }
    >
      <VideosSectionMain />
    </Suspense>
  );
};

const VideosSectionMain = () => {
  const { data: main } = useGetYoutubeLinkSuspense("main");
  const { isMd } = useResponsive();

  const getBigVideos = () => {
    if (isMd) return main.videos.slice(0, 2);
    return main.videos;
  };

  const getSmallVideos = () => {
    return main.videos;
  };

  return (
    <div className="pb-[60px] pl-[22px] pt-[55px] sm:pb-[48px] sm:pl-[35px] md:px-[30px] md:pb-[60px] md:pt-[80px] lg:px-[125px] lg:pb-[70px]">
      <button className="mb-[12px] flex items-center gap-[1px] sm:mb-[26px] sm:gap-[12px] md:mb-[48px] md:w-full md:justify-between lg:mb-[40px]">
        <p className="text-[22px] font-bold text-[#222222] sm:text-[25px] lg:text-[30px]">말씀과 찬양</p>
        <span className="flex size-[41px] items-center justify-center gap-2 md:w-auto">
          <p className="hidden text-[14px] font-medium md:block">자세히 보기</p>
          <Icon name="CaretRight" sizeNumber={16} cursor="ui-cursor-pointer" />
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
};

export default VideosSection;
