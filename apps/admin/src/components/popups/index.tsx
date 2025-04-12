import { useDeletePopup, useGetPopups, usePutPopupShow } from "@/query/popup";
import popupKeys from "@/query/popup/keys";
import { useQueryClient } from "@tanstack/react-query";
import { Edit, MoreHorizontal, Trash2 } from "lucide-react";
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

const Popups = () => {
  const queryClient = useQueryClient();
  const { data, isFetching } = useGetPopups({ onlyShow: null });

  const { mutate: putPopupShow } = usePutPopupShow();
  const { mutate: deletePopup } = useDeletePopup();

  const handlePutPopupShow = ({ popupId, isShow }: { popupId: string; isShow: boolean }) => {
    if (!confirm(`공개 여부를 ${isShow ? "비공개" : "공개"}로 바꾸시겠습니까?`)) return;

    putPopupShow(
      { id: popupId, isShow: !isShow },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: popupKeys.all });
          toast("수정되었습니다.");
        },
        onError: () => {
          toast("에러가 발생했습니다. 잠시 후 다시 시도해 주세요.");
        },
      },
    );
  };

  const handleDeletePopup = ({ popupId }: { popupId: string }) => {
    if (!confirm("삭제하시겠습니까?")) return;

    deletePopup(
      { id: popupId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: popupKeys.all });
          toast("삭제되었습니다.");
        },
        onError: () => {
          toast("에러가 발생했습니다. 잠시 후 다시 시도해 주세요.");
        },
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
        {data?.popups.map((popup) => (
          <TableRow key={popup._id}>
            <TableCell>
              <p className="line-clamp-1 w-[200px] text-blue-600">
                <a href={popup.imageUrl} target="_blank">
                  {popup.imageUrl}
                </a>
              </p>
            </TableCell>
            <TableCell>{popup.title}</TableCell>
            <TableCell>{popup.isShow ? "공개" : "비공개"}</TableCell>
            <TableCell>{popup.createdAt}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={() => handlePutPopupShow({ isShow: popup.isShow, popupId: popup._id })}
                  >
                    <Edit className="mr-2 h-4 w-4" />
                    <span>공개 여부 변경</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="text-destructive"
                    onClick={() => handleDeletePopup({ popupId: popup._id })}
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
  );
};

export default Popups;
