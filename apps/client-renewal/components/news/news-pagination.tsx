"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
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
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const canPrev = currentPage > 1;
  const canNext = currentPage < totalPages;

  if (totalItems <= pageSize && totalPages <= 1) return null;

  return (
    <div className={cn("flex items-center justify-center gap-4 pt-8", className)}>
      <Button
        type="button"
        variant="outline"
        size="sm"
        disabled={!canPrev}
        onClick={() => onPageChange(currentPage - 1)}
        className="border-[#E6E6E6]"
      >
        <ChevronLeft className="size-4" aria-hidden />
        이전
      </Button>
      <span className="text-sm tabular-nums text-[#496674]">
        {currentPage} / {totalPages}
      </span>
      <Button
        type="button"
        variant="outline"
        size="sm"
        disabled={!canNext}
        onClick={() => onPageChange(currentPage + 1)}
        className="border-[#E6E6E6]"
      >
        다음
        <ChevronRight className="size-4" aria-hidden />
      </Button>
    </div>
  );
}
