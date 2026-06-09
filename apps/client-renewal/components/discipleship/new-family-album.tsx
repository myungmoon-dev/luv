"use client";

import { useQuery } from "@tanstack/react-query";
import { Loader2, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { NewsPagination } from "@/components/news/news-pagination";
import { getAlbumList } from "@/lib/api-albums";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 9;

export function NewFamilyAlbum() {
  const [page, setPage] = useState(1);
  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null);

  const { data, isPending, isError } = useQuery({
    queryKey: ["albums", "newFamily", page],
    queryFn: () =>
      getAlbumList({
        type: "newFamily",
        page: page - 1,
        size: PAGE_SIZE,
      }),
  });

  const albums = data?.content ?? [];
  const total = data?.totalElements ?? 0;

  return (
    <section className="mt-12 border-t border-[#E6E6E6] pt-10">
      <div className="mb-6 flex flex-col gap-2 sm:mb-8">
        <h2 className="text-xl font-bold text-[#1e2a4a] sm:text-2xl">새가족 앨범</h2>
        <p className="text-sm text-[#496674]">새가족 행사·모임 사진을 모았습니다.</p>
      </div>

      {isPending ? (
        <div className="flex min-h-[200px] items-center justify-center rounded-2xl border border-[#E6E6E6] bg-white">
          <Loader2 className="size-10 animate-spin text-[#1e2a4a]" aria-hidden />
        </div>
      ) : isError ? (
        <p className="rounded-2xl border border-[#E6E6E6] bg-white px-6 py-10 text-center text-sm text-[#496674]">
          앨범을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.
        </p>
      ) : albums.length === 0 ? (
        <p className="rounded-2xl border border-[#E6E6E6] bg-[#f8fafc] px-6 py-12 text-center text-sm text-[#496674]">
          등록된 앨범이 없습니다.
        </p>
      ) : (
        <>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:gap-5">
            {albums.map((album) => {
              const cover = album.imageUrls?.[0];
              return (
                <li key={album.id}>
                  <button
                    type="button"
                    disabled={!cover}
                    onClick={() => cover && setLightboxUrl(cover)}
                    className={cn(
                      "group w-full overflow-hidden rounded-2xl border border-[#E6E6E6] bg-white text-left shadow-sm transition-all",
                      cover
                        ? "hover:-translate-y-0.5 hover:border-[#1e2a4a]/25 hover:shadow-md"
                        : "cursor-not-allowed opacity-60",
                    )}
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f0f4f9]">
                      {cover ? (
                        <Image
                          src={cover}
                          alt={album.title || "새가족 앨범"}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                          sizes="(max-width: 640px) 50vw, 33vw"
                          unoptimized
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-xs text-[#496674]">
                          이미지 없음
                        </div>
                      )}
                    </div>
                    {album.title ? (
                      <p className="line-clamp-2 px-3 py-2.5 text-xs font-medium text-[#1e2a4a] sm:px-3.5 sm:py-3 sm:text-sm">
                        {album.title}
                      </p>
                    ) : null}
                  </button>
                </li>
              );
            })}
          </ul>

          <NewsPagination
            currentPage={page}
            totalItems={total}
            pageSize={PAGE_SIZE}
            onPageChange={setPage}
          />
        </>
      )}

      {lightboxUrl ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          role="presentation"
          onClick={() => setLightboxUrl(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-[min(96vw,1200px)]"
            role="presentation"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxUrl(null)}
              className="absolute right-2 top-2 z-10 flex size-10 items-center justify-center rounded-full bg-white/95 text-[#1e2a4a] shadow-md transition hover:bg-white"
              aria-label="닫기"
            >
              <X className="size-5" aria-hidden />
            </button>
            <Image
              src={lightboxUrl}
              alt="확대 보기"
              width={1600}
              height={1200}
              className="max-h-[90vh] w-auto max-w-full object-contain"
              unoptimized
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
