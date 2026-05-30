"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getLive } from "@/lib/api-youtube";
import { getYoutubeIdFromUrl } from "@/lib/youtube-id";

import { VideosSection } from "./videos-section";
import { YoutubeVideo } from "@/components/youtube/youtube-video";

const HERO_VIDEO_URL = "https://youtu.be/9K0FrEAYQro";

function TopHeroYoutube() {
  const videoId = getYoutubeIdFromUrl(HERO_VIDEO_URL);
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
    </div>
  );
}

export function HomePage() {
  const { data: live } = useQuery({
    queryKey: ["youtube", "live"],
    queryFn: getLive,
    select: (res) => res.live,
  });

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <section className="relative z-0 w-full overflow-hidden bg-[#1e2a4a]">
          <div className="relative aspect-video w-full md:aspect-[2.95]">
            <div className="absolute inset-0 bg-[#1e2a4a]" />
            <TopHeroYoutube />
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
              <div className="relative aspect-video w-full max-w-3xl">
                <Image
                  src="/images/main_four_people.jpeg"
                  alt="명문교회 찬양"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
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
