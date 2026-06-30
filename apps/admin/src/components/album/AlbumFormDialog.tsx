import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { usePostAlbum } from "@/query/album";
import { AlbumType } from "type";
import { toast } from "sonner";
import { ALBUM_TYPE_OPTIONS } from "./config";
import { processImages } from "@/hooks/useImageCompress";
import FormDialog from "@/components/common/FormDialog";
import ImageListUpload from "@/components/common/ImageListUpload";

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
    const processed = await processImages(files, "content");
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
    <FormDialog
      open={open}
      onClose={handleClose}
      title="앨범 등록"
      footer={
        <div className="flex gap-2">
          <Button type="button" variant="outline" className="flex-1" onClick={handleClose}>
            취소
          </Button>
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
      }
    >
        <form id="album-form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
            <ImageListUpload
              previews={previews}
              onChange={handleImageChange}
              onRemove={removeImage}
              maxImages={MAX_IMAGES}
            />
            {images.length === 0 && (
              <p className="text-xs text-muted-foreground">이미지를 최소 1개 이상 업로드해주세요.</p>
            )}
          </div>
        </form>
    </FormDialog>
  );
};

export default AlbumFormDialog;
