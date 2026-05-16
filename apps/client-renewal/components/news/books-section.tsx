"use client";

import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { NewsPagination } from "@/components/news/news-pagination";
import { NewsNavStrip } from "@/components/news/news-section-nav";
import { getBooks } from "@/lib/api-books";
import type { IBook } from "type";

const PAGE_SIZE = 10;

function stripHtml(html: string) {
  if (typeof window === "undefined") return html.replace(/<[^>]+>/g, " ").slice(0, 300);
  const d = document.createElement("div");
  d.innerHTML = html;
  return (d.textContent || d.innerText || "").trim();
}

type BooksPagePanelProps = {
  books: IBook[];
  totalBooksCount: number;
  page: number;
  onPageChange: (n: number) => void;
};

function BooksPagePanel({ books, totalBooksCount, page, onPageChange }: BooksPagePanelProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <>
      <ul className="flex flex-col gap-3">
        {books.map((book) => {
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
      <NewsPagination
        currentPage={page}
        totalItems={totalBooksCount}
        pageSize={PAGE_SIZE}
        onPageChange={onPageChange}
      />
    </>
  );
}

export function BooksSection() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = Math.max(1, Number(searchParams.get("page")) || 1);

  const { data, isPending } = useQuery({
    queryKey: ["books", page, PAGE_SIZE],
    queryFn: () => getBooks({ page, size: PAGE_SIZE }),
  });

  const books = data?.books ?? [];
  const totalBooksCount = data?.totalBooksCount ?? 0;

  useEffect(() => {
    if (!data) return;
    const total = data.totalBooksCount;
    const totalPages =
      total <= 0 ? 1 : Math.max(1, Math.floor((total + PAGE_SIZE - 1) / PAGE_SIZE));
    if (page > totalPages) {
      const p = new URLSearchParams(searchParams.toString());
      p.set("page", String(totalPages));
      router.replace(`${pathname}?${p.toString()}`);
    }
  }, [data, page, pathname, router, searchParams]);

  const setPage = (n: number) => {
    const p = new URLSearchParams(searchParams.toString());
    p.set("page", String(n));
    router.push(`${pathname}?${p.toString()}`);
  };

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
        ) : books.length ? (
          <BooksPagePanel
            key={page}
            books={books}
            totalBooksCount={totalBooksCount}
            page={page}
            onPageChange={setPage}
          />
        ) : (
          <p className="py-16 text-center text-[#496674]">등록된 도서가 없습니다.</p>
        )}
      </div>
    </>
  );
}
