import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";
import { useController, useForm } from "react-hook-form";
import { usePostBook } from "@/query/books";
import { toast } from "sonner";
import dynamic from "next/dynamic";
import { Spinner } from "../ui/spinner";
import { processImages } from "@/hooks/useImageCompress";
import { MonthPicker } from "@/components/common/MonthPicker";
import FormDialog from "@/components/common/FormDialog";
import ImageUpload from "@/components/common/ImageUpload";

const Editor = dynamic(() => import("@/components/common/editor").then((m) => m.Editor), {
  ssr: false,
  loading: () => (
    <div className="flex h-40 items-center justify-center">
      <Spinner />
    </div>
  ),
});

const FORM_ID = "book-form";

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

  const removeImage = () => {
    setImage(null);
    setPreview(null);
  };

  const handleClose = () => {
    reset();
    setContent("");
    removeImage();
    onClose();
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const [processed] = await processImages([file], "content");
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
    <FormDialog
      open={open}
      onClose={handleClose}
      title="추천도서 등록"
      footer={
        <Button
          form={FORM_ID}
          type="submit"
          className="w-full"
          disabled={isPending}
          isLoading={isPending}
        >
          등록
        </Button>
      }
    >
      <form
        id={FORM_ID}
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full min-w-0 flex-col gap-5"
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
          <ImageUpload
            preview={preview}
            onChange={handleImageChange}
            onRemove={removeImage}
            alt="표지"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label className="text-sm font-medium">내용</Label>
          <Editor setValue={setContent} />
        </div>
      </form>
    </FormDialog>
  );
};

export default BookFormDialog;
