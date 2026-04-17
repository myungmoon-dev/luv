"use client";

import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { NewsPagination } from "@/components/news/news-pagination";
import { NewsNavStrip } from "@/components/news/news-section-nav";
import { getMissions } from "@/lib/api-mission-news";
import { MISSION_LOCATION_FILTERS, MISSION_LOCATION_MAP } from "@/lib/constants/mission-news";
import { cn } from "@/lib/utils";
import type { MissionLocation } from "type";

const PAGE_SIZE = 10;

const MISSION_NEWS_PATH = "/news/mission-news";

export function MissionNewsSection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Math.max(1, Number(searchParams.get("page")) || 1);
  const locParam = searchParams.get("location") || "all";
  const location =
    locParam === "all" || MISSION_LOCATION_FILTERS.some((x) => x.value === locParam)
      ? (locParam as MissionLocation | "all")
      : "all";

  const apiLocation = location === "all" ? undefined : (location as MissionLocation);

  const { data, isPending } = useQuery({
    queryKey: ["mission-news", page, PAGE_SIZE, apiLocation ?? "all"],
    queryFn: () =>
      getMissions({
        page,
        size: PAGE_SIZE,
        location: apiLocation,
      }),
  });

  const setLocation = (value: MissionLocation | "all") => {
    const p = new URLSearchParams(searchParams.toString());
    if (value === "all") p.delete("location");
    else p.set("location", value);
    p.set("page", "1");
    router.push(`${MISSION_NEWS_PATH}?${p.toString()}`);
  };

  const setPage = (n: number) => {
    const p = new URLSearchParams(searchParams.toString());
    p.set("page", String(n));
    router.push(`${MISSION_NEWS_PATH}?${p.toString()}`);
  };

  return (
    <>
      <NewsNavStrip />
      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-[#1e2a4a] sm:text-3xl">선교지 소식</h1>
        <p className="mt-2 text-sm text-[#496674]">지역별로 선교지에서 올려 주신 소식을 모았습니다.</p>
      </header>

      <div className="mb-8 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {MISSION_LOCATION_FILTERS.map(({ value, label }) => {
          const active = location === value;
          return (
            <button
              key={value}
              type="button"
              onClick={() => setLocation(value)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-colors sm:text-sm",
                active
                  ? "border-[#1e2a4a] bg-[#1e2a4a] text-white"
                  : "border-[#E6E6E6] bg-white text-[#496674] hover:border-[#1e2a4a]/40",
              )}
            >
              {label}
            </button>
          );
        })}
      </div>

      {isPending ? (
        <div className="flex min-h-[200px] items-center justify-center">
          <Loader2 className="size-10 animate-spin text-[#1e2a4a]" aria-hidden />
        </div>
      ) : data?.missionNewsList?.length ? (
        <>
          <ul className="flex flex-col gap-4">
            {data.missionNewsList.map((m) => (
              <li
                key={m._id}
                className="rounded-2xl border border-[#E6E6E6] bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-[#496674]">{dayjs(m.date).format("YYYY.MM.DD")}</p>
                    <h2 className="mt-1 text-lg font-bold text-[#1e2a4a] sm:text-xl">{m.title}</h2>
                  </div>
                  <span className="shrink-0 rounded-md bg-[#f0f4f9] px-2.5 py-1 text-xs font-medium text-[#1e2a4a]">
                    {MISSION_LOCATION_MAP[m.location]}
                  </span>
                </div>
                <Link
                  href={`/news/mission-news/${m._id}`}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-lg border border-[#E6E6E6] py-2.5 text-sm font-semibold text-[#1e2a4a] transition-colors hover:bg-[#fafbfc] sm:w-auto sm:px-6"
                >
                  자세히 보기
                </Link>
              </li>
            ))}
          </ul>
          <NewsPagination
            currentPage={page}
            totalItems={data.totalMissionNewsCount}
            pageSize={PAGE_SIZE}
            onPageChange={setPage}
          />
        </>
      ) : (
        <p className="py-16 text-center text-sm text-[#496674]">선교지 소식이 없습니다.</p>
      )}
      </div>
    </>
  );
}
