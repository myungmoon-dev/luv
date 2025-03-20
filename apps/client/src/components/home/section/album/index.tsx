import useResponsive from "@/hooks/useResponsive";
import { Icon } from "ui";
import LgImage from "./lg";
import MdImage from "./md";

const HomeAlbumSection = () => {
  const { isSm, isMd, isLg } = useResponsive();

  const getIconSizeNumber = () => {
    if (isMd || isLg) return 14;
    if (isSm) return 16;
    return 15;
  };

  const getImages = () => {
    // TODO: 앨범 api 적용
    return new Array(12).fill("/images/sketch-2.jpg");
  };

  if (isLg)
    return (
      <div className="flex flex-col gap-[55px] bg-[#F5F5F5] pb-[167px] pt-[85px]">
        <div className="flex justify-between px-[125px]">
          <p className="text-[30px] font-bold text-[#222222]">명문교회 앨범</p>
          <button className="flex items-center justify-center gap-2">
            <p className="text-[14px]">자세히 보기</p>
            <Icon name="CaretRight" sizeNumber={getIconSizeNumber()} />
          </button>
        </div>
        <div className="flex overflow-scroll">
          {getImages().map((image, idx) => (
            <LgImage imageSrc={image} key={idx} />
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
      <div className="grid grid-cols-3 gap-[17px] sm:gap-[12px] md:gap-[10px]">
        {getImages().map((image, idx) => (
          <MdImage imageSrc={image} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default HomeAlbumSection;
