"use client";

import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { ArrowLeft, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { NewsNavStrip } from "@/components/news/news-section-nav";
import { getMission } from "@/lib/api-mission-news";
import { MISSION_LOCATION_MAP } from "@/lib/constants/mission-news";

type Props = {
  missionId: string;
};

export function MissionNewsDetail({ missionId }: Props) {
  const { data, isPending } = useQuery({
    queryKey: ["mission-news", missionId],
    queryFn: () => getMission(missionId),
    enabled: !!missionId,
  });

  return (
    <>
      <NewsNavStrip />
      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
      {isPending ? (
        <div className="flex min-h-[240px] items-center justify-center">
          <Loader2 className="size-10 animate-spin text-[#1e2a4a]" aria-hidden />
        </div>
      ) : !data ? (
        <p className="py-16 text-center text-[#496674]">글을 찾을 수 없습니다.</p>
      ) : (
        <article>
          <Link
            href="/news/mission-news"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#496674] hover:text-[#1e2a4a]"
          >
            <ArrowLeft className="size-4" aria-hidden />
            목록으로
          </Link>

          <header className="border-b border-[#E6E6E6] pb-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-sm text-[#496674]">{dayjs(data.date).format("YYYY.MM.DD")}</p>
                <h1 className="mt-2 text-2xl font-bold text-[#1e2a4a] sm:text-3xl">{data.title}</h1>
              </div>
              <span className="rounded-md bg-[#f0f4f9] px-3 py-1.5 text-sm font-medium text-[#1e2a4a]">
                {MISSION_LOCATION_MAP[data.location]}
              </span>
            </div>
          </header>

          <div
            className="mt-8 max-w-none text-base leading-relaxed text-[#333] [&_img]:h-auto [&_img]:max-w-full [&_p]:mb-4"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />

          {data.imageUrls?.length ? (
            <div className="mt-10 flex flex-col gap-6">
              {data.imageUrls.map((url, i) => (
                <div key={url} className="relative aspect-auto w-full overflow-hidden rounded-xl border border-[#E6E6E6]">
                  <Image
                    src={url}
                    alt={`${data.title} 이미지 ${i + 1}`}
                    width={1200}
                    height={800}
                    className="h-auto w-full object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          ) : null}
        </article>
      )}
      </div>
    </>
  );
}
