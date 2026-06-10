import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import ListPagination from "@/components/common/ListPagination";
import { useDeleteMinister, useGetMinisters } from "@/query/minister";
import { Spinner } from "@/components/ui/spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import MinisterFormDialog from "./MinisterFormDialog";
import type { IMinister, StaffTabType } from "type";

const TABS: { value: StaffTabType; label: string }[] = [
  { value: "retiredPastor", label: "원로목사" },
  { value: "minister", label: "교역자" },
  { value: "missionary", label: "선교사" },
  { value: "retiredElder", label: "원로장로" },
  { value: "elder", label: "장로" },
  { value: "staff", label: "직원" },
];

const OFFICER_LABEL: Record<string, string> = {
  associate: "목사",
  cooperativePastor: "협동목사",
  evangelist: "전도사",
  licentiate: "강도사",
  retired: "원로목사",
  elder: "장로",
  otherElder: "협동장로",
  retiredElder: "원로장로",
  missionary: "선교사",
  staff: "간사",
  manager: "관리장",
};

const PAGE_SIZE = 30;

interface TabPanelProps {
  tabType: StaffTabType;
}

const TabPanel = ({ tabType }: TabPanelProps) => {
  const [page, setPage] = useState(0);
  const [formOpen, setFormOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<IMinister | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<IMinister | null>(null);

  const { data, isFetching } = useGetMinisters({ page, tabType });
  const { mutate: deleteMutation, isPending: isDeleting } = useDeleteMinister();

  const list = data?.content ?? [];
  const totalPages = data?.totalPages ?? Math.ceil((data?.totalElements ?? 0) / PAGE_SIZE);

  const handleDelete = () => {
    if (!deleteTarget) return;
    deleteMutation(
      { id: deleteTarget.id },
      {
        onSuccess: () => {
          toast.success("삭제되었습니다.");
          setDeleteTarget(null);
        },
        onError: () => toast.error("에러가 발생했습니다."),
      },
    );
  };

  const handleOpenEdit = (item: IMinister) => {
    setTimeout(() => {
      setEditTarget(item);
      setFormOpen(true);
    }, 0);
  };

  const handleOpenDelete = (item: IMinister) => {
    setTimeout(() => setDeleteTarget(item), 0);
  };

  return (
    <>
      <Card className="overflow-hidden">
        <CardHeader className="pb-3 pt-3">
          <div className="flex items-center justify-end">
            <Button
              size="sm"
              onClick={() => {
                setEditTarget(null);
                setFormOpen(true);
              }}
            >
              <Plus className="mr-1.5 size-4" />
              추가
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {isFetching ? (
            <div className="flex h-32 items-center justify-center">
              <Spinner />
            </div>
          ) : !list.length ? (
            <div className="text-muted-foreground flex h-32 items-center justify-center text-sm">
              등록된 항목이 없습니다.
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12 px-4 text-center text-xs">사진</TableHead>
                  <TableHead className="text-xs sm:text-sm">이름 · 직책</TableHead>
                  <TableHead className="hidden text-xs sm:table-cell sm:text-sm">담당</TableHead>
                  <TableHead className="w-14 text-center text-xs sm:text-sm">순서</TableHead>
                  <TableHead className="w-20 text-center text-xs sm:text-sm">관리</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {list.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="px-4 py-2 text-center">
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="mx-auto size-9 rounded-full object-cover"
                        />
                      ) : (
                        <div className="bg-muted mx-auto size-9 rounded-full" />
                      )}
                    </TableCell>
                    <TableCell className="py-2">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-muted-foreground text-xs">
                        {OFFICER_LABEL[item.officerType] ?? item.officerType}
                      </p>
                    </TableCell>
                    <TableCell className="text-muted-foreground hidden py-2 text-xs sm:table-cell sm:text-sm">
                      {item.position || "—"}
                    </TableCell>
                    <TableCell className="text-muted-foreground py-2 text-center text-xs sm:text-sm">
                      {item.order ?? "—"}
                    </TableCell>
                    <TableCell className="py-2 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="size-7"
                          onClick={() => handleOpenEdit(item)}
                        >
                          <Pencil className="size-3.5" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="text-destructive hover:text-destructive size-7"
                          onClick={() => handleOpenDelete(item)}
                        >
                          <Trash2 className="size-3.5" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <ListPagination page={page} totalPages={totalPages} onPageChange={setPage} />

      <MinisterFormDialog
        open={formOpen}
        tabType={tabType}
        onClose={() => {
          setFormOpen(false);
          setEditTarget(null);
        }}
        target={editTarget}
      />

      <AlertDialog open={!!deleteTarget} onOpenChange={(o) => !o && setDeleteTarget(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{deleteTarget?.name}을(를) 삭제하시겠습니까?</AlertDialogTitle>
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
              삭제
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

const Ministers = () => {
  return (
    <Tabs defaultValue="minister">
      <TabsList className="flex flex-wrap">
        {TABS.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {TABS.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="mt-4">
          <TabPanel tabType={tab.value} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default Ministers;
