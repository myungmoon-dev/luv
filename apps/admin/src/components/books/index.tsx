import ListPagination from "@/components/common/ListPagination";
import { useDeleteBooks, useGetBooks } from "@/query/books";
import { useEffect, useState } from "react";
import { IBook } from "type";
import { Spinner } from "@/components/ui/spinner";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Trash2, Plus } from "lucide-react";
import { toast } from "sonner";
import dayjs from "dayjs";
import DeleteConfirmDialog from "@/components/common/DeleteConfirmDialog";
import BookFormDialog from "./BookFormDialog";
import BookDetailDialog from "./BookDetailDialog";

const Books = () => {
  const [page, setPage] = useState(0);
  const [formOpen, setFormOpen] = useState(false);
  const [detailTarget, setDetailTarget] = useState<IBook | null>(null);
  const [bulkDeleteOpen, setBulkDeleteOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [refetchKey, setRefetchKey] = useState(0);

  const { data, isFetching, refetch } = useGetBooks({ page });
  const { mutate: deleteBulk, isPending: isBulkDeleting } = useDeleteBooks();

  useEffect(() => {
    if (refetchKey) refetch();
  }, [refetchKey]);

  const content = data?.content ?? [];
  const allSelected = !!content.length && content.every((b) => selectedIds.has(b.id));
  const someSelected = !!content.length && content.some((b) => selectedIds.has(b.id));

  const handleToggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleToggleAll = () => {
    if (allSelected) {
      setSelectedIds((prev) => {
        const next = new Set(prev);
        content.forEach((b) => next.delete(b.id));
        return next;
      });
    } else {
      setSelectedIds((prev) => {
        const next = new Set(prev);
        content.forEach((b) => next.add(b.id));
        return next;
      });
    }
  };

  const handleBulkDelete = () => {
    const ids = Array.from(selectedIds);
    deleteBulk(ids, {
      onSuccess: async () => {
        toast.success(`${ids.length}개의 도서가 삭제되었습니다.`);
        setSelectedIds(new Set());
        await refetch();
      },
      onError: () => toast.error("에러가 발생했습니다."),
      onSettled: () => setBulkDeleteOpen(false),
    });
  };

  return (
    <>
      <Card className="overflow-hidden">
        <CardHeader className="pb-3 pt-3">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              {selectedIds.size > 0 && (
                <Button size="sm" variant="destructive" onClick={() => setBulkDeleteOpen(true)}>
                  <Trash2 className="mr-1.5 size-4" />
                  {selectedIds.size}개 삭제
                </Button>
              )}
            </div>
            <Button size="sm" onClick={() => setFormOpen(true)}>
              <Plus className="mr-1.5 size-4" />
              도서 추가
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table className="table-fixed">
            <TableHeader>
              <TableRow>
                <TableHead className="w-8 px-2 text-center sm:w-10">
                  <Checkbox
                    checked={allSelected}
                    data-state={someSelected && !allSelected ? "indeterminate" : undefined}
                    onCheckedChange={handleToggleAll}
                    aria-label="전체 선택"
                  />
                </TableHead>
                <TableHead className="hidden w-24 text-center text-xs sm:table-cell sm:text-sm">날짜</TableHead>
                <TableHead className="px-3 text-center text-xs sm:text-sm">제목</TableHead>
                <TableHead className="hidden w-24 text-center text-xs sm:table-cell sm:text-sm">작가</TableHead>
                <TableHead className="hidden w-28 text-center text-xs sm:table-cell sm:text-sm">생성일</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isFetching ? (
                <TableRow>
                  <TableCell colSpan={5} className="h-32 text-center">
                    <Spinner className="mx-auto" />
                  </TableCell>
                </TableRow>
              ) : !content.length ? (
                <TableRow>
                  <TableCell colSpan={5} className="h-32 text-center text-sm text-muted-foreground">
                    등록된 도서가 없습니다.
                  </TableCell>
                </TableRow>
              ) : content.map((book) => (
                <TableRow
                  key={book.id}
                  className="cursor-pointer"
                  onClick={() => setTimeout(() => setDetailTarget(book), 0)}
                >
                  <TableCell className="px-2 text-center" onClick={(e) => e.stopPropagation()}>
                    <Checkbox
                      checked={selectedIds.has(book.id)}
                      onCheckedChange={() => handleToggleSelect(book.id)}
                      aria-label="선택"
                    />
                  </TableCell>
                  <TableCell className="text-muted-foreground hidden py-3 text-center text-xs sm:table-cell sm:text-sm">
                    {book.date}
                  </TableCell>
                  <TableCell className="py-3 px-3 text-center text-xs font-medium sm:text-sm">
                    <p className="truncate">{book.title}</p>
                  </TableCell>
                  <TableCell className="text-muted-foreground hidden py-3 text-center text-xs sm:table-cell sm:text-sm">
                    <p className="truncate">{book.writer}</p>
                  </TableCell>
                  <TableCell className="text-muted-foreground hidden py-3 text-center text-xs sm:table-cell sm:text-sm">
                    {book.createdAt ? dayjs(book.createdAt).format("YYYY-MM-DD") : "—"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <ListPagination page={page} totalPages={data?.totalPages ?? 0} onPageChange={setPage} />

      <BookFormDialog
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSuccess={() => setRefetchKey((k) => k + 1)}
      />

      <BookDetailDialog
        book={detailTarget}
        onClose={() => setDetailTarget(null)}
        onSuccess={async () => {
          const result = await refetch();
          const updated = result.data?.content.find((b) => b.id === detailTarget?.id);
          if (updated) setDetailTarget(updated);
        }}
      />

      <DeleteConfirmDialog
        open={bulkDeleteOpen}
        onOpenChange={(o) => !o && setBulkDeleteOpen(false)}
        onConfirm={handleBulkDelete}
        title={`${selectedIds.size}개의 도서를 삭제하시겠습니까?`}
        isPending={isBulkDeleting}
      />
    </>
  );
};

export default Books;
