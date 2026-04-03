"use client";

import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { NewsNavStrip } from "@/components/news/news-section-nav";
import { Button } from "@/components/ui/button";
import { getBooks } from "@/lib/api-books";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 5;

function stripHtml(html: string) {
  if (typeof window === "undefined") return html.replace(/<[^>]+>/g, " ").slice(0, 300);
  const d = document.createElement("div");
  d.innerHTML = html;
  return (d.textContent || d.innerText || "").trim();
}

export function BooksSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [visiblePages, setVisiblePages] = useState(1);

  const { data, isPending } = useQuery({
    queryKey: ["books"],
    queryFn: () => getBooks(),
  });

  const books = data?.books ?? [];
  const total = data?.totalBooksCount ?? 0;
  const visible = books.slice(0, visiblePages * PAGE_SIZE);
  const hasMore = total > visible.length;

  return (
    <>
      <NewsNavStrip />
      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-[#1e2a4a] sm:text-3xl">추천 도서</h1>
        <p className="mt-2 text-sm text-[#496674]">교회에서 추천하는 도서를 소개합니다.</p>
      </header>

      {isPending ? (
        <div className="flex min-h-[200px] items-center justify-center">
          <Loader2 className="size-10 animate-spin text-[#1e2a4a]" aria-hidden />
        </div>
      ) : visible.length ? (
        <ul className="flex flex-col gap-3">
          {visible.map((book) => {
            const open = openId === book._id;
            const cover = book.imageUrls?.[0];
            return (
              <li
                key={book._id}
                className="overflow-hidden rounded-2xl border border-[#E6E6E6] bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : book._id)}
                  className="flex w-full items-center gap-4 p-4 text-left transition-colors hover:bg-[#fafbfc] sm:gap-6 sm:p-5"
                >
                  {cover ? (
                    <div className="relative h-[100px] w-[68px] shrink-0 overflow-hidden rounded-md bg-[#f4f4f4] sm:h-[130px] sm:w-[88px]">
                      <Image
                        src={cover}
                        alt=""
                        fill
                        className="object-contain"
                        unoptimized
                        sizes="88px"
                      />
                    </div>
                  ) : (
                    <div className="flex h-[100px] w-[68px] shrink-0 items-center justify-center rounded-md bg-[#eef1f6] text-xs text-[#496674] sm:h-[130px] sm:w-[88px]">
                      표지
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-bold text-[#1e2a4a] sm:text-xl">{book.title}</h2>
                    <p className="mt-1 text-sm text-[#496674]">
                      {book.writer ? <span>저자 {book.writer}</span> : null}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs text-[#496674]">{open ? "▲" : "▼"}</span>
                </button>
                {open ? (
                  <div className="border-t border-[#E6E6E6] bg-[#fafbfc] px-4 py-4 text-sm leading-relaxed text-[#333] sm:px-6 sm:py-5">
                    {stripHtml(book.content)}
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="py-16 text-center text-[#496674]">등록된 도서가 없습니다.</p>
      )}

      {hasMore ? (
        <div className="mt-8 flex justify-center">
          <Button
            type="button"
            variant="outline"
            className="border-[#1e2a4a] text-[#1e2a4a]"
            onClick={() => setVisiblePages((p) => p + 1)}
          >
            더보기
          </Button>
        </div>
      ) : null}
      </div>
    </>
  );
}
