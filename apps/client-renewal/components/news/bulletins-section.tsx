"use client";

import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { NewsPagination } from "@/components/news/news-pagination";
import { NewsNavStrip } from "@/components/news/news-section-nav";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { getBulletin, getBulletins } from "@/lib/api-bulletins";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 10;

export function BulletinsSection() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = Math.max(1, Number(searchParams.get("page")) || 1);

  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const { data: listData, isPending } = useQuery({
    queryKey: ["bulletins", page, PAGE_SIZE],
    queryFn: () => getBulletins({ page, size: PAGE_SIZE }),
  });

  const { data: detail, isPending: detailPending } = useQuery({
    queryKey: ["bulletin", selectedId],
    queryFn: () => getBulletin(selectedId!),
    enabled: !!selectedId && open,
  });

  useEffect(() => {
    if (!open) setSelectedId(null);
  }, [open]);

  const setPage = (n: number) => {
    const p = new URLSearchParams(searchParams.toString());
    p.set("page", String(n));
    router.push(`${pathname}?${p.toString()}`);
  };

  useEffect(() => {
    if (!listData) return;
    const total = listData.totalBulletins;
    const totalPages =
      total <= 0 ? 1 : Math.max(1, Math.floor((total + PAGE_SIZE - 1) / PAGE_SIZE));
    if (page > totalPages) {
      const p = new URLSearchParams(searchParams.toString());
      p.set("page", String(totalPages));
      router.replace(`${pathname}?${p.toString()}`);
    }
  }, [listData, page, pathname, router, searchParams]);

  const openBulletin = (id: string) => {
    setSelectedId(id);
    setOpen(true);
  };

  const [imgIdx, setImgIdx] = useState(0);
  useEffect(() => {
    setImgIdx(0);
  }, [selectedId, detail?._id]);

  return (
    <>
      <NewsNavStrip />
      <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-[#1e2a4a] sm:text-3xl">주보</h1>
        <p className="mt-2 text-sm text-[#496674]">날짜별 주보 이미지를 확인할 수 있습니다.</p>
      </header>

      {isPending ? (
        <div className="flex min-h-[200px] items-center justify-center">
          <Loader2 className="size-10 animate-spin text-[#1e2a4a]" aria-hidden />
        </div>
      ) : (
        <>
          <div className="overflow-hidden rounded-xl border border-[#E6E6E6] bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[#E6E6E6] bg-[#f8fafc] text-[#496674]">
                  <th className="hidden w-36 px-4 py-3 font-semibold sm:table-cell">날짜</th>
                  <th className="px-4 py-3 font-semibold">제목</th>
                  <th className="hidden w-28 px-4 py-3 font-semibold md:table-cell">작성</th>
                </tr>
              </thead>
              <tbody>
                {(listData?.bulletins ?? []).map((b) => (
                  <tr
                    key={b._id}
                    className="cursor-pointer border-b border-[#E6E6E6] last:border-0 hover:bg-[#fafbfc]"
                    onClick={() => openBulletin(b._id)}
                  >
                    <td className="hidden whitespace-nowrap px-4 py-3 text-[#496674] sm:table-cell">
                      {dayjs(b.date).format("YYYY.MM.DD")}
                    </td>
                    <td className="px-4 py-3 font-medium text-[#1e2a4a]">
                      <span className="sm:hidden">{dayjs(b.date).format("YY.MM.DD")} · </span>
                      {b.title}
                    </td>
                    <td className="hidden px-4 py-3 text-[#496674] md:table-cell">관리자</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <NewsPagination
            currentPage={page}
            totalItems={listData?.totalBulletins ?? 0}
            pageSize={PAGE_SIZE}
            onPageChange={setPage}
          />
        </>
      )}
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-full overflow-y-auto border-[#E6E6E6] p-0 sm:max-w-2xl lg:max-w-4xl"
        >
          {detailPending || !detail ? (
            <div className="flex min-h-[240px] items-center justify-center p-8">
              <Loader2 className="size-10 animate-spin text-[#1e2a4a]" />
            </div>
          ) : (
            <div className="flex flex-col gap-4 p-6 sm:p-8">
              <div>
                <p className="text-xs font-medium text-[#496674]">
                  {dayjs(detail.date).format("YYYY.MM.DD")}
                </p>
                <h2 className="mt-1 text-xl font-bold text-[#1e2a4a]">주보 · {detail.title}</h2>
              </div>
              {detail.imageUrls?.length ? (
                <>
                  <div className="relative aspect-[3/4] w-full max-h-[70vh] bg-[#f4f4f4]">
                    <Image
                      src={detail.imageUrls[imgIdx]}
                      alt={`${detail.title} ${imgIdx + 1}`}
                      fill
                      className="object-contain"
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 896px"
                    />
                  </div>
                  {detail.imageUrls.length > 1 ? (
                    <div className="flex justify-center gap-2">
                      <button
                        type="button"
                        className={cn(
                          "rounded-md border px-3 py-1.5 text-sm",
                          imgIdx === 0 ? "opacity-40" : "border-[#E6E6E6] hover:bg-[#fafbfc]",
                        )}
                        disabled={imgIdx === 0}
                        onClick={() => setImgIdx((i) => Math.max(0, i - 1))}
                      >
                        이전 장
                      </button>
                      <span className="self-center text-sm text-[#496674]">
                        {imgIdx + 1} / {detail.imageUrls.length}
                      </span>
                      <button
                        type="button"
                        className={cn(
                          "rounded-md border px-3 py-1.5 text-sm",
                          imgIdx >= detail.imageUrls.length - 1
                            ? "opacity-40"
                            : "border-[#E6E6E6] hover:bg-[#fafbfc]",
                        )}
                        disabled={imgIdx >= detail.imageUrls.length - 1}
                        onClick={() => setImgIdx((i) => Math.min(detail.imageUrls.length - 1, i + 1))}
                      >
                        다음 장
                      </button>
                    </div>
                  ) : null}
                </>
              ) : (
                <p className="text-sm text-[#496674]">등록된 이미지가 없습니다.</p>
              )}
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
