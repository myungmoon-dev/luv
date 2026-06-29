import DeleteConfirmDialog from "@/components/common/DeleteConfirmDialog";
import ListPagination from "@/components/common/ListPagination";
import { useDeleteBulletin, useDeleteBulletins, useGetAvailableDates, useGetBulletins } from "@/query/bulletin";
import { IBulletin } from "type";
import { Spinner } from "@/components/ui/spinner";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Trash2, Plus } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import BulletinFormDialog from "./BulletinFormDialog";
import BulletinDetailDialog from "./BulletinDetailDialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";

const Bulletins = () => {
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const [bulkDeleteOpen, setBulkDeleteOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [detailTarget, setDetailTarget] = useState<IBulletin | null>(null);
  const [page, setPage] = useState(0);
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedMonth, setSelectedMonth] = useState<string>("all");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const { data: availableDates } = useGetAvailableDates();
  const years = availableDates ? Object.keys(availableDates).sort((a, b) => Number(b) - Number(a)) : [];
  const months = selectedYear !== "all" && availableDates?.[selectedYear]
    ? [...availableDates[selectedYear]].sort((a, b) => Number(a) - Number(b))
    : [];

  const { data: res, isFetching, refetch } = useGetBulletins({
    page,
    year: selectedYear !== "all" ? selectedYear : undefined,
    month: selectedMonth !== "all" ? selectedMonth : undefined,
  });
  const PAGE_SIZE = 10;
  const data = res?.content;
  const totalPages = res?.totalPages ?? Math.ceil((res?.totalElements ?? 0) / PAGE_SIZE);

  const { mutate: deleteSingle, isPending: isDeleting } = useDeleteBulletin();
  const { mutate: deleteBulk, isPending: isBulkDeleting } = useDeleteBulletins();

  const handleDelete = () => {
    if (!deleteTargetId) return;
    deleteSingle(deleteTargetId, {
      onSuccess: async () => {
        toast.success("주보가 삭제되었습니다.");
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
        toast.success(`${ids.length}개의 주보가 삭제되었습니다.`);
        setSelectedIds(new Set());
        await refetch();
      },
      onError: () => toast.error("에러가 발생했습니다."),
      onSettled: () => setBulkDeleteOpen(false),
    });
  };

  const handleOpenDetail = (bulletin: IBulletin) => {
    setTimeout(() => setDetailTarget(bulletin), 0);
  };

  const handleOpenDelete = (id: string) => {
    setTimeout(() => setDeleteTargetId(id), 0);
  };

  const handleToggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const allSelected = !!data?.length && data.every((b) => selectedIds.has(b.id));
  const someSelected = !!data?.length && data.some((b) => selectedIds.has(b.id));

  const handleToggleAll = () => {
    if (allSelected) {
      setSelectedIds((prev) => {
        const next = new Set(prev);
        data?.forEach((b) => next.delete(b.id));
        return next;
      });
    } else {
      setSelectedIds((prev) => {
        const next = new Set(prev);
        data?.forEach((b) => next.add(b.id));
        return next;
      });
    }
  };

  const handleYearChange = (value: string) => {
    setSelectedYear(value);
    setSelectedMonth("all");
    setPage(0);
    setSelectedIds(new Set());
  };

  const handleMonthChange = (value: string) => {
    setSelectedMonth(value);
    setPage(0);
    setSelectedIds(new Set());
  };

  return (
    <>
      <Card>
        <CardHeader className="space-y-2 pb-3">
          {/* 1행: 다건삭제 버튼 + 업로드 버튼 */}
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
              <span className="hidden xs:inline">주보 업로드</span>
              <span className="xs:hidden">업로드</span>
            </Button>
          </div>
          {/* 2행: 연도/월 필터 */}
          <div className="flex items-center gap-2">
            <Select value={selectedYear} onValueChange={handleYearChange}>
              <SelectTrigger className="h-8 flex-1 text-xs sm:w-28 sm:flex-none">
                <SelectValue placeholder="연도" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">전체 연도</SelectItem>
                {years.map((y) => (
                  <SelectItem key={y} value={y}>{y}년</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedMonth} onValueChange={handleMonthChange} disabled={selectedYear === "all"}>
              <SelectTrigger className="h-8 flex-1 text-xs sm:w-24 sm:flex-none">
                <SelectValue placeholder="월" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">전체 월</SelectItem>
                {months.map((m) => (
                  <SelectItem key={m} value={m}>{Number(m)}월</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {isFetching ? (
            <div className="flex h-32 items-center justify-center">
              <Spinner />
            </div>
          ) : !data?.length ? (
            <div className="text-muted-foreground flex h-32 items-center justify-center text-sm">
              등록된 주보가 없습니다.
            </div>
          ) : (
            <Table>
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
                  <TableHead className="w-24 text-center text-xs sm:w-32 sm:text-sm">날짜</TableHead>
                  <TableHead className="text-center text-xs sm:text-sm">제목</TableHead>
                  <TableHead className="hidden w-48 text-center sm:table-cell">생성일</TableHead>
                  <TableHead className="w-8 px-2 sm:w-10"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((bulletin) => (
                  <TableRow
                    key={bulletin.id}
                    className="group cursor-pointer"
                    onClick={() => handleOpenDetail(bulletin)}
                  >
                    <TableCell
                      className="px-2 text-center sm:px-4"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Checkbox
                        checked={selectedIds.has(bulletin.id)}
                        onCheckedChange={() => handleToggleSelect(bulletin.id)}
                        aria-label="선택"
                      />
                    </TableCell>
                    <TableCell className="text-muted-foreground px-2 text-center text-xs sm:px-4 sm:text-sm">
                      {bulletin.date || "—"}
                    </TableCell>
                    <TableCell className="text-center text-xs font-medium sm:text-sm">
                      {bulletin.title || <span className="text-muted-foreground">—</span>}
                    </TableCell>
                    <TableCell className="text-muted-foreground hidden text-center sm:table-cell">
                      {bulletin.createdAt
                        ? new Date(bulletin.createdAt).toLocaleString("ko-KR")
                        : "—"}
                    </TableCell>
                    <TableCell className="px-2 sm:px-4" onClick={(e) => e.stopPropagation()}>
                      <button
                        className="flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive sm:size-8"
                        onClick={() => handleOpenDelete(bulletin.id)}
                      >
                        <Trash2 className="size-3.5 sm:size-4" />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
      <ListPagination page={page} totalPages={totalPages} onPageChange={setPage} />

      <BulletinFormDialog open={formOpen} onClose={() => setFormOpen(false)} onSuccess={refetch} />

      <BulletinDetailDialog bulletin={detailTarget} onClose={() => setDetailTarget(null)} onSuccess={refetch} />

      <DeleteConfirmDialog
        open={!!deleteTargetId}
        onOpenChange={(o) => !o && setDeleteTargetId(null)}
        onConfirm={handleDelete}
        title="주보를 삭제하시겠습니까?"
        description="삭제된 주보는 복구할 수 없습니다."
        isPending={isDeleting}
      />

      <DeleteConfirmDialog
        open={bulkDeleteOpen}
        onOpenChange={(o) => !o && setBulkDeleteOpen(false)}
        onConfirm={handleBulkDelete}
        title={`${selectedIds.size}개의 주보를 삭제하시겠습니까?`}
        description="삭제된 주보는 복구할 수 없습니다."
        isPending={isBulkDeleting}
      />
    </>
  );
};

export default Bulletins;
