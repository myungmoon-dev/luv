import { useDeleteHomeWorship, useGetHomeWorshipById } from "@/query/homeWorship";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Badge } from "../ui/badge";
import Image from "next/image";
import dayjs from "dayjs";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import homewWorshipKeys from "@/query/homeWorship/keys";
import { useState } from "react";
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
import { Loader2 } from "lucide-react";

interface HomeWorshipDetailDialogProps {
  id: string | null;
  onClose: () => void;
}

const HomeWorshipDetailDialog = ({ id, onClose }: HomeWorshipDetailDialogProps) => {
  const queryClient = useQueryClient();
  const [deleteOpen, setDeleteOpen] = useState(false);

  const { data, isLoading } = useGetHomeWorshipById(id ?? "");
  const { mutate, isPending: isDeleting } = useDeleteHomeWorship();

  const handleDelete = () => {
    if (!id) return;
    mutate(id, {
      onSuccess: () => {
        toast("삭제되었습니다.");
        queryClient.invalidateQueries({ queryKey: homewWorshipKeys.all });
        setDeleteOpen(false);
        onClose();
      },
      onError: () => toast.error("에러가 발생했습니다."),
    });
  };

  return (
    <>
      <Dialog open={!!id} onOpenChange={(o) => !o && onClose()}>
        <DialogContent className="flex max-h-[90dvh] flex-col overflow-y-auto sm:max-w-2xl">
          <DialogHeader>
            <div className="flex items-start justify-between gap-4 pr-6">
              <div>
                <DialogTitle className="mb-1">{data?.title}</DialogTitle>
                <div className="text-muted-foreground flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  <span>날짜: {data?.date}</span>
                  <span>작성자: {data?.userName}</span>
                  <span>
                    생성일: {data?.createdAt ? dayjs(data.createdAt).format("YYYY-MM-DD HH:mm") : "—"}
                  </span>
                </div>
                {data?.isPinned && (
                  <Badge variant="secondary" className="mt-2">
                    공지
                  </Badge>
                )}
              </div>
              <Button
                variant="destructive"
                size="sm"
                className="shrink-0"
                onClick={() => setDeleteOpen(true)}
              >
                삭제
              </Button>
            </div>
          </DialogHeader>

          {isLoading ? (
            <div className="flex h-32 items-center justify-center">
              <Spinner />
            </div>
          ) : (
            <div className="flex flex-col gap-4 pt-2">
              {data?.content && (
                <div
                  className="text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: data.content }}
                />
              )}
              {data?.imageUrls.map((url) => (
                <div key={url} className="relative w-full" style={{ aspectRatio: "868/550" }}>
                  <Image src={url} fill alt="가정예배 이미지" className="object-contain" />
                </div>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>

      <AlertDialog open={deleteOpen} onOpenChange={(o) => !o && setDeleteOpen(false)}>
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

export default HomeWorshipDetailDialog;
