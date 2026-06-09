import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface ListPaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const SIBLINGS = 1;

function getPageRange(current: number, total: number): (number | "...")[] {
  const pages: (number | "...")[] = [];

  const left = Math.max(0, current - SIBLINGS);
  const right = Math.min(total - 1, current + SIBLINGS);

  if (left > 0) {
    pages.push(0);
    if (left > 1) pages.push("...");
  }

  for (let i = left; i <= right; i++) pages.push(i);

  if (right < total - 1) {
    if (right < total - 2) pages.push("...");
    pages.push(total - 1);
  }

  return pages;
}

const ListPagination = ({ page, totalPages, onPageChange }: ListPaginationProps) => {
  if (totalPages <= 1) return null;

  const items = getPageRange(page, totalPages);

  return (
    <Pagination className="mt-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => page > 0 && onPageChange(page - 1)}
            aria-disabled={page === 0}
            className={page === 0 ? "pointer-events-none opacity-50" : "cursor-pointer"}
          />
        </PaginationItem>

        {items.map((item, i) =>
          item === "..." ? (
            <PaginationItem key={`ellipsis-${i}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={item}>
              <PaginationLink
                isActive={item === page}
                onClick={() => onPageChange(item)}
                className="cursor-pointer"
              >
                {item + 1}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        <PaginationItem>
          <PaginationNext
            onClick={() => page < totalPages - 1 && onPageChange(page + 1)}
            aria-disabled={page === totalPages - 1}
            className={page === totalPages - 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ListPagination;
