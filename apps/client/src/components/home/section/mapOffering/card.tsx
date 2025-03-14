import useResponsive from "@/hooks/useResponsive";
import Image from "next/image";
import { Icon } from "ui";

type MapOfferingType = "MAP" | "OFFERING";

interface IMapOfferingCardProps {
  type: MapOfferingType;
}

const MAP_OFFERING_MAP = (
  isLg: boolean,
): Record<MapOfferingType, { title: string; description: string; image: string }> => ({
  MAP: {
    title: "오시는 길",
    description: "명문교회로 오시는 길을\n안내해드립니다",
    image: "map",
  },
  OFFERING: {
    title: "온라인 헌금",
    description: isLg
      ? "직접 헌금봉헌이 어려운신 분들을 위해,\n온라인헌금을 안내해드립니다"
      : "직접 헌금봉헌이\n어려운신 분들을 위해,\n온라인헌금을 안내해드립니다",
    image: "offering",
  },
});

const MapOfferingCard = ({ type }: IMapOfferingCardProps) => {
  const { isSm, isMd, isLg } = useResponsive();

  const getIconSizeNumber = () => {
    if (isLg) return 14;
    if (isSm || isMd) return 16;
    return 15;
  };

  const data = MAP_OFFERING_MAP(isLg)[type];

  return (
    <div className="h-[146px] w-full bg-white p-[16px_16px_42px_40px] sm:h-[186px] sm:p-[32px_25px_38px_39px] md:p-[32px_50px_43px_73px] lg:h-[188px] lg:w-[500px] lg:px-[70px] lg:py-[50px]">
      <div className="flex justify-end gap-2 sm:gap-[6.5px] md:gap-[11px] lg:hidden">
        <span className="size-[6px] rounded-full border-[0.5px] border-[#222222] sm:size-[7.5px] md:size-[8px]" />
        <span className="size-[6px] rounded-full border-[0.5px] border-[#222222] bg-[#222222] sm:size-[7.5px] md:size-[8px]" />
      </div>
      <div className="flex items-center justify-between pr-[18px] sm:pr-[14px] md:pr-[32px] lg:pr-0">
        <div className="flex flex-col gap-[5px] sm:gap-[9px] md:gap-[7px] lg:flex-col-reverse lg:gap-[18px]">
          <div className="flex items-center sm:gap-[13px] md:gap-[5px]">
            <p className="text-[19px] font-bold text-[#222222] sm:text-[23px] lg:text-[22px]">{data.title}</p>
            <span className="flex size-[41px] items-center justify-center lg:hidden">
              <Icon name="CaretRight" sizeNumber={getIconSizeNumber()} />
            </span>
          </div>
          <p className="whitespace-pre text-[14px] leading-[100%] text-[#222222] sm:text-[16px] sm:leading-[20px] lg:leading-[100%]">
            {data.description}
          </p>
        </div>
        <div className="relative size-[46px] sm:size-[50px] lg:size-[60px]">
          <Image src={`/images/home/${data.image}.png`} alt="logo" fill={true} />
        </div>
      </div>
    </div>
  );
};

export default MapOfferingCard;
