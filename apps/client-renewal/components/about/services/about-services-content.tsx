"use client";

import { Share2 } from "lucide-react";

import { KakaoMap } from "@/components/kakao-map";
import { ServicesSectionTitle } from "@/components/about/services/services-section-title";
import { ServicesTable } from "@/components/about/services/services-table";
import { Button } from "@/components/ui/button";

async function sharePage() {
  const shareData = {
    title: typeof document !== "undefined" ? document.title : "예배 정보",
    text: "명문교회 예배 정보",
    url: typeof window !== "undefined" ? window.location.href : "",
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(shareData.url);
    }
  } catch {
    /* 사용자 취소 등 */
  }
}

export function AboutServicesContent() {
  return (
    <div className="pb-20">
      <div className="mx-auto flex max-w-[680px] flex-col gap-14 px-4 py-10 sm:gap-16 sm:px-6 md:gap-20 lg:mx-auto lg:px-0 lg:pt-36">
        <section className="flex w-full flex-col gap-6 md:gap-10">
          <ServicesSectionTitle title="주일예배" />
          <ServicesTable worship="주일" />
        </section>
        <section className="flex w-full flex-col gap-6 md:gap-10">
          <ServicesSectionTitle title="평일예배" />
          <ServicesTable worship="평일" />
        </section>
        <section className="flex w-full flex-col gap-6 md:gap-10">
          <ServicesSectionTitle title="다음세대예배" />
          <ServicesTable worship="다음세대" />
        </section>
      </div>

      <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-0">
        <div className="mb-6 flex items-center justify-between gap-4 md:mb-10">
          <ServicesSectionTitle eyebrow="Location" title="오시는 길" />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="shrink-0 text-[#496674] hover:bg-[#1e2a4a]/8 hover:text-[#1e2a4a]"
            onClick={sharePage}
            aria-label="이 페이지 공유"
          >
            <Share2 className="size-[22px] md:size-7" />
          </Button>
        </div>

        <div className="mb-12 flex flex-col gap-8 md:mb-16 md:gap-12">
          <div>
            <KakaoMap address="서울특별시 금천구 남부순환로 1406" />
            <div className="mt-4 flex flex-col gap-1">
              <p className="text-lg font-semibold text-[#1e2a4a] sm:text-xl md:text-2xl">독산동 비전채플 (평일)</p>
              <p className="text-base font-medium text-[#464646] sm:text-lg md:text-xl">
                서울특별시 금천구 남부순환로 1406
              </p>
            </div>
          </div>
          <div>
            <KakaoMap address="서울특별시 관악구 관악로 85" />
            <div className="mt-4 flex flex-col gap-1">
              <p className="text-lg font-semibold text-[#1e2a4a] sm:text-xl md:text-2xl">서울여상 사랑채플 (주일)</p>
              <p className="text-base font-medium leading-relaxed text-[#464646] sm:text-lg md:text-xl">
                서울특별시 관악구 관악로 85
                <br />
                (서울여자상업고등학교 체육관 건물 3층)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[680px] px-4 sm:px-6 lg:px-0">
        <ServicesSectionTitle eyebrow="Contact" title="교회정보" />
        <div className="mt-6 grid grid-cols-[auto,1fr] gap-x-8 gap-y-5 border border-[#E6E6E6] bg-[#1e2a4a]/4 px-6 py-6 sm:gap-x-12 sm:gap-y-8 sm:px-8 sm:py-8">
          <p className="text-sm font-semibold text-[#1e2a4a] sm:text-base md:text-lg">주소</p>
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-[#464646] sm:whitespace-normal sm:text-base md:text-lg">
            {"(우) 08548 서울특별시 금천구\n남부순환로 1406"}
          </p>
          <p className="text-sm font-semibold text-[#1e2a4a] sm:text-base md:text-lg">대표번호</p>
          <p className="text-sm text-[#464646] sm:text-base md:text-lg">02-861-5071</p>
        </div>
      </div>
    </div>
  );
}
