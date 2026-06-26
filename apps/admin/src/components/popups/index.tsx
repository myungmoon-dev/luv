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
import { useDeletePopup, useGetPopups, usePutPopupShow } from "@/query/popup";
import popupKeys from "@/query/popup/keys";
import { IPopup } from "type";
import { useQueryClient } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";
import { Button } from "../ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import PopupFormDialog from "./PopupFormDialog";
import dayjs from "dayjs";

const Popups = () => {
  const queryClient = useQueryClient();
  const { data, isFetching } = useGetPopups({ onlyShow: null });
  const [deleteTarget, setDeleteTarget] = useState<IPopup | null>(null);
  const [viewTarget, setViewTarget] = useState<IPopup | null>(null);

  const { mutate: putPopupShow } = usePutPopupShow();
  const { mutate: deletePopup, isPending: isDeleting } = useDeletePopup();

  const handleToggleShow = (popup: IPopup) => {
    queryClient.setQueryData<IPopup[]>(popupKeys.list(null), (old) =>
      old?.map((p) => (p.id === popup.id ? { ...p, show: !p.show } : p)),
    );
    putPopupShow(
      { id: popup.id, isShow: !popup.show },
      {
        onSuccess: (updated) => {
          queryClient.setQueryData<IPopup[]>(popupKeys.list(null), (old) =>
            old?.map((p) => (p.id === updated.id ? updated : p)),
          );
        },
        onError: () => {
          queryClient.setQueryData<IPopup[]>(popupKeys.list(null), (old) =>
            old?.map((p) => (p.id === popup.id ? { ...p, show: popup.show } : p)),
          );
          toast.error("에러가 발생했습니다.");
        },
      },
    );
  };

  const handleConfirmDelete = () => {
    if (!deleteTarget) return;
    deletePopup(
      { id: deleteTarget.id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: popupKeys.all });
          toast.success("삭제되었습니다.");
        },
        onError: () => toast.error("에러가 발생했습니다."),
        onSettled: () => setDeleteTarget(null),
      },
    );
  };

  if (isFetching)
    return (
      <div className="flex h-32 items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20 text-center">이미지</TableHead>
            <TableHead>제목</TableHead>
            <TableHead className="w-24 text-center">공개 여부</TableHead>
            <TableHead className="w-40">생성일</TableHead>
            <TableHead className="w-20 text-center">작업</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((popup) => (
            <TableRow
              key={popup.id}
              className="hover:bg-muted/50 cursor-pointer"
              onClick={() => setViewTarget(popup)}
            >
              <TableCell className="py-2 text-center">
                <img
                  src={popup.imageUrl}
                  alt={popup.title}
                  className="mx-auto h-10 w-10 rounded object-cover"
                />
              </TableCell>
              <TableCell className="text-sm font-medium">{popup.title}</TableCell>
              <TableCell className="text-center" onClick={(e) => e.stopPropagation()}>
                <Switch
                  checked={popup.show}
                  onCheckedChange={() => handleToggleShow(popup)}
                  className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-300"
                />
              </TableCell>
              <TableCell className="text-muted-foreground text-xs">
                {dayjs(popup.createdAt).format("YYYY-MM-DD HH:mm")}
              </TableCell>
              <TableCell className="text-center" onClick={(e) => e.stopPropagation()}>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-destructive hover:text-destructive size-7"
                  onClick={() => setDeleteTarget(popup)}
                >
                  <Trash2 className="size-3.5" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <PopupFormDialog
        open={!!viewTarget}
        target={viewTarget}
        onClose={() => setViewTarget(null)}
      />

      <AlertDialog
        open={!!deleteTarget}
        onOpenChange={(o) => !o && setDeleteTarget(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {deleteTarget?.title}을(를) 삭제하시겠습니까?
            </AlertDialogTitle>
            <AlertDialogDescription>삭제된 내용은 복구할 수 없습니다.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>취소</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={(e) => {
                e.preventDefault();
                handleConfirmDelete();
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

export default Popups;
