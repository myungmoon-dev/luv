import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { usePostBoard } from "@/query/board";
import { toast } from "sonner";
import dynamic from "next/dynamic";
import { BoardType } from "type";
import { Spinner } from "../ui/spinner";
import { processImages } from "@/hooks/useImageCompress";
import FormDialog from "@/components/common/FormDialog";
import ImageListUpload from "@/components/common/ImageListUpload";
import FileListUpload from "@/components/common/FileListUpload";
import { BOARD_TYPE_OPTIONS } from "./config";

const Editor = dynamic(() => import("@/components/common/editor").then((m) => m.Editor), {
  ssr: false,
  loading: () => (
    <div className="flex h-40 items-center justify-center">
      <Spinner />
    </div>
  ),
});

const FORM_ID = "board-form";
const MAX_IMAGES = 5;

interface BoardFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

interface BoardForm {
  type: BoardType;
  title: string;
  writer: string;
}

const BoardFormDialog = ({ open, onClose, onSuccess }: BoardFormDialogProps) => {
  const [content, setContent] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BoardForm>();
  const { mutate: postBoard, isPending } = usePostBoard();

  const selectedType = watch("type");

  const handleClose = () => {
    reset();
    setContent("");
    setImages([]);
    setPreviews([]);
    setFiles([]);
    onClose();
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? []);
    e.target.value = "";
    if (selected.length === 0) return;

    const available = MAX_IMAGES - images.length;
    if (available <= 0) return toast.error(`이미지는 최대 ${MAX_IMAGES}장까지 가능합니다.`);
    if (selected.length > available) {
      toast.error(`이미지는 최대 ${MAX_IMAGES}장까지 가능합니다.`);
    }

    const processed = await processImages(selected.slice(0, available), "content");
    setImages((prev) => [...prev, ...processed]);
    setPreviews((prev) => [...prev, ...processed.map((f) => URL.createObjectURL(f))]);
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? []);
    e.target.value = "";
    if (selected.length === 0) return;
    setFiles((prev) => [...prev, ...selected]);
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = (fd: BoardForm) => {
    if (!content) return toast.error("내용을 입력해주세요.");

    const formData = new FormData();
    formData.append("type", fd.type);
    formData.append("title", fd.title);
    formData.append("writer", fd.writer);
    formData.append("content", content);
    images.forEach((image) => formData.append("images", image));
    files.forEach((file) => formData.append("files", file));

    postBoard(formData, {
      onSuccess: () => {
        toast.success("게시글이 등록되었습니다.");
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
      title="게시글 등록"
      footer={
        <div className="flex gap-2">
          <Button type="button" variant="outline" className="flex-1" onClick={handleClose}>
            취소
          </Button>
          <Button
            form={FORM_ID}
            type="submit"
            variant="outline"
            className="flex-1"
            disabled={isPending}
            isLoading={isPending}
          >
            등록
          </Button>
        </div>
      }
    >
      <form
        id={FORM_ID}
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full min-w-0 flex-col gap-5"
      >
        <div className="flex flex-col gap-1.5">
          <Label className="text-sm font-medium">게시글 타입</Label>
          <Select
            value={selectedType}
            onValueChange={(v) => setValue("type", v as BoardType, { shouldValidate: true })}
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
          <input type="hidden" {...register("type", { required: "게시글 타입을 선택해주세요." })} />
          {errors.type && <p className="text-destructive text-xs">{errors.type.message}</p>}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label className="text-sm font-medium">제목</Label>
          <Input
            placeholder="제목을 입력해주세요"
            {...register("title", { required: "제목을 입력해주세요." })}
          />
          {errors.title && <p className="text-destructive text-xs">{errors.title.message}</p>}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label className="text-sm font-medium">작성자</Label>
          <Input
            placeholder="작성자 이름"
            {...register("writer", { required: "작성자를 입력해주세요." })}
          />
          {errors.writer && <p className="text-destructive text-xs">{errors.writer.message}</p>}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label className="text-sm font-medium">
            이미지 <span className="text-muted-foreground">({images.length}/{MAX_IMAGES})</span>
          </Label>
          <ImageListUpload
            previews={previews}
            onChange={handleImageChange}
            onRemove={handleRemoveImage}
            maxImages={MAX_IMAGES}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label className="text-sm font-medium">첨부파일</Label>
          <FileListUpload files={files} onChange={handleFileChange} onRemove={handleRemoveFile} />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label className="text-sm font-medium">내용</Label>
          <Editor setValue={setContent} />
        </div>
      </form>
    </FormDialog>
  );
};

export default BoardFormDialog;
