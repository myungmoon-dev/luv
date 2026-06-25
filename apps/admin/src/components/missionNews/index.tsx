import ListPagination from "@/components/common/ListPagination";
import { useDeleteMissionNews, useDeleteMissionNewsList, useGetMissionNewsList } from "@/query/missionNews";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { IMissionNews, MissionLocation } from "type";
import { Spinner } from "@/components/ui/spinner";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Loader2, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
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
import MissionNewsFormDialog from "./MissionNewsFormDialog";
import MissionNewsDetailDialog from "./MissionNewsDetailDialog";
import { MISSION_LOCATION_MAP, MISSION_LOCATION_OPTIONS } from "./config";

const TAB_OPTIONS = [
  { value: "all", label: "전체" },
  ...MISSION_LOCATION_OPTIONS,
];

interface MissionNewsTableProps {
  location?: MissionLocation;
  onDetail: (item: IMissionNews) => void;
  onDelete: (item: IMissionNews) => void;
  onRefetch: (refetch: () => void) => void;
  selectedIds: Set<string>;
  onToggleSelect: (id: string) => void;
  onToggleAll: (ids: string[], allSelected: boolean) => void;
}

const MissionNewsTable = ({
  location,
  onDetail,
  onDelete,
  onRefetch,
  selectedIds,
  onToggleSelect,
  onToggleAll,
}: MissionNewsTableProps) => {
  const [page, setPage] = useState(0);
  const { data, isFetching, refetch } = useGetMissionNewsList({ page, location });
  const content = data?.content ?? [];

  const allSelected = !!content.length && content.every((m) => selectedIds.has(m.id));
  const someSelected = content.some((m) => selectedIds.has(m.id));

  useEffect(() => {
    onRefetch(refetch);
  }, [refetch]);

  return (
    <>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <Table className="table-fixed">
            <TableHeader>
              <TableRow>
                <TableHead className="w-8 px-2 text-center sm:w-10">
                  <Checkbox
                    checked={allSelected}
                    data-state={someSelected && !allSelected ? "indeterminate" : undefined}
                    onCheckedChange={() => onToggleAll(content.map((m) => m.id), allSelected)}
                    aria-label="전체 선택"
                  />
                </TableHead>
                <TableHead className="hidden w-24 text-center text-xs sm:table-cell sm:text-sm">날짜</TableHead>
                <TableHead className="px-3 text-center text-xs sm:text-sm">제목</TableHead>
                <TableHead className="hidden w-24 text-center text-xs sm:table-cell sm:text-sm">선교지</TableHead>
                <TableHead className="hidden w-24 text-center text-xs sm:table-cell sm:text-sm">작성자</TableHead>
                <TableHead className="w-16 text-center text-xs sm:text-sm">삭제</TableHead>
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
                  <TableCell colSpan={6} className="text-muted-foreground h-32 text-center text-sm">
                    등록된 선교지 소식이 없습니다.
                  </TableCell>
                </TableRow>
              ) : (
                content.map((item) => (
                  <TableRow
                    key={item.id}
                    className="cursor-pointer"
                    onClick={() => onDetail(item)}
                  >
                    <TableCell className="px-2 text-center" onClick={(e) => e.stopPropagation()}>
                      <Checkbox
                        checked={selectedIds.has(item.id)}
                        onCheckedChange={() => onToggleSelect(item.id)}
                        aria-label="선택"
                      />
                    </TableCell>
                    <TableCell className="text-muted-foreground hidden py-3 text-center text-xs sm:table-cell sm:text-sm">
                      {dayjs(item.date).format("YYYY.MM")}
                    </TableCell>
                    <TableCell className="px-3 py-3 text-center text-xs font-medium sm:text-sm">
                      <p className="truncate">{item.title}</p>
                    </TableCell>
                    <TableCell className="text-muted-foreground hidden py-3 text-center text-xs sm:table-cell sm:text-sm">
                      {MISSION_LOCATION_MAP[item.location]}
                    </TableCell>
                    <TableCell className="text-muted-foreground hidden py-3 text-center text-xs sm:table-cell sm:text-sm">
                      <p className="truncate">{item.userName}</p>
                    </TableCell>
                    <TableCell className="py-3 text-center" onClick={(e) => e.stopPropagation()}>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-destructive hover:text-destructive h-7 w-7 p-0"
                        onClick={() => onDelete(item)}
                      >
                        <Trash2 className="size-3.5" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <ListPagination page={page} totalPages={data?.totalPages ?? 0} onPageChange={setPage} />
    </>
  );
};

const MissionNewsList = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [detailTarget, setDetailTarget] = useState<IMissionNews | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<IMissionNews | null>(null);
  const [bulkDeleteOpen, setBulkDeleteOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [activeRefetch, setActiveRefetch] = useState<(() => void) | null>(null);

  const { mutate: deleteMissionNews, isPending: isDeleting } = useDeleteMissionNews();
  const { mutate: deleteBulk, isPending: isBulkDeleting } = useDeleteMissionNewsList();

  const handleToggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleToggleAll = (ids: string[], allSelected: boolean) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (allSelected) ids.forEach((id) => next.delete(id));
      else ids.forEach((id) => next.add(id));
      return next;
    });
  };

  const handleBulkDelete = () => {
    const ids = Array.from(selectedIds);
    deleteBulk(ids, {
      onSuccess: () => {
        toast.success(`${ids.length}개의 소식이 삭제되었습니다.`);
        setSelectedIds(new Set());
        setBulkDeleteOpen(false);
        activeRefetch?.();
      },
      onError: () => toast.error("에러가 발생했습니다."),
    });
  };

  const handleDelete = () => {
    if (!deleteTarget) return;
    deleteMissionNews(
      { missionNewsId: deleteTarget.id },
      {
        onSuccess: () => {
          toast.success("삭제되었습니다.");
          setDeleteTarget(null);
          activeRefetch?.();
        },
        onError: () => toast.error("에러가 발생했습니다."),
      },
    );
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          {selectedIds.size > 0 && (
            <Button size="sm" variant="destructive" onClick={() => setBulkDeleteOpen(true)}>
              <Trash2 className="mr-1.5 size-4" />
              {selectedIds.size}개 삭제
            </Button>
          )}
        </div>
        <Button size="sm" onClick={() => setFormOpen(true)}>
          <Plus className="mr-1.5 size-4" />
          소식 추가
        </Button>
      </div>

      <Tabs defaultValue="all" className="flex flex-col gap-4">
        <TabsList className="flex h-auto flex-wrap justify-start gap-1 bg-muted p-1">
          {TAB_OPTIONS.map((opt) => (
            <TabsTrigger key={opt.value} value={opt.value} className="shrink-0">
              {opt.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {TAB_OPTIONS.map((opt) => (
          <TabsContent key={opt.value} value={opt.value} className="flex flex-col gap-4">
            <MissionNewsTable
              location={opt.value === "all" ? undefined : (opt.value as MissionLocation)}
              onDetail={setDetailTarget}
              onDelete={setDeleteTarget}
              onRefetch={(fn) => setActiveRefetch(() => fn)}
              selectedIds={selectedIds}
              onToggleSelect={handleToggleSelect}
              onToggleAll={handleToggleAll}
            />
          </TabsContent>
        ))}
      </Tabs>

      <MissionNewsFormDialog
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSuccess={() => activeRefetch?.()}
      />

      <MissionNewsDetailDialog
        missionNews={detailTarget}
        onClose={() => setDetailTarget(null)}
        onSuccess={async () => {
          activeRefetch?.();
          setDetailTarget(null);
        }}
      />

      {/* 다건 삭제 확인 */}
      <AlertDialog open={bulkDeleteOpen} onOpenChange={(o) => !o && setBulkDeleteOpen(false)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{selectedIds.size}개의 소식을 삭제하시겠습니까?</AlertDialogTitle>
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

      {/* 단건 삭제 확인 */}
      <AlertDialog open={!!deleteTarget} onOpenChange={(o) => !o && setDeleteTarget(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>선교지 소식을 삭제하시겠습니까?</AlertDialogTitle>
            <AlertDialogDescription>삭제된 내용은 복구할 수 없습니다.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>취소</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={(e) => { e.preventDefault(); handleDelete(); }}
              disabled={isDeleting}
            >
              삭제
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default MissionNewsList;
