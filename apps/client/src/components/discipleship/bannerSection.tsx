import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    title: "새가족 훈련",
    shortTitle: "새가족훈련",
    desc: ['"처음 오셨나요?', '함께 걸어갈 믿음의 첫걸음을 안내해드립니다."'],
    image: "/images/discipleship/welcome-banner.jpg",
    url: "/discipleship",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    title: "맛있는 가정예배",
    shortTitle: "가정예배",
    desc: ['"가정에서 드리는 예배,', '은혜는 더하고 사랑은 깊어집니다."'],
    image: "/images/home/homeworship.png",
    url: "/discipleship/homeworship",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    title: "신앙교육",
    shortTitle: "신앙교육",
    desc: ['"말씀으로 자라고,', '믿음으로 세워지는 신앙의 여정"'],
    image: "/images/discipleship/bibleBanner.jpg",
    url: "/discipleship/faith/qt",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    title: "공동체 훈련",
    shortTitle: "공동체훈련",
    desc: ['"삶을 나누고 믿음을 세우는', '세대별 공동체의 자리로 초대합니다."'],
    image: "/images/discipleship/discipleship.png",
    url: "/discipleship/community",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
];

const DiscipleshipBannerSection = () => {
  const [current, setCurrent] = useState(0);
  const { push } = useRouter();

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % SLIDES.length), 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      {/* 배너 슬라이드 */}
      <div onClick={() => push(SLIDES[current].url)} className="relative w-full cursor-pointer">
        <div className="relative h-[190px] sm:h-[250px] md:h-[320px] lg:h-[400px]">
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-500 ${
                current === i ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={slide.image} alt={slide.title} className="h-full w-full object-cover brightness-50" />
              <div className="absolute inset-0 flex flex-col justify-center gap-2 pl-5 sm:pl-8 md:gap-3 md:pl-12 lg:pl-16">
                <p className="pb-2 text-xl font-bold text-white sm:pb-3 sm:text-2xl md:text-4xl lg:text-5xl">
                  {slide.title}
                </p>
                {slide.desc.map((text, j) => (
                  <p key={j} className="text-sm text-white sm:text-base md:text-lg lg:text-xl">
                    {text}
                  </p>
                ))}
                <button
                  onClick={() => push(SLIDES[current].url)}
                  className="my-2 w-fit rounded-md bg-[#001F54] px-3 py-2 text-sm text-white transition-transform hover:scale-105 hover:brightness-125 sm:px-4 sm:py-2.5 sm:text-base md:px-5 md:py-3 md:text-lg lg:text-xl"
                >
                  자세히 보기
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-6 md:bottom-8">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all sm:h-2.5 md:h-3 ${
                current === i ? "w-6 bg-white sm:w-8 md:w-10" : "w-2 bg-white/50 hover:bg-white/75 sm:w-2.5 md:w-3"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 바로가기 아이콘 섹션 */}
      <div className="bg-gray-50 px-4 py-8 sm:px-6 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-5xl grid-cols-4 gap-3 sm:gap-6 md:gap-8">
          {SLIDES.map((slide, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                push(slide.url);
              }}
              className="group flex flex-col items-center gap-2 rounded-lg bg-white p-3 shadow-sm transition-all hover:shadow-md sm:gap-3 sm:p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-all group-hover:bg-[#001F54] group-hover:text-white sm:h-20 sm:w-20">
                <div className="scale-75 sm:scale-100">{slide.icon}</div>
              </div>
              <p className="text-center text-xs font-medium text-gray-900 sm:text-base">{slide.shortTitle}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscipleshipBannerSection;
