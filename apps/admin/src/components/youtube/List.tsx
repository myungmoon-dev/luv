import DeleteConfirmDialog from "@/components/common/DeleteConfirmDialog";
import { useDeleteVideo, useGetVideos } from "@/query/youtube";
import { IYoutube, YoutubeType } from "type";
import { Spinner } from "@/components/ui/spinner";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Edit, MoreHorizontal, Trash2, ListVideo, Plus } from "lucide-react";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import youtubeKeys from "@/query/youtube/keys";
import { useState } from "react";
import YoutubeFormDialog from "./YoutubeFormDialog";
import ListPagination from "../common/ListPagination";

interface IYoutubeVideoListProps {
  option: YoutubeType;
}

const YoutubeVideoList = ({ option }: IYoutubeVideoListProps) => {
  const queryClient = useQueryClient();
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<IYoutube | null>(null);
  const [page, setPage] = useState(0);

  const PAGE_SIZE = 10;
  const { data: res, isFetching } = useGetVideos({ type: option, page });
  const data = res?.content;
  const totalPages = res?.totalPages ?? Math.ceil((res?.totalElements ?? 0) / PAGE_SIZE);
  const { mutate } = useDeleteVideo();

  const handleDeleteVideo = () => {
    if (!deleteTargetId) return;
    mutate(
      { videoId: deleteTargetId },
      {
        onSuccess: () => {
          toast("삭제되었습니다.");
          queryClient.invalidateQueries({ queryKey: youtubeKeys.all });
        },
        onError: () => toast("에러가 발생했습니다."),
        onSettled: () => setDeleteTargetId(null),
      },
    );
  };

  const handleOpenEdit = (video: IYoutube) => {
    setEditTarget(video);
    setTimeout(() => setDialogOpen(true), 0);
  };

  const handleOpenAdd = () => {
    setEditTarget(null);
    setDialogOpen(true);
  };

  const handleOpenDelete = (id: string) => {
    setTimeout(() => setDeleteTargetId(id), 0);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setEditTarget(null);
  };

  return (
    <>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between text-sm font-medium">
            <span className="flex items-center gap-2">
              <ListVideo className="size-4" />
              영상 목록
              {data && <Badge variant="secondary">{res.totalElements}개</Badge>}
            </span>
            <Button size="sm" onClick={handleOpenAdd}>
              <Plus className="mr-1.5 size-4" />
              영상 업로드
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
              등록된 영상이 없습니다.
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>제목</TableHead>
                  <TableHead>날짜</TableHead>
                  <TableHead>본문말씀</TableHead>
                  <TableHead>설교자</TableHead>
                  <TableHead className="w-10"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((video) => (
                  <TableRow key={video.id}>
                    <TableCell className="font-medium">
                      {video.title || <span className="text-muted-foreground">—</span>}
                    </TableCell>
                    <TableCell className="text-muted-foreground">{video.date || "—"}</TableCell>
                    <TableCell className="text-muted-foreground">{video.mainText || "—"}</TableCell>
                    <TableCell className="text-muted-foreground">{video.preacher || "—"}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="size-8">
                            <MoreHorizontal className="size-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleOpenEdit(video)}>
                            <Edit className="mr-2 size-4" />
                            수정
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            className="text-destructive"
                            onClick={() => handleOpenDelete(video.id)}
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

      <YoutubeFormDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        option={option}
        editTarget={editTarget}
      />

      <DeleteConfirmDialog
        open={!!deleteTargetId}
        onOpenChange={(o) => !o && setDeleteTargetId(null)}
        onConfirm={handleDeleteVideo}
        title="영상을 삭제하시겠습니까?"
        description="삭제된 영상은 복구할 수 없습니다."
      />
    </>
  );
};

export default YoutubeVideoList;
