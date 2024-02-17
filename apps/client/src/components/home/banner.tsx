import Image from "next/image";

interface IBannerProps {
  img: string;
  preachDate: string;
  preachTitle: string;
  preachBibleContent: string;
}

export default function Banner({ img, preachDate, preachBibleContent, preachTitle }: IBannerProps) {
  return (
    <div className="relative flex h-[94vh] items-center justify-center bg-gray-200">
      <div className="relative h-full w-full">
        {/* 배너 이미지 */}
        <Image src={img} className="object-cover" layout="fill" alt="banner" />
        {/* 배너 설교 텍스트 */}
        <div className="absolute left-[5%] top-1/2 z-20 flex flex-col gap-1 text-black lg:gap-3">
          {/* 설교 날짜 및 설교본문 */}
          <div className="flex gap-3 text-2xl font-light xl:gap-5 xl:text-4xl">
            <span>{preachDate}</span>
            <span> | </span>
            <span>{preachTitle}</span>
          </div>
          {/* 설교제목 */}
          <h1 className="text-4xl font-bold xl:text-6xl">{preachBibleContent}</h1>
        </div>
        {/* 유튜브 로고 */}
        <div className="xl:right-26 absolute bottom-10 right-10 z-[1] flex h-10 w-14 justify-center rounded-xl bg-[#ff4242] p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="h-6 w-6 fill-white"
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
