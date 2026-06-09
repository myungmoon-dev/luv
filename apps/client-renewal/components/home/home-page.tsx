"use client";

import { useCallback, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getLive } from "@/lib/api-youtube";
import { getHomeYoutube, getHomeImages } from "@/lib/api-home";
import { getYoutubeIdFromUrl } from "@/lib/youtube-id";

import { VideosSection } from "./videos-section";
import { YoutubeVideo } from "@/components/youtube/youtube-video";

function TopHeroYoutube({ youtubeUrl }: { youtubeUrl?: string }) {
  const videoId = youtubeUrl ? getYoutubeIdFromUrl(youtubeUrl) : null;
  if (!videoId) return null;

  return (
    <div className="absolute inset-0 overflow-hidden opacity-70">
      <YoutubeVideo
        videoId={videoId}
        className="h-full w-full origin-center scale-[1.75] transform-gpu md:scale-[1.55] lg:scale-[1.35]"
        autoplay
        mute
        loop
      />
      <div className="absolute inset-0" />
    </div>
  );
}

function HomeImageCarousel({ images }: { images: { id: string; imageUrl: string }[] }) {
  const [index, setIndex] = useState(0);
  const safeIndex = images.length > 0 ? index % images.length : 0;

  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [images.length, next]);

  return (
    <div className="relative aspect-video w-full max-w-3xl overflow-hidden">
      {images.length === 0 ? (
        <div className="h-full w-full animate-pulse bg-gray-200" />
      ) : (
        <>
          {images.map((img, i) => (
            <div
              key={img.id}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: i === safeIndex ? 1 : 0, zIndex: i === safeIndex ? 1 : 0 }}
            >
              <Image
                src={img.imageUrl}
                alt="명문교회"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority={i === 0}
              />
            </div>
          ))}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white transition hover:bg-black/60"
                aria-label="이전 이미지"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white transition hover:bg-black/60"
                aria-label="다음 이미지"
              >
                <ChevronRight className="size-5" />
              </button>
              <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                {images.map((img, i) => (
                  <button
                    key={img.id}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`size-2 rounded-full transition ${i === safeIndex ? "bg-white" : "bg-white/50"}`}
                    aria-label={`이미지 ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export function HomePage() {
  const { data: live } = useQuery({
    queryKey: ["youtube", "live"],
    queryFn: getLive,
  });

  const { data: homeYoutube } = useQuery({
    queryKey: ["home", "youtube"],
    queryFn: getHomeYoutube,
  });

  const { data: homeImages = [] } = useQuery({
    queryKey: ["home", "images"],
    queryFn: getHomeImages,
  });

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <section className="relative z-0 w-full overflow-hidden bg-[#1e2a4a]">
          <div className="relative aspect-video w-full md:aspect-[2.95]">
            <div className="absolute inset-0 bg-[#1e2a4a]" />
            <TopHeroYoutube youtubeUrl={homeYoutube?.youtubeUrl} />
          </div>
        </section>

        <section className="px-6 pb-24 pt-12 sm:pb-28 sm:pt-16 lg:px-16 lg:pb-36 lg:pt-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            <div className="flex flex-col gap-8 lg:gap-16">
              <div className="flex flex-col gap-4">
                <h1 className="flex flex-col text-4xl font-bold leading-tight text-[#1e2a4a] sm:text-5xl lg:text-6xl">
                  <span className="text-[#333333]">LOVE BEGINS,</span>
                  <span className="leading-10">MYUNGMOON CHURCH!</span>
                </h1>
                <p className="text-lg font-bold text-[#1e2a4a] sm:text-[22px]">
                  사랑의 시작, 명문교회에 오신 것을 환영합니다!
                </p>
              </div>
              <div className="flex gap-4">
                <Button
                  asChild
                  className="rounded-none border-0 bg-[#1e2a4a] px-6 py-4 text-sm tracking-wider text-white hover:bg-[#2d3a5a] sm:px-8 sm:py-6"
                >
                  <Link
                    href={live?.url || "https://www.youtube.com/@myungmoonchurch"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    유튜브 라이브
                  </Link>
                </Button>
                <Button
                  asChild
                  className="rounded-none border-0 bg-[#1e2a4a] px-6 py-4 text-sm tracking-wider text-white hover:bg-[#2d3a5a] sm:px-8 sm:py-6"
                >
                  <Link href="/discipleship/family-worship">가정 예배</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-10 sm:gap-12 md:flex-row md:items-center md:gap-12 lg:gap-24">
              <HomeImageCarousel images={homeImages} />

              <div className="md:max-w-md">
                <h2 className="text-nowrap text-3xl font-bold text-[#1e2a4a] sm:text-4xl">
                  처음오셨나요?
                </h2>
                <div className="my-6 h-[2px] w-16 bg-[#1e2a4a]" />
                <p className="text-lg leading-relaxed text-[#496674]">
                  여러분의 방문을 진심으로 환영합니다!
                  <br />
                  예배 안내와 오시는 방법 등 처음 방문 시
                  <br />
                  필요한 모든 정보를 확인해 보세요.
                </p>
                <div className="mt-8">
                  <Button
                    asChild
                    className="rounded-none border-0 bg-[#1e2a4a] px-8 py-6 text-sm tracking-wider text-white hover:bg-[#2d3a5a]"
                  >
                    <Link href="/about/leadership">더 알아보기</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <VideosSection />

        <section className="bg-[#1e2a4a] px-6 py-16 text-white sm:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Next Generation</h2>
            <div className="mx-auto my-6 h-[2px] w-16 bg-white" />
            <p
              className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80"
              suppressHydrationWarning
            >
              {"영아부부터 청년부까지, 다음 세대를 위한"}
              <br />
              {"다양한 프로그램과 예배가 준비되어 있습니다."}
            </p>
            <div className="mt-10">
              <Button
                asChild
                className="rounded-none border-0 bg-white px-8 py-6 text-sm tracking-wider text-[#1e2a4a] hover:bg-white/90"
              >
                <Link href="/education">더 알아보기</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
