import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { usePatchPastorBook, usePostPastorBook } from "@/query/pastor";
import { processImages } from "@/hooks/useImageCompress";
import FormDialog from "@/components/common/FormDialog";
import ImageUpload from "@/components/common/ImageUpload";
import type { PastorBookForm } from "@/api/pastor";
import type { IPastorBook } from "type";

const FORM_ID = "pastor-book-form";

interface Props {
  open: boolean;
  onClose: () => void;
  target?: IPastorBook | null;
}

const PastorBookFormDialog = ({ open, onClose, target }: Props) => {
  const isEdit = !!target;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PastorBookForm>();
  const { mutate: post, isPending: isPosting } = usePostPastorBook();
  const { mutate: put, isPending: isPutting } = usePatchPastorBook();
  const isPending = isPosting || isPutting;

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (open && target) {
      reset({
        title: target.title,
        sub: target.sub ?? "",
        publisher: target.publisher,
        year: target.year,
      });
      setPreview(target.imageUrl);
    } else if (!open) {
      reset({ title: "", sub: "", publisher: "", year: "" });
      setImage(null);
      setPreview(null);
    }
  }, [open, target, reset]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const [processed] = await processImages([file], "thumbnail");
    setImage(processed);
    setPreview(URL.createObjectURL(processed));
  };

  const removeImage = () => {
    setImage(null);
    setPreview(null);
  };

  const handleClose = () => {
    removeImage();
    onClose();
  };

  const onSubmit = (form: PastorBookForm) => {
    if (!isEdit && !image) return toast.error("이미지를 업로드해주세요.");

    const formData = new FormData();
    formData.append("title", form.title);
    if (form.sub) formData.append("sub", form.sub);
    formData.append("publisher", form.publisher);
    formData.append("year", form.year);
    if (image) formData.append("image", image);

    const onSuccess = () => {
      toast.success(isEdit ? "수정되었습니다." : "저서가 추가되었습니다.");
      handleClose();
    };
    const onError = () => toast.error("에러가 발생했습니다.");

    if (isEdit) {
      put({ id: target.id, form: formData }, { onSuccess, onError });
    } else {
      post(formData, { onSuccess, onError });
    }
  };

  return (
    <FormDialog
      open={open}
      onClose={handleClose}
      title={isEdit ? "저서 수정" : "저서 추가"}
      footer={
        <Button
          form={FORM_ID}
          type="submit"
          className="w-full"
          disabled={isPending}
          isLoading={isPending}
        >
          {isEdit ? "수정" : "추가"}
        </Button>
      }
    >
      <form id={FORM_ID} onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <Label className="text-sm font-medium">제목 *</Label>
          <Input
            placeholder="돌아오라 내게로!"
            {...register("title", { required: "제목을 입력해주세요." })}
          />
          {errors.title && <p className="text-destructive text-xs">{errors.title.message}</p>}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label className="text-sm font-medium">부제목</Label>
          <Input placeholder="말라기 강해설교" {...register("sub")} />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label className="text-sm font-medium">출판사 *</Label>
          <Input
            placeholder="마음과마음"
            {...register("publisher", { required: "출판사를 입력해주세요." })}
          />
          {errors.publisher && (
            <p className="text-destructive text-xs">{errors.publisher.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label className="text-sm font-medium">출판연도 *</Label>
          <Input
            placeholder="2026"
            {...register("year", { required: "출판연도를 입력해주세요." })}
          />
          {errors.year && <p className="text-destructive text-xs">{errors.year.message}</p>}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label className="text-sm font-medium">표지 이미지 {!isEdit && "*"}</Label>
          <ImageUpload
            preview={preview}
            onChange={handleImageChange}
            onRemove={removeImage}
            alt="표지"
          />
        </div>
      </form>
    </FormDialog>
  );
};

export default PastorBookFormDialog;
