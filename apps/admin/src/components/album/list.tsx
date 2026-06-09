import ListPagination from "@/components/common/ListPagination";
import { useDeleteAlbum, useDeleteAlbums, useGetAlbumList } from "@/query/album";
import { useEffect, useState } from "react";
import { IAlbum, AlbumType } from "type";
import { Spinner } from "@/components/ui/spinner";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Card, CardContent, CardHeader } from "../ui/card";
import { ALBUM_TYPE_OPTIONS } from "./config";
import { toast } from "sonner";
import { Trash2, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
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
import AlbumDetailDialog from "./AlbumDetailDialog";

interface IAlbumListProps {
  type: AlbumType | "all";
  refetchKey?: number;
  onRefetch?: () => void;
}

const AlbumList = ({ type, refetchKey, onRefetch }: IAlbumListProps) => {
  const [page, setPage] = useState(0);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const [bulkDeleteOpen, setBulkDeleteOpen] = useState(false);
  const [detailTarget, setDetailTarget] = useState<IAlbum | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const { data, isFetching, refetch } = useGetAlbumList(type, page);

  useEffect(() => {
    if (refetchKey) refetch();
  }, [refetchKey]);
  const { mutate: deleteAlbum, isPending: isDeleting } = useDeleteAlbum();
  const { mutate: deleteBulk, isPending: isBulkDeleting } = useDeleteAlbums();

  const handleDelete = () => {
    if (!deleteTargetId) return;
    deleteAlbum(deleteTargetId, {
      onSuccess: async () => {
        toast.success("삭제되었습니다.");
        await refetch();
        onRefetch?.();
      },
      onError: () => toast.error("에러가 발생했습니다."),
      onSettled: () => setDeleteTargetId(null),
    });
  };

  const handleBulkDelete = () => {
    const ids = Array.from(selectedIds);
    deleteBulk(ids, {
      onSuccess: async () => {
        toast.success(`${ids.length}개의 앨범이 삭제되었습니다.`);
        setSelectedIds(new Set());
        await refetch();
        onRefetch?.();
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

  const PAGE_SIZE = 10;
  const content = data?.content ?? [];
  const totalPages = data?.totalPages ?? Math.ceil((data?.totalElements ?? 0) / PAGE_SIZE);
  const allSelected = !!content.length && content.every((a) => selectedIds.has(a.id));
  const someSelected = !!content.length && content.some((a) => selectedIds.has(a.id));

  const handleToggleAll = () => {
    if (allSelected) {
      setSelectedIds((prev) => {
        const next = new Set(prev);
        content.forEach((a) => next.delete(a.id));
        return next;
      });
    } else {
      setSelectedIds((prev) => {
        const next = new Set(prev);
        content.forEach((a) => next.add(a.id));
        return next;
      });
    }
  };

  return (
    <>
      <Card className="overflow-hidden">
        <CardHeader className="pb-3 pt-3">
          <div className="flex h-8 items-center gap-2">
            {selectedIds.size > 0 && (
              <Button size="sm" variant="destructive" onClick={() => setBulkDeleteOpen(true)}>
                <Trash2 className="mr-1.5 size-4" />
                {selectedIds.size}개 삭제
              </Button>
            )}
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
                  <TableHead className="w-20 text-center text-xs sm:w-24 sm:text-sm">카테고리</TableHead>
                  <TableHead className="hidden w-24 text-center text-xs sm:table-cell sm:text-sm">행사일</TableHead>
                  <TableHead className="px-3 text-center text-xs sm:text-sm">제목</TableHead>
                  <TableHead className="hidden w-28 text-center text-xs sm:table-cell sm:text-sm">생성일</TableHead>
                  <TableHead className="w-8 px-2 sm:w-10"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isFetching ? (
                  <TableRow>
                    <TableCell colSpan={6} className="h-32 text-center">
                      <Spinner className="mx-auto" />
                    </TableCell>
                  </TableRow>
                ) : !content.length ? (
                  <TableRow>
                    <TableCell colSpan={6} className="h-32 text-center text-sm text-muted-foreground">
                      등록된 앨범이 없습니다.
                    </TableCell>
                  </TableRow>
                ) : content.map((album) => {
                  const typeLabel = ALBUM_TYPE_OPTIONS.find((o) => o.value === album.albumType)?.label ?? "";
                  return (
                    <TableRow
                      key={album.id}
                      className="group cursor-pointer"
                      onClick={() => setTimeout(() => setDetailTarget(album), 0)}
                    >
                      <TableCell className="px-2 text-center" onClick={(e) => e.stopPropagation()}>
                        <Checkbox
                          checked={selectedIds.has(album.id)}
                          onCheckedChange={() => handleToggleSelect(album.id)}
                          aria-label="선택"
                        />
                      </TableCell>
                      <TableCell className="py-3 text-center text-xs sm:text-sm">
                        <p className="truncate">{typeLabel}</p>
                      </TableCell>
                      <TableCell className="text-muted-foreground hidden py-3 text-center text-xs sm:table-cell sm:text-sm">
                        {album.date}
                      </TableCell>
                      <TableCell className="py-3 px-3 text-center text-xs font-medium sm:text-sm">
                        <p className="truncate">{album.title}</p>
                      </TableCell>
                      <TableCell className="text-muted-foreground hidden py-3 text-center text-xs sm:table-cell sm:text-sm">
                        {album.createdAt ? new Date(album.createdAt).toLocaleDateString("ko-KR") : "—"}
                      </TableCell>
                      <TableCell className="py-3 px-2 sm:px-4" onClick={(e) => e.stopPropagation()}>
                        <button
                          className="flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive sm:size-8"
                          onClick={() => setTimeout(() => setDeleteTargetId(album.id), 0)}
                        >
                          <Trash2 className="size-3.5 sm:size-4" />
                        </button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
        </CardContent>
      </Card>

      <ListPagination page={page} totalPages={totalPages} onPageChange={setPage} />

      <AlbumDetailDialog
        album={detailTarget}
        onClose={() => setDetailTarget(null)}
        onSuccess={async () => {
          const result = await refetch();
          const updated = result.data?.content.find((a) => a.id === detailTarget?.id);
          if (updated) setDetailTarget(updated);
          onRefetch?.();
        }}
      />

      {/* 단건 삭제 */}
      <AlertDialog open={!!deleteTargetId} onOpenChange={(o) => !o && setDeleteTargetId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>앨범을 삭제하시겠습니까?</AlertDialogTitle>
            <AlertDialogDescription>삭제된 내용은 복구할 수 없습니다.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>취소</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={(e) => { e.preventDefault(); handleDelete(); }}
              disabled={isDeleting}
            >
              {isDeleting && <Loader2 className="mr-2 size-4 animate-spin" />}
              삭제
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* 다건 삭제 */}
      <AlertDialog open={bulkDeleteOpen} onOpenChange={(o) => !o && setBulkDeleteOpen(false)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{selectedIds.size}개의 앨범을 삭제하시겠습니까?</AlertDialogTitle>
            <AlertDialogDescription>삭제된 내용은 복구할 수 없습니다.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isBulkDeleting}>취소</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={(e) => { e.preventDefault(); handleBulkDelete(); }}
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

export default AlbumList;
