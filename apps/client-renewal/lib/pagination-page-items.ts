export type PaginationPageItem = number | "ellipsis";

/** 총 페이지가 많을 때 현재 주변 번호만 보이게 하고 나머지는 생략(…) 처리 */
export function paginationPageItems(
  currentPage: number,
  totalPages: number,
): PaginationPageItem[] {
  if (totalPages <= 9) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const items: PaginationPageItem[] = [];
  const pushEllipsis = () => {
    if (items[items.length - 1] !== "ellipsis") items.push("ellipsis");
  };

  items.push(1);
  const windowStart = Math.max(2, currentPage - 1);
  const windowEnd = Math.min(totalPages - 1, currentPage + 1);

  if (windowStart > 2) pushEllipsis();
  for (let p = windowStart; p <= windowEnd; p++) items.push(p);
  if (windowEnd < totalPages - 1) pushEllipsis();
  items.push(totalPages);

  return items;
}
