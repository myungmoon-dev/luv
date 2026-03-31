import ListPagination from "@/components/common/ListPagination";
import { useDeleteHomeWorship, useGetHomeWorships } from "@/query/homeWorship";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
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
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Eye, MoreHorizontal, Trash2, Plus, Home, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import homewWorshipKeys from "@/query/homeWorship/keys";
import HomeWorshipDetailDialog from "./HomeWorshipDetailDialog";

const HomeWorship = () => {
  const { push } = useRouter();
  const queryClient = useQueryClient();
  const [page, setPage] = useState(0);
  const [detailId, setDetailId] = useState<string | null>(null);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);

  const { data: res, isFetching } = useGetHomeWorships({ page });
  const data = res?.content;
  const totalPages = res?.totalPages ?? 0;

  const { mutate, isPending: isDeleting } = useDeleteHomeWorship();

  const handleDelete = () => {
    if (!deleteTargetId) return;
    mutate(deleteTargetId, {
      onSuccess: () => {
        toast("삭제되었습니다.");
        queryClient.invalidateQueries({ queryKey: homewWorshipKeys.all });
      },
      onError: () => toast.error("에러가 발생했습니다."),
      onSettled: () => setDeleteTargetId(null),
    });
  };

  return (
    <>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between text-sm font-medium">
            <span className="flex items-center gap-2">
              <Home className="size-4" />
              가정예배 공지
              {data && <Badge variant="secondary">{data.length}개</Badge>}
            </span>
            <Button size="sm" onClick={() => push("/homeworship/create")}>
              <Plus className="mr-1.5 size-4" />
              공지 추가
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {isFetching ? (
            <div className="flex h-32 items-center justify-center">
              <Spinner />
            </div>
          ) : !data?.length ? (
            <div className="text-muted-foreground flex h-32 items-center justify-center text-sm">
              등록된 가정예배 공지가 없습니다.
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">공지</TableHead>
                  <TableHead>날짜</TableHead>
                  <TableHead>제목</TableHead>
                  <TableHead className="hidden sm:table-cell">작성자</TableHead>
                  <TableHead className="w-10"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((homeworship) => (
                  <TableRow key={homeworship.id}>
                    <TableCell>
                      {homeworship.isPinned ? (
                        <Badge variant="secondary">공지</Badge>
                      ) : (
                        <span className="text-muted-foreground text-xs">—</span>
                      )}
                    </TableCell>
                    <TableCell className="text-muted-foreground">{homeworship.date || "—"}</TableCell>
                    <TableCell className="font-medium">
                      {homeworship.title || <span className="text-muted-foreground">—</span>}
                    </TableCell>
                    <TableCell className="text-muted-foreground hidden sm:table-cell">
                      {homeworship.userName || "—"}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="size-8">
                            <MoreHorizontal className="size-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => setTimeout(() => setDetailId(homeworship.id), 0)}
                          >
                            <Eye className="mr-2 size-4" />
                            보기
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            className="text-destructive"
                            onClick={() => setTimeout(() => setDeleteTargetId(homeworship.id), 0)}
                          >
                            <Trash2 className="mr-2 size-4" />
                            삭제
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
      <ListPagination page={page} totalPages={totalPages} onPageChange={setPage} />

      <HomeWorshipDetailDialog id={detailId} onClose={() => setDetailId(null)} />

      <AlertDialog
        open={!!deleteTargetId}
        onOpenChange={(open) => !open && setDeleteTargetId(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>가정예배 공지를 삭제하시겠습니까?</AlertDialogTitle>
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
    </>
  );
};

export default HomeWorship;
