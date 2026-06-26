import { IBook } from "type";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { ImageIcon, Pencil, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useController, useForm } from "react-hook-form";
import { useGetBook, usePutBook } from "@/query/books";
import { toast } from "sonner";
import dynamic from "next/dynamic";
import { Spinner } from "../ui/spinner";
import { SafeHTML } from "ui";
import { processImages } from "@/hooks/useImageCompress";
import { MonthPicker } from "@/components/common/MonthPicker";

const Editor = dynamic(() => import("@/components/common/editor").then((m) => m.Editor), {
  ssr: false,
  loading: () => (
    <div className="flex h-40 items-center justify-center">
      <Spinner />
    </div>
  ),
});

interface BookDetailDialogProps {
  book: IBook | null;
  onClose: () => void;
  onSuccess?: () => Promise<unknown>;
}

interface EditForm {
  title: string;
  writer: string;
  date: string;
}

const BookDetailDialog = ({ book, onClose, onSuccess }: BookDetailDialogProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState("");
  const [newImage, setNewImage] = useState<File | null>(null);
  const [newPreview, setNewPreview] = useState<string | null>(null);
  const [keepImage, setKeepImage] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<EditForm>();
  const { mutate: putBook, isPending } = usePutBook();

  const { field: dateField, fieldState: dateState } = useController({
    name: "date",
    control,
    rules: { required: "날짜를 입력해주세요." },
  });

  const { data: detail } = useGetBook({ bookId: book?.id ?? "" });

  useEffect(() => {
    if (book && isEditing && detail) {
      reset({ title: detail.title, writer: detail.writer, date: detail.date });
      setContent(detail.content);
      setNewImage(null);
      setNewPreview(null);
      setKeepImage(true);
    }
  }, [book, isEditing, detail]);

  const handleClose = () => {
    setIsEditing(false);
    setNewImage(null);
    setNewPreview(null);
    setKeepImage(true);
    onClose();
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const [processed] = await processImages([file], "content");
    setNewImage(processed);
    setNewPreview(URL.createObjectURL(processed));
    setKeepImage(false);
  };

  const onEditSubmit = (fd: EditForm) => {
    if (!book) return;
    if (!keepImage && !newImage) return toast.error("이미지를 업로드해주세요.");
    if (!content) return toast.error("내용을 입력해주세요.");

    const formData = new FormData();
    formData.append("title", fd.title);
    formData.append("writer", fd.writer);
    formData.append("date", fd.date);
    formData.append("content", content);
    // 기존 이미지 유지 시 existingImageUrls로 URL 전달, 새 이미지는 newImages로 전달
    if (keepImage && book.imageUrls?.[0]) {
      formData.append("existingImageUrls", book.imageUrls[0]);
    }
    if (newImage) formData.append("newImages", newImage);

    putBook(
      { id: book.id, form: formData },
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
    <Dialog open={!!book} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="flex h-[90dvh] max-h-[90dvh] flex-col gap-0 p-0 sm:max-w-lg">
        <DialogHeader className="shrink-0 border-b px-6 py-4">
          {isEditing ? (
            <div className="flex items-center justify-between pr-8">
              <DialogTitle className="text-base">추천도서 수정</DialogTitle>
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
                <DialogTitle className="truncate text-base">{book?.title}</DialogTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs font-normal">
                    {book?.date}
                  </Badge>
                  <span className="text-muted-foreground text-xs">{book?.writer}</span>
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
                id="book-edit-form"
                onSubmit={handleSubmit(onEditSubmit)}
                className="flex w-full min-w-0 flex-col gap-5 px-6 py-5"
              >
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium">추천 날짜</Label>
                  <MonthPicker value={dateField.value} onChange={dateField.onChange} />
                  {dateState.error && (
                    <p className="text-destructive text-xs">{dateState.error.message}</p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium">제목</Label>
                  <Input {...register("title", { required: "제목을 입력해주세요." })} />
                  {errors.title && (
                    <p className="text-destructive text-xs">{errors.title.message}</p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium">작가</Label>
                  <Input {...register("writer", { required: "작가를 입력해주세요." })} />
                  {errors.writer && (
                    <p className="text-destructive text-xs">{errors.writer.message}</p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium">표지 이미지</Label>
                  {keepImage && book?.imageUrls?.[0] ? (
                    <div className="relative w-full overflow-hidden rounded-lg border">
                      <img src={book.imageUrls[0]} alt="표지" className="w-full object-contain" />
                      <button
                        type="button"
                        onClick={() => setKeepImage(false)}
                        className="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
                      >
                        <X className="size-3.5" />
                      </button>
                    </div>
                  ) : newPreview ? (
                    <div className="relative w-full overflow-hidden rounded-lg border">
                      <img src={newPreview} alt="새 표지" className="w-full object-contain" />
                      <button
                        type="button"
                        onClick={() => {
                          setNewImage(null);
                          setNewPreview(null);
                        }}
                        className="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
                      >
                        <X className="size-3.5" />
                      </button>
                    </div>
                  ) : (
                    <label className="border-muted-foreground/25 hover:border-muted-foreground/50 hover:bg-muted/30 flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed p-6 text-center transition-colors">
                      <ImageIcon className="text-muted-foreground/50 size-6" />
                      <span className="text-muted-foreground text-sm">클릭하여 이미지 교체</span>
                      <span className="text-muted-foreground/70 text-xs">
                        10MB 이하 (초과 시 자동 압축)
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                    </label>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium">내용</Label>
                  <Editor defaultValue={content} setValue={setContent} />
                </div>
              </form>
            </ScrollArea>

            <div className="bg-background shrink-0 border-t px-6 py-4">
              <Button
                form="book-edit-form"
                className="w-full"
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
              {book?.imageUrls?.[0] && (
                <img
                  src={book.imageUrls[0]}
                  alt={book.title}
                  className="w-full rounded-lg border object-contain"
                />
              )}
              <div className="prose prose-sm max-w-none">
                <SafeHTML html={book?.content} />
              </div>
            </div>
          </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookDetailDialog;
