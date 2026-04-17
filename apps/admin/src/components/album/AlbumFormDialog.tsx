import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { CalendarIcon, X } from "lucide-react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { usePostAlbum } from "@/query/album";
import { AlbumType } from "type";
import { toast } from "sonner";
import Image from "next/image";
import { ALBUM_TYPE_OPTIONS } from "./config";
import { processImages } from "@/hooks/useImageCompress";

const MAX_IMAGES = 5;

interface AlbumFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

interface AlbumForm {
  title: string;
}

const AlbumFormDialog = ({ open, onClose, onSuccess }: AlbumFormDialogProps) => {
  const [selectedType, setSelectedType] = useState<AlbumType | "">("");
  const [date, setDate] = useState<Date | undefined>();
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<AlbumForm>();
  const { mutate: postAlbum, isPending } = usePostAlbum();

  const handleClose = () => {
    reset();
    setSelectedType("");
    setDate(undefined);
    setImages([]);
    setPreviews([]);
    onClose();
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    e.target.value = "";
    const processed = await processImages(files);
    const merged = [...images, ...processed].slice(0, MAX_IMAGES);
    setImages(merged);
    setPreviews(merged.map((f) => URL.createObjectURL(f)));
  };

  const removeImage = (idx: number) => {
    const next = images.filter((_, i) => i !== idx);
    setImages(next);
    setPreviews(next.map((f) => URL.createObjectURL(f)));
  };

  const onSubmit = (fd: AlbumForm) => {
    if (!selectedType || !date || images.length === 0) return;
    const formData = new FormData();
    formData.append("title", fd.title);
    formData.append("type", selectedType);
    formData.append("date", format(date, "yyyy-MM-dd"));
    images.forEach((img) => formData.append("images", img));

    postAlbum(formData, {
      onSuccess: () => {
        toast.success("앨범이 등록되었습니다.");
        handleClose();
        onSuccess?.();
      },
      onError: () => toast.error("에러가 발생했습니다."),
    });
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="flex max-h-[90dvh] flex-col gap-0 overflow-y-auto p-0 sm:max-w-lg">
        <DialogHeader className="sticky top-0 z-10 border-b bg-background px-6 pb-4 pt-6">
          <DialogTitle>앨범 등록</DialogTitle>
        </DialogHeader>

        <form id="album-form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 px-6 py-5">
          {/* 타입 */}
          <div className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium">앨범 타입</Label>
            <Select value={selectedType} onValueChange={(v) => setSelectedType(v as AlbumType)}>
              <SelectTrigger>
                <SelectValue placeholder="타입을 선택해주세요" />
              </SelectTrigger>
              <SelectContent>
                {ALBUM_TYPE_OPTIONS.slice(1).map((o) => (
                  <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {!selectedType && <p className="text-xs text-destructive hidden" />}
          </div>

          {/* 제목 */}
          <div className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium">제목</Label>
            <Input {...register("title", { required: true })} placeholder="앨범 제목" />
            {errors.title && <p className="text-xs text-destructive">제목을 입력해주세요.</p>}
          </div>

          {/* 날짜 */}
          <div className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium">행사 날짜</Label>
            <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "border-input flex h-9 w-full items-center gap-2 rounded-md border bg-transparent px-3 py-1 text-left text-sm shadow-sm transition-colors hover:bg-accent",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="size-4 shrink-0" />
                  {date ? format(date, "PPP", { locale: ko }) : "날짜 선택"}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={date} onSelect={(d) => { setDate(d); setCalendarOpen(false); }} />
              </PopoverContent>
            </Popover>
          </div>

          {/* 이미지 */}
          <div className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium">
              이미지 ({images.length}/{MAX_IMAGES})
            </Label>
            {images.length < MAX_IMAGES && (
              <label className="flex cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-dashed border-muted-foreground/30 p-4 text-sm text-muted-foreground transition-colors hover:border-muted-foreground/60">
                <span>클릭하여 이미지 추가 (최대 {MAX_IMAGES}개)</span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            )}
            {previews.length > 0 && (
              <div className="grid grid-cols-3 gap-2">
                {previews.map((src, i) => (
                  <div key={i} className="relative aspect-square rounded-md overflow-hidden">
                    <Image src={src} fill alt={`미리보기 ${i + 1}`} className="object-cover" />
                    <button
                      type="button"
                      onClick={() => removeImage(i)}
                      className="absolute right-1 top-1 flex size-5 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
                    >
                      <X className="size-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            {images.length === 0 && (
              <p className="text-xs text-muted-foreground">이미지를 최소 1개 이상 업로드해주세요.</p>
            )}
          </div>
        </form>

        <div className="sticky bottom-0 flex gap-2 border-t bg-background px-6 py-4">
          <Button type="button" variant="outline" className="flex-1" onClick={handleClose}>취소</Button>
          <Button
            form="album-form"
            type="submit"
            className="flex-1"
            disabled={isPending || !selectedType || !date || images.length === 0}
            isLoading={isPending}
          >
            등록
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AlbumFormDialog;
