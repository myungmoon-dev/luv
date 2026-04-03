"use client";

import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import { DiscipleshipSubPage } from "@/components/discipleship/discipleship-sub-page";
import { NewsPagination } from "@/components/news/news-pagination";
import type { IHomeWorship } from "type";
import { cn } from "@/lib/utils";
import { getHomeWorships } from "@/lib/api-homeworship";

const PAGE_SIZE = 8;

function HomeWorshipListItem({ item, onClick }: { item: IHomeWorship; onClick: () => void }) {
  const imageUrl = item.imageUrls?.[0] ?? "/images/home/homeworship.png";
  const date = item.date ? dayjs(item.date).format("YYYY MM DD") : dayjs(item.createdAt).format("YYYY MM DD");

  return (
    <div
      onClick={onClick}
      className="relative group cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={item.title || "가정예배 이미지"}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {item.comments?.length > 0 ? (
          <div className="absolute bottom-1.5 right-1.5 flex items-center gap-0.5 rounded-full bg-black/60 px-1.5 py-0.5 text-white sm:bottom-2 sm:right-2 sm:gap-1 sm:px-3 sm:py-1">
            <svg className="size-3.5 sm:size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="text-xs font-bold sm:text-sm">{item.comments.length}</span>
          </div>
        ) : null}
      </div>

      <div className="p-2 sm:p-3">
        <h3 className="line-clamp-2 break-keep text-xs font-medium text-gray-800 sm:text-sm">
          {item.title || "가정예배 갤러리"}
        </h3>
        <div className="mt-1 flex items-center justify-between text-[10px] text-gray-400 sm:text-xs">
          <span className="text-blue-900">{item.userName}</span>
          <span>{date}</span>
        </div>
      </div>

      {item.isPinned ? (
        <div
          className={cn(
            "absolute left-2 top-2 rounded bg-red-600/90 px-2 py-1 text-[10px] font-semibold text-white sm:px-2.5 sm:py-1.5 sm:text-xs",
          )}
        >
          고정
        </div>
      ) : null}
    </div>
  );
}

export function FamilyWorshipSection() {
  const router = useRouter();
  const [page, setPage] = useState(1);

  const { data, isPending } = useQuery({
    queryKey: ["homeworships", page, PAGE_SIZE],
    queryFn: () => getHomeWorships({ page, size: PAGE_SIZE }),
  });

  const list = useMemo(() => data?.homeworships ?? [], [data?.homeworships]);

  return (
    <DiscipleshipSubPage
      title="맛있는 가정예배"
      description="가정에서 함께 예배하며 말씀과 기도로 하루를 여는 시간을 돕습니다."
      contentMaxWidth="max-w-5xl"
    >
      <div className="flex flex-col gap-6">
        {/* 헤더 */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <h2 className="break-keep text-xl font-bold text-[#111111] sm:text-2xl">맛있는 가정예배</h2>
            <button
              type="button"
              onClick={() => router.push("/discipleship/family-worship/create")}
              className="shrink-0 rounded-full bg-[#1e3a5f] px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-[#2d4a6f] sm:px-6 sm:py-2.5 sm:text-sm md:px-8 md:py-3 md:text-base"
            >
              예배 인증하기
            </button>
          </div>

          <div className="flex flex-col gap-2 sm:gap-3">
            <p className="break-keep text-sm font-medium text-gray-700 sm:text-base md:text-lg">
              예배의 갈등, 나눔의 기쁨을 함께해 주세요!
            </p>
            <p className="break-keep text-xs leading-relaxed text-blue-950 sm:text-sm md:text-base">
              가정예배 후, 그 은혜로운 순간을 사진과 함께 나누어 주세요. 맛있는 식탁, 단란한 예배의 모습,
              은혜로운 간증 등 자유롭게 올려주시면 다른 성도들에게도 큰 은혜와 도전이 됩니다.
            </p>
          </div>
        </div>

        {/* 목록 */}
        {isPending ? (
          <div className="flex min-h-[240px] items-center justify-center rounded-2xl bg-white">
            <Loader2 className="size-10 animate-spin text-[#1e2a4a]" aria-hidden />
          </div>
        ) : list.length === 0 ? (
          <div className="flex min-h-[240px] flex-col items-center justify-center gap-3 rounded-2xl border border-[#E6E6E6] bg-white p-10 text-center">
            <p className="text-sm font-medium text-[#496674]">아직 작성된 예배 인증이 없습니다</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2 sm:gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
            {list.map((item) => (
              <HomeWorshipListItem key={item._id} item={item} onClick={() => router.push(`/discipleship/family-worship/${item._id}`)} />
            ))}
          </div>
        )}

        {data ? (
          <NewsPagination
            currentPage={page}
            totalItems={data.totalHomeworships}
            pageSize={PAGE_SIZE}
            onPageChange={setPage}
            className="pt-2"
          />
        ) : null}
      </div>

      {/* 플로팅 버튼 */}
      <button
        type="button"
        onClick={() => router.push("/discipleship/family-worship/create")}
        className="fixed bottom-4 right-4 z-40 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-blue-950 text-white shadow-lg transition-all hover:scale-110 hover:bg-[#2d4a6f] sm:bottom-6 sm:right-6 sm:h-14 sm:w-14 md:bottom-8 md:right-8"
        aria-label="예배 인증하기"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </button>
    </DiscipleshipSubPage>
  );
}

