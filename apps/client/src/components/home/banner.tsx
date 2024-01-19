import Image from "next/image";

interface IBannerProps {
  imgSrc: string;
  imgAlt: string;
  preachDate: string;
  preachTitle: string;
  preachBibleContent: string;
}

export default function Banner({ imgSrc, imgAlt, preachDate, preachBibleContent, preachTitle }: IBannerProps) {
  return (
    <div className="h-[94vh] bg-gray-200 flex items-center justify-center relative">
      <div className="relative w-full h-full">
        {/* 배너 이미지 */}
        <Image src={imgSrc} className="object-cover" layout="fill" alt={imgAlt} />
        {/* 배너 설교 텍스트 */}
        <div className="absolute top-1/2 left-[5%] text-black flex flex-col gap-1 lg:gap-3 z-20">
          {/* 설교 날짜 및 설교본문 */}
          <div className="flex gap-3 xl:gap-5 font-light text-2xl xl:text-4xl">
            <span>{preachDate}</span>
            <span> | </span>
            <span>{preachTitle}</span>
          </div>
          {/* 설교제목 */}
          <h1 className="font-bold text-4xl xl:text-6xl">{preachBibleContent}</h1>
        </div>
        {/* 유튜브 로고 */}
        <div className="z-[1] w-14 h-10 right-10 xl:right-26 bottom-10 absolute flex justify-center bg-[#ff4242] p-2 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-6 h-6 fill-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
        </div>
        {/* FIXME: 그라데이션 직접 스타일 적용 시 사용 */}
        {/* <div
              className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent"
              style={{ width: "35%", opacity: 1 }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent"
              style={{ width: "45%", opacity: 0.7 }}
            /> */}
      </div>
    </div>
  );
}
