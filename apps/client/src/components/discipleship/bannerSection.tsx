import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    title: "새가족 훈련",
    desc: ['"처음 오셨나요?', '함께 걸어갈 믿음의 첫걸음을 안내해드립니다."'],
    image: "/images/discipleship/welcome-banner.jpg",
    url: "/discipleship",
  },
  {
    title: "맛있는 가정예배",
    desc: ['"가정에서 드리는 예배,', '은혜는 더하고 사랑은 깊어집니다."'],
    image: "/images/home/homeworship.png",
    url: "/discipleship/homeworship",
  },
  {
    title: "신앙교육",
    desc: ['"말씀으로 자라고,', '믿음으로 세워지는 신앙의 여정"'],
    image: "/images/discipleship/bibleBanner.jpg",
    url: "/discipleship/faith",
  },
  {
    title: "공동체 훈련",
    desc: ['"삶을 나누고 믿음을 세우는', '세대별 공동체의 자리로 초대합니다."'],
    image: "/images/discipleship/discipleship.png",
    url: "/discipleship/community",
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
  );
};

export default DiscipleshipBannerSection;
