"use client";

import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { Loader2, Paperclip } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { NewsPagination } from "@/components/news/news-pagination";
import { NewsNavStrip } from "@/components/news/news-section-nav";
import { getBoards } from "@/lib/api-board";
import { BOARD_TYPE_FILTERS, BOARD_TYPE_MAP } from "@/lib/constants/board";
import { cn } from "@/lib/utils";
import type { BoardType } from "type";

const PAGE_SIZE = 10;
const BOARD_PATH = "/news/boards";

export function BoardSection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Math.max(1, Number(searchParams.get("page")) || 1);
  const typeParam = searchParams.get("type") || "all";
  const type =
    typeParam === "all" || BOARD_TYPE_FILTERS.some((x) => x.value === typeParam)
      ? (typeParam as BoardType | "all")
      : "all";
  const apiType = type === "all" ? undefined : (type as BoardType);

  const { data, isPending } = useQuery({
    queryKey: ["boards", page, PAGE_SIZE, apiType ?? "all"],
    queryFn: () => getBoards({ page, size: PAGE_SIZE, type: apiType }),
  });

  const setType = (value: BoardType | "all") => {
    const p = new URLSearchParams(searchParams.toString());
    if (value === "all") p.delete("type");
    else p.set("type", value);
    p.set("page", "1");
    router.push(`${BOARD_PATH}?${p.toString()}`);
  };

  const setPage = (n: number) => {
    const p = new URLSearchParams(searchParams.toString());
    p.set("page", String(n));
    router.push(`${BOARD_PATH}?${p.toString()}`);
  };

  const total = data?.totalCount ?? 0;
  const boards = data?.boards ?? [];
  // 전체 보기일 때만 분류(타입) 컬럼 노출
  const showType = type === "all";
  const gridCols = showType
    ? "sm:grid-cols-[56px_88px_1fr_96px_104px]"
    : "sm:grid-cols-[64px_1fr_110px_110px]";

  return (
    <>
      <NewsNavStrip />
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-[#1e2a4a] sm:text-3xl">게시판</h1>
          <p className="mt-2 text-sm text-[#496674]">교회의 공지와 소식을 확인하실 수 있습니다.</p>
        </header>

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          {/* 좌측 카테고리 (모바일: 가로 칩 / 데스크탑: 세로 리스트) */}
          <aside className="lg:w-44 lg:shrink-0">
            <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-1 lg:overflow-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {BOARD_TYPE_FILTERS.map(({ value, label }) => {
                const active = type === value;
                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setType(value)}
                    className={cn(
                      "shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-colors sm:text-sm lg:w-full lg:rounded-lg lg:text-left",
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
          </aside>

          {/* 우측 목록 */}
          <div className="min-w-0 flex-1">
            {isPending ? (
              <div className="flex min-h-[200px] items-center justify-center">
                <Loader2 className="size-10 animate-spin text-[#1e2a4a]" aria-hidden />
              </div>
            ) : boards.length ? (
              <>
                <div className="overflow-hidden rounded-xl border border-[#E6E6E6] bg-white">
                  {/* 헤더 (데스크탑) */}
                  <div
                    className={cn(
                      "hidden border-b border-[#E6E6E6] bg-[#fafbfc] px-4 py-3 text-xs font-semibold text-[#496674] sm:grid",
                      gridCols,
                    )}
                  >
                    <span className="text-center">번호</span>
                    {showType && <span className="text-center">분류</span>}
                    <span>제목</span>
                    <span className="text-center">글쓴이</span>
                    <span className="text-center">날짜</span>
                  </div>
                  <ul>
                    {boards.map((b, idx) => {
                      const number = total - (page - 1) * PAGE_SIZE - idx;
                      return (
                        <li key={b.id} className="border-b border-[#F0F0F0] last:border-b-0">
                          <Link
                            href={`/news/boards/${b.id}`}
                            className={cn(
                              "grid grid-cols-1 gap-1 px-4 py-3.5 transition-colors hover:bg-[#fafbfc] sm:items-center sm:gap-0",
                              gridCols,
                            )}
                          >
                            <span className="hidden text-center text-sm text-[#496674] sm:block">
                              {number}
                            </span>
                            {showType && (
                              <span className="sm:text-center">
                                <span className="inline-block rounded bg-[#f0f4f9] px-2 py-0.5 text-xs font-medium text-[#1e2a4a]">
                                  {BOARD_TYPE_MAP[b.type]}
                                </span>
                              </span>
                            )}
                            <span className="flex min-w-0 items-center gap-1.5">
                              <span className="truncate text-sm font-medium text-[#1e2a4a]">
                                {b.title}
                              </span>
                              {b.hasFiles && (
                                <Paperclip className="size-3.5 shrink-0 text-[#93a3ad]" aria-hidden />
                              )}
                            </span>
                            <span className="text-xs text-[#496674] sm:text-center sm:text-sm">
                              <span className="text-[#93a3ad] sm:hidden">글쓴이 · </span>
                              {b.writer}
                            </span>
                            <span className="text-xs text-[#93a3ad] sm:text-center sm:text-sm">
                              {dayjs(b.createdAt).format("YYYY.MM.DD")}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <NewsPagination
                  currentPage={page}
                  totalItems={total}
                  pageSize={PAGE_SIZE}
                  onPageChange={setPage}
                />
              </>
            ) : (
              <p className="rounded-xl border border-[#E6E6E6] bg-white py-16 text-center text-sm text-[#496674]">
                {BOARD_TYPE_MAP[type]} 게시글이 없습니다.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
