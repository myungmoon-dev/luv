import { IBulletin } from "type";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { usePatchBulletin } from "@/query/bulletin";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Pencil, X, ImagePlus } from "lucide-react";
import dayjs from "dayjs";

interface BulletinDetailDialogProps {
  bulletin: IBulletin | null;
  onClose: () => void;
  onSuccess?: () => Promise<unknown>;
}

interface EditForm {
  date: string;
}

const BulletinDetailDialog = ({ bulletin, onClose, onSuccess }: BulletinDetailDialogProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newFile, setNewFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { mutate, isPending } = usePatchBulletin();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<EditForm>();

  useEffect(() => {
    if (bulletin && isEditing) {
      reset({ date: bulletin.date });
      setNewFile(null);
      setPreview(null);
    }
  }, [bulletin, isEditing]);

  useEffect(() => {
    if (!newFile) { setPreview(null); return; }
    const url = URL.createObjectURL(newFile);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [newFile]);

  const handleClose = () => {
    setIsEditing(false);
    setNewFile(null);
    onClose();
  };

  const onSubmit = (data: EditForm) => {
    if (!bulletin) return;
    const formData = new FormData();
    formData.append("date", data.date);
    if (newFile) formData.append("pdf", newFile);

    mutate(
      { bulletinId: bulletin.id, formData },
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
    <Dialog open={!!bulletin} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="flex h-[90dvh] max-h-[90dvh] flex-col gap-0 p-0 sm:max-w-2xl">
        <DialogHeader className="shrink-0 px-6 pt-6 pb-4">
          <div className="flex items-start justify-between pr-6">
            <div>
              <DialogTitle>{bulletin?.title}</DialogTitle>
              <p className="text-muted-foreground mt-1 text-sm">
                {bulletin?.date && dayjs(bulletin.date).format("YYYY-MM-DD")}
              </p>
            </div>
            <Button
              variant={isEditing ? "outline" : "ghost"}
              size="sm"
              className="shrink-0"
              onClick={() => setIsEditing((v) => !v)}
            >
              {isEditing ? <X className="mr-1.5 size-3.5" /> : <Pencil className="mr-1.5 size-3.5" />}
              {isEditing ? "취소" : "수정"}
            </Button>
          </div>

          {isEditing && (
            <form id="edit-form" onSubmit={handleSubmit(onSubmit)} className="mt-3 flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm">날짜</Label>
                <Input
                  {...register("date", {
                    required: "날짜를 입력해주세요.",
                    pattern: { value: /^\d{4}-\d{2}-\d{2}$/, message: "YYYY-MM-DD 형식으로 입력해주세요." },
                  })}
                  placeholder="YYYY-MM-DD"
                />
                {errors.date && <p className="text-destructive text-xs">{errors.date.message}</p>}
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm">PDF 교체 (선택)</Label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="application/pdf"
                  className="hidden"
                  onChange={(e) => setNewFile(e.target.files?.[0] ?? null)}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="border-input text-muted-foreground hover:bg-muted/50 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed py-4 text-sm transition-colors"
                >
                  <ImagePlus className="size-4" />
                  {newFile ? newFile.name : "PDF 파일 선택"}
                </button>
              </div>

              <Button form="edit-form" type="submit" disabled={isPending} isLoading={isPending}>
                저장
              </Button>
            </form>
          )}
        </DialogHeader>

        <ScrollArea className="min-h-0 flex-1">
          <div className="flex flex-col gap-4 px-6 pb-6">
            {(isEditing && preview ? [preview] : bulletin?.imageUrls ?? []).map((url, index) => (
              <img
                key={url}
                src={url}
                alt={`주보 ${index + 1}`}
                className="w-full rounded-lg border object-contain"
              />
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default BulletinDetailDialog;
