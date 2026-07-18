"use client";

import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { ArrowLeft, Download, Loader2, Paperclip } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { NewsNavStrip } from "@/components/news/news-section-nav";
import { getBoard } from "@/lib/api-board";
import { BOARD_TYPE_MAP } from "@/lib/constants/board";

const fileNameFromUrl = (url: string) => {
  try {
    const last = decodeURIComponent(url.split("?")[0].split("/").pop() ?? "");
    return last.replace(/^[0-9a-f]{8}_/i, "");
  } catch {
    return url;
  }
};

type Props = {
  boardId: string;
};

export function BoardDetail({ boardId }: Props) {
  const { data, isPending } = useQuery({
    queryKey: ["boards", boardId],
    queryFn: () => getBoard(boardId),
    enabled: !!boardId,
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
              href="/news/boards"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#496674] hover:text-[#1e2a4a]"
            >
              <ArrowLeft className="size-4" aria-hidden />
              목록으로
            </Link>

            <header className="border-b border-[#E6E6E6] pb-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <h1 className="text-2xl font-bold text-[#1e2a4a] sm:text-3xl">{data.title}</h1>
                  <p className="mt-2 text-sm text-[#496674]">
                    {data.writer} · {dayjs(data.createdAt).format("YYYY.MM.DD")}
                  </p>
                </div>
                <span className="shrink-0 rounded-md bg-[#f0f4f9] px-3 py-1.5 text-sm font-medium text-[#1e2a4a]">
                  {BOARD_TYPE_MAP[data.type] ?? data.type}
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
                  <div
                    key={url}
                    className="relative aspect-auto w-full overflow-hidden rounded-xl border border-[#E6E6E6]"
                  >
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

            {data.fileUrls?.length ? (
              <div className="mt-10 border-t border-[#E6E6E6] pt-6">
                <p className="mb-3 text-sm font-semibold text-[#1e2a4a]">
                  첨부파일 {data.fileUrls.length}개
                </p>
                <ul className="flex flex-col gap-2">
                  {data.fileUrls.map((url) => (
                    <li key={url}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        download
                        className="flex items-center gap-2 rounded-lg border border-[#E6E6E6] bg-white px-4 py-3 text-sm text-[#1e2a4a] transition-colors hover:bg-[#fafbfc]"
                      >
                        <Paperclip className="size-4 shrink-0 text-[#93a3ad]" aria-hidden />
                        <span className="min-w-0 flex-1 truncate">{fileNameFromUrl(url)}</span>
                        <Download className="size-4 shrink-0 text-[#93a3ad]" aria-hidden />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </article>
        )}
      </div>
    </>
  );
}
