"use client";

import { useMemo } from "react";

import { Button } from "@/components/ui/button";
import { paginationPageItems } from "@/lib/pagination-page-items";
import { cn } from "@/lib/utils";

type NewsPaginationProps = {
  currentPage: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  className?: string;
};

export function NewsPagination({
  currentPage,
  totalItems,
  pageSize,
  onPageChange,
  className,
}: NewsPaginationProps) {
  const safeSize = Math.max(1, pageSize);
  const totalPages =
    totalItems <= 0 ? 1 : Math.max(1, Math.floor((totalItems + safeSize - 1) / safeSize));
  const canPrev = currentPage > 1;
  const canNext = currentPage < totalPages;

  const pageItems = useMemo(
    () => paginationPageItems(currentPage, totalPages),
    [currentPage, totalPages],
  );

  /** 전체 0건일 때만 숨김 · 1쪽만 있어도 이전·번호·다음 UI는 그대로 두고 비활성 처리 */
  if (totalItems < 1) return null;

  const goToPage = (page: number) => {
    onPageChange(Math.min(Math.max(1, page), totalPages));
  };

  return (
    <nav
      className={cn(
        "flex flex-wrap items-center justify-center gap-1 pt-8 sm:gap-2",
        className,
      )}
      aria-label="페이지 선택"
    >
      <Button
        type="button"
        variant="outline"
        size="sm"
        disabled={!canPrev}
        onClick={() => goToPage(currentPage - 1)}
        className="min-w-16 border-[#1e2a4a]/25 text-[#1e2a4a]"
      >
        이전
      </Button>
      {pageItems.map((item, idx) =>
        item === "ellipsis" ? (
          <span
            key={`ellipsis-${idx}`}
            className="flex min-w-9 items-center justify-center px-1 text-sm text-[#496674]"
            aria-hidden
          >
            …
          </span>
        ) : (
          <Button
            key={item}
            type="button"
            variant={item === currentPage ? "default" : "outline"}
            size="sm"
            onClick={() => goToPage(item)}
            className={cn(
              "min-w-9 px-2 tabular-nums",
              item === currentPage
                ? "bg-[#1e2a4a] text-white hover:bg-[#1e2a4a]/90"
                : "border-[#1e2a4a]/25 text-[#1e2a4a]",
            )}
          >
            {item}
          </Button>
        ),
      )}
      <Button
        type="button"
        variant="outline"
        size="sm"
        disabled={!canNext}
        onClick={() => goToPage(currentPage + 1)}
        className="min-w-16 border-[#1e2a4a]/25 text-[#1e2a4a]"
      >
        다음
      </Button>
    </nav>
  );
}
