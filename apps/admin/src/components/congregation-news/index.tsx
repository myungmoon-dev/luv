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
import { useDeleteCongregationNews, useGetCongregationNewsList } from "@/query/congregationNews";
import { CongregationNews } from "@/types/congregationNews/response";
import dayjs from "dayjs";
import { Edit, MoreHorizontal, Trash2 } from "lucide-react";
import { useRouter } from "next/router";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { CONGREGATION_NEWS_TYPE_MAP } from "./config";

const CongregationNewsList = () => {
  const { push } = useRouter();
  const { data, isFetching } = useGetCongregationNewsList();
  const { mutate: deleteCongregationNews } = useDeleteCongregationNews();
  const [deleteTarget, setDeleteTarget] = useState<CongregationNews | null>(null);

  const handleDelete = () => {
    if (!deleteTarget) return;
    deleteCongregationNews(
      { id: deleteTarget.id },
      { onSettled: () => setDeleteTarget(null) },
    );
  };

  const handleEdit = (news: CongregationNews) => {
    push(`/congregation-news/${news.id}`);
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
            <TableHead>타입</TableHead>
            <TableHead>내용</TableHead>
            <TableHead>생성일</TableHead>
            <TableHead>수정일</TableHead>
            <TableHead>작업</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((news) => (
            <TableRow key={news.id}>
              <TableCell>{CONGREGATION_NEWS_TYPE_MAP[news.type]}</TableCell>
              <TableCell className="max-w-md">{news.description}</TableCell>
              <TableCell>{dayjs(news.createdAt).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
              <TableCell>{dayjs(news.updatedAt).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleEdit(news)}>
                      <Edit className="mr-2 h-4 w-4" />
                      <span>편집</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-destructive"
                      onClick={() => setDeleteTarget(news)}
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

      <AlertDialog open={!!deleteTarget} onOpenChange={(open) => !open && setDeleteTarget(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>정말 삭제하시겠습니까?</AlertDialogTitle>
            <AlertDialogDescription>이 작업은 되돌릴 수 없습니다.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={handleDelete}
            >
              삭제
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default CongregationNewsList;
