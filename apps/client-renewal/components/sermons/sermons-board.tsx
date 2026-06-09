"use client";

import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { ExternalLink, Loader2 } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { NewsPagination } from "@/components/news/news-pagination";
import { Button } from "@/components/ui/button";
import { getSermonsVideosPage, SERMONS_PAGE_SIZE } from "@/lib/api-videos";
import { SERMON_CATEGORY_LABEL } from "@/lib/sermons/sermon-categories";
import { getYoutubeIdFromUrl } from "@/lib/youtube-id";
import { cn } from "@/lib/utils";
import type { IYoutube, YoutubeType } from "type";

type Row = IYoutube & { category: YoutubeType; categoryLabel: string };

function categoryLabelFor(type: string): string {
  return SERMON_CATEGORY_LABEL[type as YoutubeType] ?? type;
}

function buildWatchUrl(video: IYoutube): string {
  const id = getYoutubeIdFromUrl(video.url);
  if (id && id.length === 11) return `https://www.youtube.com/watch?v=${id}`;
  if (video.url?.startsWith("http")) return video.url;
  return `https://www.youtube.com/watch?v=${video.url}`;
}

export function SermonsBoard() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const uiPage = Math.max(1, Number(searchParams.get("page")) || 1);
  const apiPage = uiPage - 1;

  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ["videos", "sermons", apiPage, SERMONS_PAGE_SIZE],
    queryFn: () => getSermonsVideosPage(apiPage),
    placeholderData: (previousData) => previousData,
  });

  const videos = data?.videos;
  const totalElements = data?.totalElements ?? 0;
  const totalPages = Math.max(1, Math.ceil(totalElements / SERMONS_PAGE_SIZE));

  useEffect(() => {
    if (data === undefined || totalElements === 0) return;
    if (uiPage > totalPages) {
      const q = new URLSearchParams(searchParams.toString());
      q.set("page", String(totalPages));
      router.replace(`${pathname}?${q.toString()}`);
    }
  }, [data, totalElements, uiPage, totalPages, pathname, router, searchParams]);

  const goToPage = (targetPage: number) => {
    const next = Math.min(Math.max(1, targetPage), totalPages);
    const q = new URLSearchParams(searchParams.toString());
    q.set("page", String(next));
    router.push(`${pathname}?${q.toString()}`);
  };

  const isLoading = isPending && !data;
  const hasAnyError = isError;
  const allEmpty = totalElements === 0 && !isFetching;

  const rows: Row[] = (videos ?? []).map((v) => ({
    ...v,
    category: v.type,
    categoryLabel: categoryLabelFor(v.type),
  }));

  const rowNumberBase = (uiPage - 1) * SERMONS_PAGE_SIZE;

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-8 lg:px-8">
      <header className="mb-8 sm:mb-10">
        <div className="mb-3 flex items-center gap-3">
          <div className="h-[3px] w-10 bg-[#1e2a4a]" aria-hidden />
          <p className="text-sm font-semibold tracking-wide text-[#496674]">명문교회 미디어</p>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-[#1e2a4a] sm:text-3xl">설교 &amp; 찬양</h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#496674] sm:text-base">
          예배별 최근 영상을 한눈에 보실 수 있습니다. 제목을 누르거나 &quot;보기&quot;로 유튜브에서 재생할 수
          있습니다.
        </p>
      </header>

      {/* 게시판 프레임 */}
      <div
        className={cn(
          "overflow-hidden border-2 border-[#1e2a4a]/20 bg-[#f4f6f9] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]",
          "rounded-sm",
        )}
      >
        <div className="border-b-2 border-[#1e2a4a]/25 bg-[#1e2a4a] px-4 py-3 sm:px-5">
          <p className="text-center text-sm font-bold tracking-wide text-white sm:text-base">
            설교 · 찬양 영상 안내
          </p>
        </div>

        {isLoading ? (
          <div className="flex min-h-[280px] flex-col items-center justify-center gap-3 bg-white py-16">
            <Loader2 className="h-10 w-10 animate-spin text-[#1e2a4a]" aria-hidden />
            <p className="text-sm text-[#496674]">목록을 불러오는 중입니다.</p>
          </div>
        ) : hasAnyError && data === undefined ? (
          <div className="bg-white px-4 py-16 text-center">
            <p className="text-[#496674]">영상 목록을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.</p>
            <Button asChild variant="outline" className="mt-6 border-[#1e2a4a] text-[#1e2a4a]">
              <Link href="/">홈으로</Link>
            </Button>
          </div>
        ) : allEmpty ? (
          <div className="bg-white px-4 py-16 text-center text-[#496674]">등록된 영상이 없습니다.</div>
        ) : (
          <>
            {/* 데스크톱: 표 */}
            <div className="relative hidden md:block">
              {isFetching ? (
                <div
                  className="pointer-events-none absolute inset-0 z-[1] flex items-start justify-end bg-white/40 pt-3 pr-4"
                  aria-live="polite"
                >
                  <Loader2 className="h-6 w-6 animate-spin text-[#1e2a4a]" aria-hidden />
                </div>
              ) : null}
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[#E6E6E6] bg-[#eef1f6] text-[#1e2a4a]">
                    <th className="w-14 px-3 py-3 text-center font-semibold">번호</th>
                    <th className="w-36 px-3 py-3 font-semibold">구분</th>
                    <th className="min-w-[200px] px-3 py-3 font-semibold">제목</th>
                    <th className="w-28 px-3 py-3 font-semibold">설교자</th>
                    <th className="w-32 px-3 py-3 font-semibold">날짜</th>
                    <th className="w-24 px-3 py-3 text-center font-semibold">링크</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr
                      key={`${row.id}-${row.category}`}
                      className={cn(
                        "border-b border-[#E6E6E6] transition-colors hover:bg-[#f8fafc]",
                        index % 2 === 0 ? "bg-white" : "bg-[#fafbfc]",
                      )}
                    >
                      <td className="px-3 py-3 text-center text-[#496674]">{rowNumberBase + index + 1}</td>
                      <td className="px-3 py-3">
                        <span className="inline-block max-w-full truncate rounded border border-[#1e2a4a]/20 bg-white px-2 py-0.5 text-xs font-medium text-[#1e2a4a]">
                          {row.categoryLabel}
                        </span>
                      </td>
                      <td className="px-3 py-3">
                        <a
                          href={buildWatchUrl(row)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-[#1e2a4a] underline-offset-2 hover:underline"
                        >
                          {row.title || "(제목 없음)"}
                        </a>
                        {row.mainText ? (
                          <p className="mt-1 line-clamp-1 text-xs text-[#496674]">{row.mainText}</p>
                        ) : null}
                      </td>
                      <td className="px-3 py-3 text-[#333]">{row.preacher || "—"}</td>
                      <td className="whitespace-nowrap px-3 py-3 text-[#496674]">
                        {row.date
                          ? row.date
                          : row.createdAt
                            ? dayjs(row.createdAt).format("YYYY.MM.DD")
                            : "—"}
                      </td>
                      <td className="px-3 py-3 text-center">
                        <a
                          href={buildWatchUrl(row)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-[#1e2a4a] hover:underline"
                        >
                          보기
                          <ExternalLink className="size-3.5 shrink-0 opacity-70" aria-hidden />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 모바일: 카드 리스트 */}
            <div className="relative md:hidden">
              {isFetching ? (
                <div
                  className="pointer-events-none absolute inset-0 z-[1] flex items-start justify-end bg-white/40 pt-3 pr-4"
                  aria-live="polite"
                >
                  <Loader2 className="h-6 w-6 animate-spin text-[#1e2a4a]" aria-hidden />
                </div>
              ) : null}
              <ul className="divide-y divide-[#E6E6E6] bg-white">
                {rows.map((row) => (
                  <li key={`${row.id}-${row.category}-m`} className="px-4 py-4">
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <span className="shrink-0 rounded border border-[#1e2a4a]/20 bg-[#f8fafc] px-2 py-0.5 text-[11px] font-semibold text-[#1e2a4a]">
                        {row.categoryLabel}
                      </span>
                      <span className="text-xs text-[#496674]">
                        {row.date
                          ? row.date
                          : row.createdAt
                            ? dayjs(row.createdAt).format("YYYY.MM.DD")
                            : ""}
                      </span>
                    </div>
                    <a
                      href={buildWatchUrl(row)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold leading-snug text-[#1e2a4a] underline-offset-2 hover:underline"
                    >
                      {row.title || "(제목 없음)"}
                    </a>
                    {row.mainText ? (
                      <p className="mt-1 text-sm text-[#496674]">{row.mainText}</p>
                    ) : null}
                    <p className="mt-2 text-sm text-[#333]">{row.preacher || "—"}</p>
                    <a
                      href={buildWatchUrl(row)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#1e2a4a]"
                    >
                      유튜브에서 보기
                      <ExternalLink className="size-3.5" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <NewsPagination
              currentPage={uiPage}
              totalItems={totalElements}
              pageSize={SERMONS_PAGE_SIZE}
              onPageChange={goToPage}
              className="border-t border-[#E6E6E6] bg-white px-3 py-5 sm:gap-2"
            />
          </>
        )}
      </div>
    </div>
  );
}
