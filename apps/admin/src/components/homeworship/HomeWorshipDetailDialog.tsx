import { IHomeWorship, IHomeworshipComment } from "type";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
import { Badge } from "../ui/badge";
import { Spinner } from "@/components/ui/spinner";
import Image from "next/image";
import dayjs from "dayjs";
import {
  useDeleteComment,
  useGetHomeWorshipById,
  usePatchHomeWorship,
  usePostComment,
  usePutComment,
} from "@/query/homeWorship";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Pencil, X, Trash2, Loader2, MessageSquare, Check } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { cn } from "@/lib/utils";
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

const Editor = dynamic(() => import("@/components/common/editor").then((mod) => mod.Editor), {
  ssr: false,
  loading: () => (
    <div className="flex h-24 items-center justify-center">
      <Spinner />
    </div>
  ),
});

const ADMIN_PASSWORD = "admin1234";

interface HomeWorshipDetailDialogProps {
  homeworship: IHomeWorship | null;
  onClose: () => void;
  onSuccess?: () => Promise<unknown>;
}

interface EditForm {
  title: string;
  userName: string;
}
interface CommentForm {
  userName: string;
  content: string;
}

const HomeWorshipDetailDialog = ({
  homeworship,
  onClose,
  onSuccess,
}: HomeWorshipDetailDialogProps) => {
  const { data, isLoading, refetch } = useGetHomeWorshipById(homeworship?.id ?? "");

  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState("");
  const [editDate, setEditDate] = useState<Date | undefined>();
  const [calendarOpen, setCalendarOpen] = useState(false);
  const { mutate: patchHW, isPending: isPatchPending } = usePatchHomeWorship();

  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [deleteCommentTarget, setDeleteCommentTarget] = useState<string | null>(null);
  const { mutate: postComment, isPending: isPostingComment } = usePostComment();
  const { mutate: putComment, isPending: isPuttingComment } = usePutComment();
  const { mutate: deleteComment, isPending: isDeletingComment } = useDeleteComment();

  const {
    register: rEdit,
    handleSubmit: hEdit,
    reset: resetEdit,
    formState: { errors: eErr },
  } = useForm<EditForm>();
  const {
    register: rComment,
    handleSubmit: hComment,
    reset: resetComment,
    formState: { errors: cErr },
  } = useForm<CommentForm>();
  const {
    register: rEditComment,
    handleSubmit: hEditComment,
    reset: resetEditComment,
    formState: { errors: ecErr },
  } = useForm<CommentForm>();

  const handleClose = () => {
    setIsEditing(false);
    setEditingCommentId(null);
    onClose();
  };

  const startEdit = () => {
    if (!data) return;
    resetEdit({ title: data.title, userName: data.userName });
    setEditContent(data.content ?? "");
    setEditDate(data.date ? new Date(data.date) : undefined);
    setIsEditing(true);
  };

  const onEditSubmit = (fd: EditForm) => {
    if (!data || !editDate) return;
    const formData = new FormData();
    formData.append("title", fd.title);
    formData.append("date", format(editDate, "yyyy-MM-dd"));
    formData.append("content", editContent);
    formData.append("userName", fd.userName);
    formData.append("isPinned", String(data.isPinned ?? false));
    formData.append("password", ADMIN_PASSWORD);

    patchHW(
      { id: data.id, formData },
      {
        onSuccess: async () => {
          toast.success("수정되었습니다.");
          setIsEditing(false);
          await refetch();
          await onSuccess?.();
        },
        onError: () => toast.error("에러가 발생했습니다."),
      },
    );
  };

  const onCommentSubmit = (fd: CommentForm) => {
    if (!data) return;
    postComment(
      {
        id: data.id,
        body: { userName: fd.userName, password: ADMIN_PASSWORD, content: fd.content },
      },
      {
        onSuccess: async () => {
          toast.success("댓글이 등록되었습니다.");
          resetComment();
          await refetch();
        },
        onError: () => toast.error("에러가 발생했습니다."),
      },
    );
  };

  const onEditCommentSubmit = (fd: CommentForm) => {
    if (!data || !editingCommentId) return;
    putComment(
      {
        id: data.id,
        commentId: editingCommentId,
        body: { userName: "관리자", password: ADMIN_PASSWORD, content: fd.content },
      },
      {
        onSuccess: async () => {
          toast.success("댓글이 수정되었습니다.");
          setEditingCommentId(null);
          await refetch();
        },
        onError: () => toast.error("에러가 발생했습니다."),
      },
    );
  };

  const handleDeleteComment = () => {
    if (!data || !deleteCommentTarget) return;
    deleteComment(
      { id: data.id, commentId: deleteCommentTarget, password: ADMIN_PASSWORD },
      {
        onSuccess: async () => {
          toast.success("댓글이 삭제되었습니다.");
          await refetch();
        },
        onError: () => toast.error("에러가 발생했습니다."),
        onSettled: () => setDeleteCommentTarget(null),
      },
    );
  };

  return (
    <>
      <Dialog open={!!homeworship} onOpenChange={(o) => !o && handleClose()}>
        <DialogContent className="flex h-[90dvh] max-h-[90dvh] flex-col gap-0 p-0 sm:max-w-2xl">
          {/* 헤더 — 닫기 버튼 직접 배치 */}
          <DialogHeader className="shrink-0 border-b px-6 pb-3 pt-5">
            <div className="pr-8">
              <DialogTitle className="truncate">{data?.title ?? homeworship?.title}</DialogTitle>
              <div className="text-muted-foreground mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs">
                <span>{data?.date ?? homeworship?.date}</span>
                {(data?.userName ?? homeworship?.userName) && (
                  <span>· {data?.userName ?? homeworship?.userName}</span>
                )}
                {(data?.isPinned ?? homeworship?.isPinned) && (
                  <Badge variant="secondary" className="text-xs">
                    공지
                  </Badge>
                )}
              </div>
            </div>
            <div className="flex justify-end pt-1">
              <Button
                variant={isEditing ? "outline" : "ghost"}
                size="sm"
                onClick={isEditing ? () => setIsEditing(false) : startEdit}
              >
                {isEditing ? (
                  <>
                    <X className="mr-1 size-3.5" />
                    취소
                  </>
                ) : (
                  <>
                    <Pencil className="mr-1 size-3.5" />
                    수정
                  </>
                )}
              </Button>
            </div>
          </DialogHeader>

          {/* 스크롤 영역 */}
          <ScrollArea className="min-h-0 flex-1">
            {isLoading ? (
              <div className="flex h-40 items-center justify-center">
                <Spinner />
              </div>
            ) : (
              <div className="flex flex-col gap-6 px-6 py-5">
                {/* 수정 폼 */}
                {isEditing ? (
                  <form
                    id="edit-hw-form"
                    onSubmit={hEdit(onEditSubmit)}
                    className="flex flex-col gap-4"
                  >
                    <div className="flex flex-col gap-1.5">
                      <Label className="text-sm font-medium">날짜</Label>
                      <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                        <PopoverTrigger asChild>
                          <button
                            type="button"
                            className={cn(
                              "border-input hover:bg-accent flex h-9 w-full items-center gap-2 rounded-md border bg-transparent px-3 py-1 text-left text-sm shadow-sm transition-colors",
                              !editDate && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="size-4 shrink-0" />
                            {editDate ? format(editDate, "PPP", { locale: ko }) : "날짜 선택"}
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={editDate}
                            onSelect={(d) => {
                              setEditDate(d);
                              setCalendarOpen(false);
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <Label className="text-sm font-medium">제목</Label>
                      <Input {...rEdit("title", { required: true })} />
                      {eErr.title && (
                        <p className="text-destructive text-xs">제목을 입력해주세요.</p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <Label className="text-sm font-medium">작성자</Label>
                      <Input {...rEdit("userName", { required: true })} />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <Label className="text-sm font-medium">내용</Label>
                      <Editor defaultValue={data?.content} setValue={setEditContent} />
                    </div>

                    <Button
                      form="edit-hw-form"
                      type="submit"
                      disabled={isPatchPending}
                      isLoading={isPatchPending}
                    >
                      저장
                    </Button>
                  </form>
                ) : (
                  <>
                    {data?.content && (
                      <div
                        className="prose prose-sm max-w-none text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: data.content }}
                      />
                    )}
                    {data?.imageUrls?.map((url) => (
                      <div key={url} className="relative w-full" style={{ aspectRatio: "868/550" }}>
                        <Image src={url} fill alt="가정예배 이미지" className="object-contain" />
                      </div>
                    ))}
                  </>
                )}

                {/* 댓글 */}
                {!isEditing && (
                  <div className="flex flex-col gap-3 border-t pt-4">
                    <div className="flex items-center gap-1.5 text-sm font-medium">
                      <MessageSquare className="size-4" />
                      댓글 {data?.comments?.length ?? 0}개
                    </div>

                    {data?.comments?.map((comment: IHomeworshipComment) => (
                      <div key={comment.id} className="rounded-lg border p-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-medium">{comment.userName}</span>
                          <div className="flex items-center gap-1">
                            <span className="text-muted-foreground text-xs">
                              {comment.createdAt
                                ? dayjs(comment.createdAt).isSame(dayjs(), "day")
                                    ? dayjs(comment.createdAt).format("HH:mm")
                                    : dayjs(comment.createdAt).format("YYYY년 MM월 DD일")
                                : null}
                            </span>
                            {editingCommentId !== comment.id && (
                              <>
                                <button
                                  className="text-muted-foreground hover:text-foreground ml-1 rounded p-0.5 transition-colors"
                                  onClick={() => {
                                    setEditingCommentId(comment.id);
                                    resetEditComment({ content: comment.content });
                                  }}
                                >
                                  <Pencil className="size-3" />
                                </button>
                                <button
                                  className="text-muted-foreground hover:text-destructive rounded p-0.5 transition-colors"
                                  onClick={() => setDeleteCommentTarget(comment.id)}
                                >
                                  <Trash2 className="size-3" />
                                </button>
                              </>
                            )}
                          </div>
                        </div>

                        {editingCommentId === comment.id ? (
                          <form
                            onSubmit={hEditComment(onEditCommentSubmit)}
                            className="mt-2 flex flex-col gap-2"
                          >
                            <Textarea
                              {...rEditComment("content", { required: true })}
                              className="min-h-[60px] resize-none text-sm"
                            />
                            {ecErr.content && (
                              <p className="text-destructive text-xs">내용을 입력해주세요.</p>
                            )}
                            <div className="flex gap-2">
                              <Button
                                type="button"
                                size="sm"
                                variant="outline"
                                className="flex-1"
                                onClick={() => setEditingCommentId(null)}
                              >
                                취소
                              </Button>
                              <Button
                                type="submit"
                                size="sm"
                                className="flex-1"
                                disabled={isPuttingComment}
                                isLoading={isPuttingComment}
                              >
                                <Check className="mr-1 size-3.5" />
                                저장
                              </Button>
                            </div>
                          </form>
                        ) : (
                          <p className="mt-1.5 whitespace-pre-wrap text-sm leading-relaxed">
                            {comment.content}
                          </p>
                        )}
                      </div>
                    ))}

                    <form onSubmit={hComment(onCommentSubmit)} className="flex flex-col gap-2">
                      <Input
                        {...rComment("userName", { required: true })}
                        placeholder="이름"
                        className="text-sm"
                      />
                      {cErr.userName && (
                        <p className="text-destructive text-xs">이름을 입력해주세요.</p>
                      )}
                      <Textarea
                        {...rComment("content", { required: true })}
                        placeholder="댓글을 입력해주세요"
                        className="min-h-[72px] resize-none text-sm"
                      />
                      {cErr.content && (
                        <p className="text-destructive text-xs">내용을 입력해주세요.</p>
                      )}
                      <Button
                        type="submit"
                        size="sm"
                        className="self-end"
                        disabled={isPostingComment}
                        isLoading={isPostingComment}
                      >
                        등록
                      </Button>
                    </form>
                  </div>
                )}
              </div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <AlertDialog
        open={!!deleteCommentTarget}
        onOpenChange={(o) => !o && setDeleteCommentTarget(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>댓글을 삭제하시겠습니까?</AlertDialogTitle>
            <AlertDialogDescription>삭제된 댓글은 복구할 수 없습니다.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeletingComment}>취소</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={(e) => {
                e.preventDefault();
                handleDeleteComment();
              }}
              disabled={isDeletingComment}
            >
              {isDeletingComment && <Loader2 className="mr-2 size-4 animate-spin" />}
              삭제
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default HomeWorshipDetailDialog;
