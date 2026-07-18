import { BoardType, IBoard } from "type";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Download, ImagePlus, Paperclip, Pencil, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useGetBoard, usePutBoard } from "@/query/board";
import { toast } from "sonner";
import dynamic from "next/dynamic";
import { Spinner } from "../ui/spinner";
import { SafeHTML } from "ui";
import { processImages } from "@/hooks/useImageCompress";
import FileListUpload from "@/components/common/FileListUpload";
import { BOARD_TYPE_MAP, BOARD_TYPE_OPTIONS } from "./config";
import dayjs from "dayjs";

const Editor = dynamic(() => import("@/components/common/editor").then((m) => m.Editor), {
  ssr: false,
  loading: () => (
    <div className="flex h-40 items-center justify-center">
      <Spinner />
    </div>
  ),
});

const EDIT_FORM_ID = "board-edit-form";
const MAX_IMAGES = 5;

/** S3 URL에서 표시용 파일명 추출 (백엔드 key 형식: {8자uuid}_{원본파일명}) */
const fileNameFromUrl = (url: string) => {
  try {
    const last = decodeURIComponent(url.split("?")[0].split("/").pop() ?? "");
    return last.replace(/^[0-9a-f]{8}_/i, "");
  } catch {
    return url;
  }
};

interface BoardDetailDialogProps {
  board: IBoard | null;
  onClose: () => void;
  onSuccess?: () => Promise<unknown>;
}

interface EditForm {
  type: BoardType;
  title: string;
  writer: string;
}

