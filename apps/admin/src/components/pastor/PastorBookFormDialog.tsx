import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ImageIcon, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { usePatchPastorBook, usePostPastorBook } from "@/query/pastor";
import { processImages } from "@/hooks/useImageCompress";
import type { PastorBookForm } from "@/api/pastor";
import type { IPastorBook } from "type";

interface Props {
  open: boolean;
  onClose: () => void;
  target?: IPastorBook | null;
}

const PastorBookFormDialog = ({ open, onClose, target }: Props) => {
  const isEdit = !!target;
  const { register, handleSubmit, reset, formState: { errors } } = useForm<PastorBookForm>();
  const { mutate: post, isPending: isPosting } = usePostPastorBook();
  const { mutate: put, isPending: isPutting } = usePatchPastorBook();
  const isPending = isPosting || isPutting;

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (open && target) {
      reset({ title: target.title, sub: target.sub ?? "", publisher: target.publisher, year: target.year });
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
    const [processed] = await processImages([file]);
    setImage(processed);
    setPreview(URL.createObjectURL(processed));
  };

  const handleClose = () => {
    setImage(null);
    setPreview(null);
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

    if (isEdit) {
      put(
        { id: target.id, form: formData },
        { onSuccess: () => { toast.success("수정되었습니다."); handleClose(); }, onError: () => toast.error("에러가 발생했습니다.") },
      );
    } else {
      post(
        formData,
        { onSuccess: () => { toast.success("저서가 추가되었습니다."); handleClose(); }, onError: () => toast.error("에러가 발생했습니다.") },
      );
    }
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="flex h-[90dvh] max-h-[90dvh] flex-col gap-0 p-0 sm:max-w-lg">
        <DialogHeader className="shrink-0 border-b px-6 py-4">
          <DialogTitle>{isEdit ? "저서 수정" : "저서 추가"}</DialogTitle>
        </DialogHeader>

        <ScrollArea className="min-h-0 flex-1">
          <form
            id="pastor-book-form"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 px-6 py-5"
          >
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
              {errors.publisher && <p className="text-destructive text-xs">{errors.publisher.message}</p>}
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
              {preview ? (
                <div className="relative w-full overflow-hidden rounded-lg border">
                  <img src={preview} alt="표지" className="w-full object-contain" />
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
        </ScrollArea>

        <div className="bg-background shrink-0 border-t px-6 py-4">
          <Button form="pastor-book-form" className="w-full" disabled={isPending} isLoading={isPending}>
            {isEdit ? "수정" : "추가"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PastorBookFormDialog;
