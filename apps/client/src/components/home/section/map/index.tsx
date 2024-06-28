import Image from "next/image";
import Map from "./view";

const MapSection = () => {
  return (
    <div className="relative">
      <div className="relative h-[1000px] w-full lg:h-[1300px]">
        <Image src="/images/home/section4.png" alt="" fill={true} />
      </div>
      <div className="absolute left-0 top-0 flex w-full flex-col items-center gap-8 overflow-x-hidden px-8 pb-16 pt-24">
        <div className="flex flex-col items-center gap-3 md:gap-5">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="font-SCoreDream text-3xl text-blue-600 sm:text-4xl md:text-5xl"
          >
            '명문교회' 오시는 길
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1000"
            className="break-keep text-center leading-6 md:text-xl"
          >
            명문교회 평일예배는 독산동 비전채플에서,
            <br />
            주일예배는 서울여상 사랑채플에서 드려지고 있습니다.
          </p>
        </div>
        <Map isWhite={false} address="서울특별시 금천구 남부순환로 1406" title="VISION CHAPEL | 비전채플" />
        <Map isWhite={true} address="서울특별시 관악구 관악로 85" title="LOVE CHAPEL | 사랑채플" />
      </div>
    </div>
  );
};

export default MapSection;
