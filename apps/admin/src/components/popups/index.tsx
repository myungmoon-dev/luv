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
import { Edit, MoreHorizontal, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Spinner } from "ui";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

type DialogState =
  | { type: "delete"; popup: IPopup }
  | { type: "toggle"; popup: IPopup }
  | null;

const Popups = () => {
  const queryClient = useQueryClient();
  const { data, isFetching } = useGetPopups({ onlyShow: null });
  const [dialog, setDialog] = useState<DialogState>(null);

  const { mutate: putPopupShow } = usePutPopupShow();
  const { mutate: deletePopup } = useDeletePopup();

  const handleConfirmToggle = () => {
    if (!dialog || dialog.type !== "toggle") return;
    putPopupShow(
      { id: dialog.popup.id, isShow: !dialog.popup.show },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: popupKeys.all });
          toast("수정되었습니다.");
        },
        onError: () => toast("에러가 발생했습니다. 잠시 후 다시 시도해 주세요."),
        onSettled: () => setDialog(null),
      },
    );
  };

  const handleConfirmDelete = () => {
    if (!dialog || dialog.type !== "delete") return;
    deletePopup(
      { id: dialog.popup.id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: popupKeys.all });
          toast("삭제되었습니다.");
        },
        onError: () => toast("에러가 발생했습니다. 잠시 후 다시 시도해 주세요."),
        onSettled: () => setDialog(null),
      },
    );
  };

  if (isFetching)
    return (
      <div className="flex h-full items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>이미지</TableHead>
            <TableHead>제목</TableHead>
            <TableHead>공개 여부</TableHead>
            <TableHead>생성일</TableHead>
            <TableHead>작업</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((popup) => (
            <TableRow key={popup.id}>
              <TableCell>
                <p className="line-clamp-1 w-[200px] text-blue-600">
                  <a href={popup.imageUrl} target="_blank">
                    {popup.imageUrl}
                  </a>
                </p>
              </TableCell>
              <TableCell>{popup.title}</TableCell>
              <TableCell>{popup.show ? "공개" : "비공개"}</TableCell>
              <TableCell>{popup.createdAt}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setDialog({ type: "toggle", popup })}>
                      <Edit className="mr-2 h-4 w-4" />
                      <span>공개 여부 변경</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-destructive"
                      onClick={() => setDialog({ type: "delete", popup })}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      <span>삭제</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* 공개 여부 변경 다이얼로그 */}
      <AlertDialog
        open={dialog?.type === "toggle"}
        onOpenChange={(open) => !open && setDialog(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>공개 여부를 변경하시겠습니까?</AlertDialogTitle>
            <AlertDialogDescription>
              {dialog?.type === "toggle" && (
                <>
                  <strong>{dialog.popup.show ? "공개" : "비공개"}</strong> →{" "}
                  <strong>{dialog.popup.show ? "비공개" : "공개"}</strong>로 변경됩니다.
                </>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmToggle}>확인</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* 삭제 다이얼로그 */}
      <AlertDialog
        open={dialog?.type === "delete"}
        onOpenChange={(open) => !open && setDialog(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>정말 삭제하시겠습니까?</AlertDialogTitle>
            <AlertDialogDescription>이 작업은 되돌릴 수 없습니다.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={handleConfirmDelete}
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
