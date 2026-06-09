import ListPagination from "@/components/common/ListPagination";
import { useDeleteHomeWorship, useDeleteHomeWorships, useGetHomeWorships, usePatchHomeWorship } from "@/query/homeWorship";
import { IHomeWorship } from "type";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Trash2, Plus, Loader2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { toast } from "sonner";
import { Checkbox } from "../ui/checkbox";
import HomeWorshipDetailDialog from "./HomeWorshipDetailDialog";
import HomeWorshipFormDialog from "./HomeWorshipFormDialog";

const HomeWorship = () => {
  const [page, setPage] = useState(0);
  const [formOpen, setFormOpen] = useState(false);
  const [detailTarget, setDetailTarget] = useState<IHomeWorship | null>(null);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const [bulkDeleteOpen, setBulkDeleteOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const PAGE_SIZE = 10;
  const { data: res, isFetching, refetch } = useGetHomeWorships({ page });
  const data = res?.content;
  const totalPages = res?.totalPages ?? Math.ceil((res?.totalElements ?? 0) / PAGE_SIZE);

  const { mutate: deleteSingle, isPending: isDeleting } = useDeleteHomeWorship();
  const { mutate: deleteBulk, isPending: isBulkDeleting } = useDeleteHomeWorships();
  const { mutate: patchHW } = usePatchHomeWorship();

  const handlePinChange = (hw: IHomeWorship, value: string) => {
    const formData = new FormData();
    formData.append("title", hw.title);
    formData.append("date", hw.date);
    formData.append("content", hw.content ?? "");
    formData.append("userName", hw.userName);
    formData.append("isPinned", value);
    formData.append("password", "admin1234");
    patchHW({ id: hw.id, formData }, {
      onSuccess: async () => { toast.success("공지 여부가 변경되었습니다."); await refetch(); },
      onError: () => toast.error("에러가 발생했습니다."),
    });
  };

  const handleDelete = () => {
    if (!deleteTargetId) return;
    deleteSingle(deleteTargetId, {
      onSuccess: async () => {
        toast.success("삭제되었습니다.");
        await refetch();
      },
      onError: () => toast.error("에러가 발생했습니다."),
      onSettled: () => setDeleteTargetId(null),
    });
  };

  const handleBulkDelete = () => {
    const ids = Array.from(selectedIds);
    deleteBulk(ids, {
      onSuccess: async () => {
        toast.success(`${ids.length}개가 삭제되었습니다.`);
        setSelectedIds(new Set());
        await refetch();
      },
      onError: () => toast.error("에러가 발생했습니다."),
      onSettled: () => setBulkDeleteOpen(false),
    });
  };

  const handleToggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const allSelected = !!data?.length && data.every((h) => selectedIds.has(h.id));
  const someSelected = !!data?.length && data.some((h) => selectedIds.has(h.id));

  const handleToggleAll = () => {
    if (allSelected) {
      setSelectedIds((prev) => {
        const next = new Set(prev);
        data?.forEach((h) => next.delete(h.id));
        return next;
      });
    } else {
      setSelectedIds((prev) => {
        const next = new Set(prev);
        data?.forEach((h) => next.add(h.id));
        return next;
      });
    }
  };

  return (
    <>
      <Card>
        <CardHeader className="pb-3">
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
              <span className="hidden xs:inline">글 추가</span>
              <span className="xs:hidden">추가</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {isFetching ? (
            <div className="flex h-32 items-center justify-center">
              <Spinner />
            </div>
          ) : !data?.length ? (
            <div className="text-muted-foreground flex h-32 items-center justify-center text-sm">
              등록된 가정예배 글이 없습니다.
            </div>
          ) : (
            <Table className="table-fixed">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-8 px-2 text-center sm:w-10 sm:px-4">
                    <Checkbox
                      checked={allSelected}
                      data-state={someSelected && !allSelected ? "indeterminate" : undefined}
                      onCheckedChange={handleToggleAll}
                      aria-label="전체 선택"
                    />
                  </TableHead>
                  <TableHead className="w-24 px-4 text-center text-xs sm:w-28 sm:text-sm">공지</TableHead>
                  <TableHead className="hidden w-24 px-4 text-center text-xs sm:table-cell sm:w-32 sm:text-sm">날짜</TableHead>
                  <TableHead className="w-[40%] text-center text-xs sm:w-[35%] sm:text-sm">제목</TableHead>
                  <TableHead className="w-24 text-center text-xs sm:table-cell sm:w-28 sm:text-sm">작성자</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((homeworship) => (
                  <TableRow
                    key={homeworship.id}
                    className="group cursor-pointer"
                    onClick={() => setTimeout(() => setDetailTarget(homeworship), 0)}
                  >
                    <TableCell
                      className="py-3 px-2 text-center sm:px-4"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Checkbox
                        checked={selectedIds.has(homeworship.id)}
                        onCheckedChange={() => handleToggleSelect(homeworship.id)}
                        aria-label="선택"
                      />
                    </TableCell>
                    <TableCell className="py-3 px-4 text-center" onClick={(e) => e.stopPropagation()}>
                      <Select
                        value={homeworship.isPinned ? "true" : "false"}
                        onValueChange={(v) => handlePinChange(homeworship, v)}
                      >
                        <SelectTrigger className="mx-auto h-7 w-14 px-2 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="true" className="text-xs">Y</SelectItem>
                          <SelectItem value="false" className="text-xs">N</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="text-muted-foreground hidden py-3 px-4 text-center text-xs sm:table-cell sm:text-sm">
                      {homeworship.date || "—"}
                    </TableCell>
                    <TableCell className="overflow-hidden py-3 px-2 text-xs font-medium sm:text-sm">
                      <p className="truncate text-center">{homeworship.title || <span className="text-muted-foreground">—</span>}</p>
                    </TableCell>
                    <TableCell className="text-muted-foreground w-24 py-3 px-2 text-center text-xs sm:w-28 sm:text-sm">
                      <p className="truncate">{homeworship.userName || "—"}</p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
      <ListPagination page={page} totalPages={totalPages} onPageChange={setPage} />

      <HomeWorshipFormDialog open={formOpen} onClose={() => setFormOpen(false)} onSuccess={refetch} />

      <HomeWorshipDetailDialog
        homeworship={detailTarget}
        onClose={() => setDetailTarget(null)}
        onSuccess={refetch}
      />

      {/* 단건 삭제 */}
      <AlertDialog
        open={!!deleteTargetId}
        onOpenChange={(open) => !open && setDeleteTargetId(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>가정예배 글을 삭제하시겠습니까?</AlertDialogTitle>
            <AlertDialogDescription>삭제된 내용은 복구할 수 없습니다.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>취소</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={(e) => {
                e.preventDefault();
                handleDelete();
              }}
              disabled={isDeleting}
            >
              {isDeleting && <Loader2 className="mr-2 size-4 animate-spin" />}
              삭제
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* 다건 삭제 */}
      <AlertDialog open={bulkDeleteOpen} onOpenChange={(open) => !open && setBulkDeleteOpen(false)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{selectedIds.size}개의 글을 삭제하시겠습니까?</AlertDialogTitle>
            <AlertDialogDescription>삭제된 내용은 복구할 수 없습니다.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isBulkDeleting}>취소</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={(e) => {
                e.preventDefault();
                handleBulkDelete();
              }}
              disabled={isBulkDeleting}
            >
              {isBulkDeleting && <Loader2 className="mr-2 size-4 animate-spin" />}
              삭제
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default HomeWorship;
