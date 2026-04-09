import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ImageIcon, X } from "lucide-react";
import { useState } from "react";
import { useController, useForm } from "react-hook-form";
import { usePostBook } from "@/query/books";
import { toast } from "sonner";
import { ScrollArea } from "../ui/scroll-area";
import dynamic from "next/dynamic";
import { Spinner } from "../ui/spinner";
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

interface BookFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

interface BookForm {
  title: string;
  writer: string;
  date: string;
}

const BookFormDialog = ({ open, onClose, onSuccess }: BookFormDialogProps) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<BookForm>();
  const { mutate: postBook, isPending } = usePostBook();

  const { field: dateField, fieldState: dateState } = useController({
    name: "date",
    control,
    rules: { required: "날짜를 입력해주세요." },
  });

  const handleClose = () => {
    reset();
    setContent("");
    setImage(null);
    setPreview(null);
    onClose();
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const [processed] = await processImages([file]);
    setImage(processed);
    setPreview(URL.createObjectURL(processed));
  };

  const onSubmit = (fd: BookForm) => {
    if (!image) return toast.error("이미지를 업로드해주세요.");
    if (!content) return toast.error("내용을 입력해주세요.");

    const formData = new FormData();
    formData.append("title", fd.title);
    formData.append("writer", fd.writer);
    formData.append("date", fd.date);
    formData.append("content", content);
    formData.append("images", image);

    postBook(formData, {
      onSuccess: () => {
        toast.success("추천도서가 등록되었습니다.");
        handleClose();
        onSuccess?.();
      },
      onError: () => toast.error("에러가 발생했습니다."),
    });
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="flex h-[90dvh] max-h-[90dvh] flex-col gap-0 p-0 sm:max-w-lg">
        <DialogHeader className="shrink-0 border-b px-6 py-4">
          <DialogTitle>추천도서 등록</DialogTitle>
        </DialogHeader>

        <ScrollArea className="min-h-0 flex-1">
          <form
            id="book-form"
            onSubmit={handleSubmit(onSubmit)}
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
              <Input
                placeholder="도서 제목"
                {...register("title", { required: "제목을 입력해주세요." })}
              />
              {errors.title && <p className="text-destructive text-xs">{errors.title.message}</p>}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label className="text-sm font-medium">작가</Label>
              <Input
                placeholder="작가명"
                {...register("writer", { required: "작가를 입력해주세요." })}
              />
              {errors.writer && <p className="text-destructive text-xs">{errors.writer.message}</p>}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label className="text-sm font-medium">표지 이미지</Label>
              {preview ? (
                <div className="relative w-full overflow-hidden rounded-lg border">
                  <img src={preview} alt="표지" className="w-full object-contain" />
                  <button
                    type="button"
                    onClick={() => {
                      setImage(null);
                      setPreview(null);
                    }}
                    className="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
                  >
                    <X className="size-3.5" />
                  </button>
                </div>
              ) : (
                <label className="border-muted-foreground/25 hover:border-muted-foreground/50 hover:bg-muted/30 flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed p-6 text-center transition-colors">
                  <ImageIcon className="text-muted-foreground/50 size-6" />
                  <span className="text-muted-foreground text-sm">클릭하여 이미지 업로드</span>
                  <span className="text-muted-foreground/70 text-xs">
                    1장 · 10MB 이하 (초과 시 자동 압축)
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
              <Editor setValue={setContent} />
            </div>
          </form>
        </ScrollArea>

        <div className="bg-background shrink-0 border-t px-6 py-4">
          <Button form="book-form" className="w-full" disabled={isPending} isLoading={isPending}>
            등록
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookFormDialog;
