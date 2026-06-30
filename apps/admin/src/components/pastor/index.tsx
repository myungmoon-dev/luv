import { useDeletePastorBook, useGetPastorBooks } from "@/query/pastor";
import ListPagination from "@/components/common/ListPagination";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import DeleteConfirmDialog from "@/components/common/DeleteConfirmDialog";
import PastorBookFormDialog from "./PastorBookFormDialog";
import type { IPastorBook } from "type";

const PastorBooks = () => {
  const [page, setPage] = useState(0);
  const [formOpen, setFormOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<IPastorBook | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<IPastorBook | null>(null);

  const { data, isFetching } = useGetPastorBooks({ page });
  const { mutate: deleteBook, isPending: isDeleting } = useDeletePastorBook();

  const books = data?.content ?? [];

  const handleDelete = () => {
    if (!deleteTarget) return;
    deleteBook(
      { id: deleteTarget.id },
      {
        onSuccess: () => { toast.success("삭제되었습니다."); setDeleteTarget(null); },
        onError: () => toast.error("에러가 발생했습니다."),
      },
    );
  };

  return (
    <>
      <Card className="overflow-hidden">
        <CardHeader className="pb-3 pt-3">
          <div className="flex items-center justify-end">
            <Button size="sm" onClick={() => { setEditTarget(null); setFormOpen(true); }}>
              <Plus className="mr-1.5 size-4" />
              저서 추가
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table className="table-fixed">
            <TableHeader>
              <TableRow>
                <TableHead className="px-4 text-xs sm:text-sm">제목</TableHead>
                <TableHead className="hidden w-32 text-center text-xs sm:table-cell sm:text-sm">출판사</TableHead>
                <TableHead className="w-20 text-center text-xs sm:text-sm">연도</TableHead>
                <TableHead className="w-20 text-center text-xs sm:text-sm">관리</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isFetching ? (
                <TableRow>
                  <TableCell colSpan={4} className="h-32 text-center">
                    <Spinner className="mx-auto" />
                  </TableCell>
                </TableRow>
              ) : !books.length ? (
                <TableRow>
                  <TableCell colSpan={4} className="h-32 text-center text-sm text-muted-foreground">
                    등록된 저서가 없습니다.
                  </TableCell>
                </TableRow>
              ) : books.map((book) => (
                <TableRow key={book.id}>
                  <TableCell className="px-4 py-3">
                    <p className="truncate text-sm font-medium">{book.title}</p>
                    {book.sub && <p className="truncate text-xs text-muted-foreground">{book.sub}</p>}
                  </TableCell>
                  <TableCell className="hidden py-3 text-center text-xs text-muted-foreground sm:table-cell sm:text-sm">
                    {book.publisher}
                  </TableCell>
                  <TableCell className="py-3 text-center text-xs text-muted-foreground sm:text-sm">
                    {book.year}
                  </TableCell>
                  <TableCell className="py-3 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="size-7"
                        onClick={() => { setEditTarget(book); setFormOpen(true); }}
                      >
                        <Pencil className="size-3.5" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="size-7 text-destructive hover:text-destructive"
                        onClick={() => setDeleteTarget(book)}
                      >
                        <Trash2 className="size-3.5" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <ListPagination page={page} totalPages={data?.totalPages ?? 0} onPageChange={setPage} />

      <PastorBookFormDialog
        open={formOpen}
        onClose={() => { setFormOpen(false); setEditTarget(null); }}
        target={editTarget}
      />

      <DeleteConfirmDialog
        open={!!deleteTarget}
        onOpenChange={(o) => !o && setDeleteTarget(null)}
        onConfirm={handleDelete}
        title="저서를 삭제하시겠습니까?"
        isPending={isDeleting}
      />
    </>
  );
};

export default PastorBooks;
