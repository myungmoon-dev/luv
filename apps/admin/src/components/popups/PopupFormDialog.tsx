import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { usePostPopup } from "@/query/popup";
import { processImages } from "@/hooks/useImageCompress";
import FormDialog from "@/components/common/FormDialog";
import ImageUpload from "@/components/common/ImageUpload";
import dayjs from "dayjs";
import type { IPopup } from "type";

interface PopupForm {
  title: string;
  isShow: boolean;
}

interface Props {
  open: boolean;
  onClose: () => void;
  target?: IPopup | null;
}

const FORM_ID = "popup-form";

const PopupFormDialog = ({ open, onClose, target }: Props) => {
  const isView = !!target;

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<PopupForm>({ defaultValues: { isShow: true } });

  const { mutate: post, isPending } = usePostPopup();

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      reset({ title: "", isShow: true });
      setImage(null);
      setPreview(null);
    }
  }, [open, reset]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const [processed] = await processImages([file], "banner");
    setImage(processed);
    setPreview(URL.createObjectURL(processed));
  };

  const handleClose = () => {
    setImage(null);
    setPreview(null);
    onClose();
  };

  const removeImage = () => {
    setImage(null);
    setPreview(null);
  };

  const onSubmit = (form: PopupForm) => {
    if (isView) return;
    if (!image) return toast.error("이미지를 업로드해주세요.");

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("isShow", String(form.isShow));
    formData.append("image", image);

    post(formData, {
      onSuccess: () => {
        toast.success("추가되었습니다.");
        handleClose();
      },
      onError: () => toast.error("에러가 발생했습니다."),
    });
  };

  return (
    <FormDialog
      open={open}
      onClose={handleClose}
      title={isView ? "팝업 상세" : "팝업 추가"}
      footer={
        isView ? (
          <Button type="button" variant="outline" className="w-full" onClick={handleClose}>
            닫기
          </Button>
        ) : (
          <Button
            type="submit"
            form={FORM_ID}
            className="w-full"
            disabled={isPending}
            isLoading={isPending}
          >
            추가
          </Button>
        )
      }
    >
      {isView ? (
        <PopupDetailView popup={target} />
      ) : (
        <form id={FORM_ID} onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium">제목 *</Label>
            <Input
              placeholder="팝업 제목을 입력해주세요."
              {...register("title", { required: "제목을 입력해주세요." })}
            />
            {errors.title && (
              <p className="text-destructive text-xs">{errors.title.message}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">공개 여부</Label>
            <Controller
              name="isShow"
              control={control}
              render={({ field }) => (
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-300"
                />
              )}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium">이미지 *</Label>
            <ImageUpload preview={preview} onChange={handleImageChange} onRemove={removeImage} />
          </div>
        </form>
      )}
    </FormDialog>
  );
};

const PopupDetailView = ({ popup }: { popup: IPopup }) => (
  <div className="flex flex-col gap-5">
    <DetailField label="제목" value={popup.title} />
    <DetailField label="공개 여부" value={popup.show ? "공개" : "비공개"} />
    <DetailField label="생성일" value={dayjs(popup.createdAt).format("YYYY-MM-DD HH:mm")} />
    <div className="flex flex-col gap-1.5">
      <Label className="text-sm font-medium">이미지</Label>
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
        <Image
          src={popup.imageUrl}
          alt={popup.title}
          fill
          sizes="(max-width: 640px) 100vw, 512px"
          className="object-contain"
        />
      </div>
    </div>
  </div>
);

const DetailField = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-1.5">
    <Label className="text-sm font-medium">{label}</Label>
    <p className="text-sm">{value}</p>
  </div>
);

export default PopupFormDialog;
