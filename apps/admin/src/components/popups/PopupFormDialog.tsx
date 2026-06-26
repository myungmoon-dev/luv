import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ImageIcon, X } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { usePostPopup } from "@/query/popup";
import { processImages } from "@/hooks/useImageCompress";
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
    <Dialog open={open} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="flex h-[90dvh] max-h-[90dvh] flex-col gap-0 p-0 sm:max-w-lg">
        <DialogHeader className="shrink-0 border-b px-6 py-4">
          <DialogTitle>{isView ? "팝업 상세" : "팝업 추가"}</DialogTitle>
        </DialogHeader>

        <ScrollArea className="min-h-0 flex-1">
          {isView ? (
            <div className="flex flex-col gap-5 px-6 py-5">
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium">제목</Label>
                <p className="text-sm">{target.title}</p>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium">공개 여부</Label>
                <p className="text-sm">{target.show ? "공개" : "비공개"}</p>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium">생성일</Label>
                <p className="text-sm">
                  {dayjs(target.createdAt).format("YYYY-MM-DD HH:mm")}
                </p>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium">이미지</Label>
                <div className="w-full overflow-hidden rounded-lg border">
                  <img src={target.imageUrl} alt={target.title} className="w-full object-contain" />
                </div>
              </div>
            </div>
          ) : (
            <form
              id="popup-form"
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5 px-6 py-5"
            >
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
                {preview ? (
                  <div className="relative w-full overflow-hidden rounded-lg border">
                    <img src={preview} alt="미리보기" className="w-full object-contain" />
                    <button
                      type="button"
                      onClick={() => { setImage(null); setPreview(null); }}
                      className="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
                    >
                      <X className="size-3.5" />
                    </button>
                  </div>
                ) : (
                  <label className="border-muted-foreground/25 hover:border-muted-foreground/50 hover:bg-muted/30 flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed p-6 text-center transition-colors">
                    <ImageIcon className="text-muted-foreground/50 size-6" />
                    <span className="text-muted-foreground text-sm">클릭하여 이미지 업로드</span>
                    <span className="text-muted-foreground/70 text-xs">1장 · 10MB 이하 (초과 시 자동 압축)</span>
                    <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                  </label>
                )}
              </div>
            </form>
          )}
        </ScrollArea>

        <div className="bg-background shrink-0 border-t px-6 py-4">
          {isView ? (
            <Button
              type="button"
              onClick={handleClose}
              className="w-full"
              variant="outline"
            >
              닫기
            </Button>
          ) : (
            <Button
              type="submit"
              form="popup-form"
              className="w-full"
              disabled={isPending}
              isLoading={isPending}
            >
              추가
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PopupFormDialog;
