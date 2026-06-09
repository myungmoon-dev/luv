import {
  Pagination,
  PaginationContent,
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

const ListPagination = ({ page, totalPages, onPageChange }: ListPaginationProps) => {
  if (totalPages <= 1) return null;

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
        {Array.from({ length: totalPages }, (_, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              isActive={i === page}
              onClick={() => onPageChange(i)}
              className="cursor-pointer"
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
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
