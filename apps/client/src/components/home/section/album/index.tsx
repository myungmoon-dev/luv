import useResponsive from "@/hooks/useResponsive";
import { Icon, Spinner } from "ui";
import LgImage from "./lg";
import MdImage from "./md";
import { Suspense } from "@suspensive/react";
import { useGetAlbumListSuspense } from "@/query/album";

const HomeAlbumSection = () => {
  return (
    <Suspense
      clientOnly
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <Spinner />
        </div>
      }
    >
      <HomeAlbumSectionMain />
    </Suspense>
  );
};
const HomeAlbumSectionMain = () => {
  const { isSm, isMd, isLg } = useResponsive();
  const { data: main } = useGetAlbumListSuspense("all");
  console.log(main);

  const getIconSizeNumber = () => {
    if (isMd || isLg) return 14;
    if (isSm) return 16;
    return 15;
  };

  const getImages = () => {
    return main.albums;
  };

  if (isLg)
    return (
      <div className="flex flex-col gap-[55px] bg-[#F5F5F5] pb-[167px] pl-[22px] pt-[85px] sm:pl-[35px] md:px-[30px] lg:px-[125px]">
        <div className="flex justify-between">
          <p className="text-[30px] font-bold text-[#222222]">명문교회 앨범</p>
          <button className="flex items-center justify-center gap-2">
            <p className="text-[14px]">자세히 보기</p>
            <Icon name="CaretRight" sizeNumber={getIconSizeNumber()} />
          </button>
        </div>
        <div className="flex gap-2 overflow-scroll">
          {getImages().map((image, idx) => (
            <LgImage imageSrc={image.imageUrls[0]} key={idx} />
          ))}
        </div>
      </div>
    );

  return (
    <div className="flex flex-col gap-[12px] bg-[#F5F5F5] px-[22px] py-[30px] sm:gap-[12px] sm:px-[25px] sm:py-[50px] md:gap-[40px] md:px-[32px]">
      <div className="flex items-center md:justify-between">
        <p className="text-[22px] font-bold text-[#222222] sm:text-[25px]">명문교회 앨범</p>
        <button className="flex size-[41px] items-center justify-center md:size-auto md:gap-2">
          <p className="hidden text-[14px] md:block">자세히 보기</p>
          <Icon name="CaretRight" sizeNumber={getIconSizeNumber()} />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-[5px] sm:gap-[12px] md:gap-[10px]">
        {getImages()
          .slice(0, 9)
          .map((image, idx) => (
            <MdImage imageSrc={image.imageUrls[0]} key={idx} />
          ))}
      </div>
    </div>
  );
};

export default HomeAlbumSection;