const BoardDetailDialog = ({ board, onClose, onSuccess }: BoardDetailDialogProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState("");
  // 유지할 기존 이미지/파일 URL + 새로 추가할 이미지/파일
  const [keptImageUrls, setKeptImageUrls] = useState<string[]>([]);
  const [newImages, setNewImages] = useState<File[]>([]);
  const [newPreviews, setNewPreviews] = useState<string[]>([]);
  const [keptFileUrls, setKeptFileUrls] = useState<string[]>([]);
  const [newFiles, setNewFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<EditForm>();
  const { mutate: putBoard, isPending } = usePutBoard();

  const selectedType = watch("type");
  const imageCount = keptImageUrls.length + newImages.length;

  const { data: detail } = useGetBoard({ boardId: board?.id ?? "" });

  useEffect(() => {
    if (board && isEditing && detail) {
      reset({ type: detail.type, title: detail.title, writer: detail.writer });
      setContent(detail.content);
      setKeptImageUrls(detail.imageUrls ?? []);
      setNewImages([]);
      setNewPreviews([]);
      setKeptFileUrls(detail.fileUrls ?? []);
      setNewFiles([]);
    }
  }, [board, isEditing, detail]);

  const handleClose = () => {
    setIsEditing(false);
    setNewImages([]);
    setNewPreviews([]);
    setNewFiles([]);
    onClose();
  };

  const handleNewImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? []);
    e.target.value = "";
    if (selected.length === 0) return;

    const available = MAX_IMAGES - imageCount;
    if (available <= 0) return toast.error(`이미지는 최대 ${MAX_IMAGES}장까지 가능합니다.`);
    if (selected.length > available) {
      toast.error(`이미지는 최대 ${MAX_IMAGES}장까지 가능합니다.`);
    }

    const processed = await processImages(selected.slice(0, available), "content");
    setNewImages((prev) => [...prev, ...processed]);
    setNewPreviews((prev) => [...prev, ...processed.map((f) => URL.createObjectURL(f))]);
  };

  const handleRemoveKeptImage = (url: string) => {
    setKeptImageUrls((prev) => prev.filter((u) => u !== url));
  };

  const handleRemoveNewImage = (index: number) => {
    setNewImages((prev) => prev.filter((_, i) => i !== index));
    setNewPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleNewFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? []);
    e.target.value = "";
    if (selected.length === 0) return;
    setNewFiles((prev) => [...prev, ...selected]);
  };

  const handleRemoveKeptFile = (url: string) => {
    setKeptFileUrls((prev) => prev.filter((u) => u !== url));
  };

  const handleRemoveNewFile = (index: number) => {
    setNewFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const onEditSubmit = (fd: EditForm) => {
    if (!board) return;
    if (!content) return toast.error("내용을 입력해주세요.");

    const formData = new FormData();
    formData.append("type", fd.type);
    formData.append("title", fd.title);
    formData.append("writer", fd.writer);
    formData.append("content", content);
    // 유지할 기존 URL + 새로 업로드할 파일 (백엔드가 병합)
    keptImageUrls.forEach((url) => formData.append("existingImageUrls", url));
    newImages.forEach((image) => formData.append("newImages", image));
    keptFileUrls.forEach((url) => formData.append("existingFileUrls", url));
    newFiles.forEach((file) => formData.append("newFiles", file));

    putBoard(
      { id: board.id, form: formData },
      {
        onSuccess: async () => {
          toast.success("수정되었습니다.");
          await onSuccess?.();
          setIsEditing(false);
        },
        onError: () => toast.error("에러가 발생했습니다."),
      },
    );
  };

  return (
    <Dialog open={!!board} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="flex h-[90dvh] max-h-[90dvh] flex-col gap-0 p-0 sm:max-w-lg">
        <DialogHeader className="shrink-0 border-b px-6 py-4">
          {isEditing ? (
            <div className="flex items-center justify-between pr-8">
              <DialogTitle className="text-base">게시글 수정</DialogTitle>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground h-8 px-2"
                onClick={() => setIsEditing(false)}
              >
                <X className="mr-1 size-3.5" />
                취소
              </Button>
            </div>
          ) : (
            <div className="flex items-start justify-between pr-8">
              <div className="min-w-0 flex-1 space-y-1.5">
                <DialogTitle className="truncate text-base">{board?.title}</DialogTitle>
                <div className="flex items-center gap-2">
                  {board?.type && (
                    <Badge variant="outline" className="text-xs font-normal">
                      {BOARD_TYPE_MAP[board.type]}
                    </Badge>
                  )}
                  {board?.createdAt && (
                    <Badge variant="secondary" className="text-xs font-normal">
                      {dayjs(board.createdAt).format("YYYY.MM.DD")}
                    </Badge>
                  )}
                  <span className="text-muted-foreground text-xs">{board?.writer}</span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="ml-2 h-8 shrink-0 px-2"
                onClick={() => setIsEditing(true)}
              >
                <Pencil className="mr-1 size-3.5" />
                수정
              </Button>
            </div>
          )}
        </DialogHeader>

        {isEditing ? (
          <>
            <ScrollArea className="min-h-0 flex-1">
              <form
                id={EDIT_FORM_ID}
                onSubmit={handleSubmit(onEditSubmit)}
                className="flex w-full min-w-0 flex-col gap-5 px-6 py-5"
              >
                {/* 게시글 타입 */}
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium">게시글 타입</Label>
                  <Select
                    value={selectedType}
                    onValueChange={(v) =>
                      setValue("type", v as BoardType, { shouldValidate: true })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="게시글 타입을 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      {BOARD_TYPE_OPTIONS.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <input
                    type="hidden"
                    {...register("type", { required: "게시글 타입을 선택해주세요." })}
                  />
                  {errors.type && <p className="text-destructive text-xs">{errors.type.message}</p>}
                </div>

                {/* 제목 */}
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium">제목</Label>
                  <Input {...register("title", { required: "제목을 입력해주세요." })} />
                  {errors.title && (
                    <p className="text-destructive text-xs">{errors.title.message}</p>
                  )}
                </div>

                {/* 작성자 */}
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium">작성자</Label>
                  <Input {...register("writer", { required: "작성자를 입력해주세요." })} />
                  {errors.writer && (
                    <p className="text-destructive text-xs">{errors.writer.message}</p>
                  )}
                </div>

                {/* 이미지 */}
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium">
                    이미지 <span className="text-muted-foreground">({imageCount}/{MAX_IMAGES})</span>
                  </Label>

                  {(keptImageUrls.length > 0 || newPreviews.length > 0) && (
                    <div className="grid grid-cols-3 gap-2">
                      {keptImageUrls.map((url) => (
                        <div key={url} className="relative aspect-square">
                          <img
                            src={url}
                            alt="기존 이미지"
                            className="h-full w-full rounded-md border object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveKeptImage(url)}
                            className="bg-destructive absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full text-white shadow"
                          >
                            <X className="size-3" />
                          </button>
                        </div>
                      ))}
                      {newPreviews.map((url, i) => (
                        <div key={url} className="relative aspect-square">
                          <img
                            src={url}
                            alt={`새 이미지 ${i + 1}`}
                            className="h-full w-full rounded-md border object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveNewImage(i)}
                            className="bg-destructive absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full text-white shadow"
                          >
                            <X className="size-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {imageCount < MAX_IMAGES && (
                    <label className="border-muted-foreground/25 hover:border-muted-foreground/50 hover:bg-muted/30 flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed p-4 text-center transition-colors">
                      <ImagePlus className="text-muted-foreground/50 size-5" />
                      <span className="text-muted-foreground text-sm">클릭하여 이미지 추가</span>
                      <span className="text-muted-foreground/70 text-xs">최대 {MAX_IMAGES}장</span>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={handleNewImageChange}
                      />
                    </label>
                  )}
                </div>

                {/* 첨부파일 */}
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium">첨부파일</Label>

                  {keptFileUrls.length > 0 && (
                    <ul className="flex flex-col gap-1.5">
                      {keptFileUrls.map((url) => (
                        <li
                          key={url}
                          className="bg-muted flex items-center gap-2 rounded-md px-3 py-2"
                        >
                          <Paperclip className="text-muted-foreground size-3.5 shrink-0" />
                          <span className="min-w-0 flex-1 truncate text-sm">
                            {fileNameFromUrl(url)}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleRemoveKeptFile(url)}
                            className="text-muted-foreground hover:text-destructive shrink-0"
                          >
                            <X className="size-3.5" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}

                  <FileListUpload
                    files={newFiles}
                    onChange={handleNewFileChange}
                    onRemove={handleRemoveNewFile}
                  />
                </div>

                {/* 내용 */}
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium">내용</Label>
                  <Editor defaultValue={content} setValue={setContent} />
                </div>
              </form>
            </ScrollArea>

            <div className="bg-background flex shrink-0 gap-2 border-t px-6 py-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => setIsEditing(false)}
              >
                취소
              </Button>
              <Button
                form={EDIT_FORM_ID}
                type="submit"
                variant="outline"
                className="flex-1"
                disabled={isPending}
                isLoading={isPending}
              >
                저장
              </Button>
            </div>
          </>
        ) : (
          <ScrollArea className="min-h-0 flex-1">
            <div className="flex flex-col gap-5 px-6 py-5">
              {board?.imageUrls && board.imageUrls.length > 0 && (
                <div className="flex flex-col gap-2">
                  {board.imageUrls.map((url) => (
                    <img
                      key={url}
                      src={url}
                      alt={board.title}
                      className="w-full rounded-lg border object-contain"
                    />
                  ))}
                </div>
              )}

              <div className="prose prose-sm max-w-none">
                <SafeHTML html={board?.content} />
              </div>

              {board?.fileUrls && board.fileUrls.length > 0 && (
                <div className="flex flex-col gap-2 border-t pt-4">
                  <span className="text-muted-foreground text-xs font-medium">
                    첨부파일 {board.fileUrls.length}개
                  </span>
                  <ul className="flex flex-col gap-1.5">
                    {board.fileUrls.map((url) => (
                      <li key={url}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          download
                          className="bg-muted hover:bg-muted/70 flex items-center gap-2 rounded-md px-3 py-2 transition-colors"
                        >
                          <Paperclip className="text-muted-foreground size-3.5 shrink-0" />
                          <span className="min-w-0 flex-1 truncate text-sm">
                            {fileNameFromUrl(url)}
                          </span>
                          <Download className="text-muted-foreground size-3.5 shrink-0" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BoardDetailDialog;
