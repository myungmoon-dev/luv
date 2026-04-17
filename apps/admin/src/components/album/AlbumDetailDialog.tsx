import { IAlbum, AlbumType } from "type";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { CalendarIcon, ImageIcon, Pencil, X } from "lucide-react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { usePatchAlbum } from "@/query/album";
import { toast } from "sonner";
import Image from "next/image";
import { ALBUM_TYPE_OPTIONS } from "./config";
import { processImages } from "@/hooks/useImageCompress";

const MAX_IMAGES = 5;
const MAX_SIZE_MB = 10;

interface AlbumDetailDialogProps {
  album: IAlbum | null;
  onClose: () => void;
  onSuccess?: () => Promise<unknown>;
}

interface EditForm { title: string; }

const AlbumDetailDialog = ({ album, onClose, onSuccess }: AlbumDetailDialogProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editType, setEditType] = useState<AlbumType>("main");
  const [editDate, setEditDate] = useState<Date | undefined>();
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [keepUrls, setKeepUrls] = useState<string[]>([]);
  const [newImages, setNewImages] = useState<File[]>([]);
  const [newPreviews, setNewPreviews] = useState<string[]>([]);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<EditForm>();
  const { mutate: patchAlbum, isPending } = usePatchAlbum();

  useEffect(() => {
    if (album && isEditing) {
      reset({ title: album.title });
      setEditType(album.albumType);
      setEditDate(album.date ? new Date(album.date) : undefined);
      setKeepUrls(album.imageUrls ?? []);
      setNewImages([]);
      setNewPreviews([]);
    }
  }, [album, isEditing]);

  const handleClose = () => {
    setIsEditing(false);
    setKeepUrls([]);
    setNewImages([]);
    setNewPreviews([]);
    onClose();
  };

  const totalCount = keepUrls.length + newImages.length;
  const remaining = MAX_IMAGES - totalCount;

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    e.target.value = "";
    const processed = await processImages(files);
    const merged = [...newImages, ...processed].slice(0, MAX_IMAGES - keepUrls.length);
    setNewImages(merged);
    setNewPreviews(merged.map((f) => URL.createObjectURL(f)));
  };

  const removeNewImage = (idx: number) => {
    const next = newImages.filter((_, i) => i !== idx);
    setNewImages(next);
    setNewPreviews(next.map((f) => URL.createObjectURL(f)));
  };

  const onEditSubmit = (fd: EditForm) => {
    if (!album || !editDate) return;
    const formData = new FormData();
    formData.append("title", fd.title);
    formData.append("type", editType);
    formData.append("date", format(editDate, "yyyy-MM-dd"));
    keepUrls.forEach((url) => formData.append("existingImageUrls", url));
    newImages.forEach((img) => formData.append("images", img));

    patchAlbum({ id: album.id, formData }, {
      onSuccess: async () => {
        toast.success("수정되었습니다.");
        await onSuccess?.();
        setIsEditing(false);
      },
      onError: () => toast.error("에러가 발생했습니다."),
    });
  };

  const typeLabel = ALBUM_TYPE_OPTIONS.find((o) => o.value === album?.albumType)?.label ?? "";

  return (
    <Dialog open={!!album} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="flex h-[90dvh] max-h-[90dvh] flex-col gap-0 p-0 sm:max-w-lg">

        {/* 헤더 */}
        <DialogHeader className="shrink-0 border-b px-6 py-4">
          {isEditing ? (
            <div className="flex items-center justify-between pr-8">
              <DialogTitle className="text-base">앨범 수정</DialogTitle>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-muted-foreground"
                onClick={() => setIsEditing(false)}
              >
                <X className="mr-1 size-3.5" />
                취소
              </Button>
            </div>
          ) : (
            <div className="flex items-start justify-between pr-8">
              <div className="min-w-0 flex-1 space-y-1.5">
                <DialogTitle className="truncate text-base">{album?.title}</DialogTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs font-normal">
                    {typeLabel}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{album?.date}</span>
                  <span className="flex items-center gap-0.5 text-xs text-muted-foreground">
                    <ImageIcon className="size-3" />
                    {album?.imageUrls?.length ?? 0}
                  </span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="ml-2 h-8 shrink-0 px-2"
                onClick={() => setIsEditing(true)}
              >
                <Pencil className="mr-1 size-3.5" />
                수정
              </Button>
            </div>
          )}
        </DialogHeader>

        {/* 본문 */}
        {isEditing ? (
          <>
            <ScrollArea className="min-h-0 flex-1">
              <form id="album-edit-form" onSubmit={handleSubmit(onEditSubmit)} className="flex flex-col gap-5 px-6 py-5">

                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium">카테고리</Label>
                  <Select value={editType} onValueChange={(v) => setEditType(v as AlbumType)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {ALBUM_TYPE_OPTIONS.filter((o) => o.value !== "all").map((o) => (
                        <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium">제목</Label>
                  <Input {...register("title", { required: "제목을 입력해주세요." })} />
                  {errors.title && <p className="text-xs text-destructive">{errors.title.message}</p>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium">행사 날짜</Label>
                  <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className={cn(
                          "border-input flex h-9 w-full items-center gap-2 rounded-md border bg-transparent px-3 text-left text-sm shadow-sm transition-colors hover:bg-accent",
                          !editDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="size-4 shrink-0" />
                        {editDate ? format(editDate, "PPP", { locale: ko }) : "날짜 선택"}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={editDate} onSelect={(d) => { setEditDate(d); setCalendarOpen(false); }} />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium">이미지</Label>
                    <span className="text-xs text-muted-foreground">{totalCount} / {MAX_IMAGES}</span>
                  </div>

                  {/* 기존 이미지 */}
                  {keepUrls.length > 0 && (
                    <div className="grid grid-cols-3 gap-2">
                      {keepUrls.map((url, i) => (
                        <div key={url} className="relative aspect-square overflow-hidden rounded-md border">
                          <img src={url} alt={`기존 이미지 ${i + 1}`} className="h-full w-full object-cover" />
                          <button
                            type="button"
                            onClick={() => setKeepUrls((prev) => prev.filter((u) => u !== url))}
                            className="absolute right-1 top-1 flex size-5 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
                          >
                            <X className="size-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 새 이미지 미리보기 */}
                  {newPreviews.length > 0 && (
                    <div className="grid grid-cols-3 gap-2">
                      {newPreviews.map((src, i) => (
                        <div key={i} className="relative aspect-square overflow-hidden rounded-md border">
                          <Image src={src} fill alt={`새 이미지 ${i + 1}`} className="object-cover" />
                          <button
                            type="button"
                            onClick={() => removeNewImage(i)}
                            className="absolute right-1 top-1 flex size-5 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
                          >
                            <X className="size-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 추가 업로드 */}
                  {remaining > 0 && (
                    <label className="flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-muted-foreground/25 p-5 text-center transition-colors hover:border-muted-foreground/50 hover:bg-muted/30">
                      <ImageIcon className="size-5 text-muted-foreground/50" />
                      <span className="text-sm text-muted-foreground">클릭하여 추가</span>
                      <span className="text-xs text-muted-foreground/70">최대 {remaining}장 · 각 {MAX_SIZE_MB}MB 이하</span>
                      <input type="file" accept="image/*" multiple className="hidden" onChange={handleImageChange} />
                    </label>
                  )}
                </div>

              </form>
            </ScrollArea>

            {/* 저장 푸터 */}
            <div className="shrink-0 border-t bg-background px-6 py-4">
              <Button
                form="album-edit-form"
                type="submit"
                className="w-full"
                disabled={isPending}
                isLoading={isPending}
              >
                저장
              </Button>
            </div>
          </>
        ) : (
          <ScrollArea className="min-h-0 flex-1">
            <div className="flex flex-col gap-3 px-6 py-5">
              {(album?.imageUrls ?? []).length > 0 ? (
                album!.imageUrls.map((url, index) => (
                  <img
                    key={url}
                    src={url}
                    alt={`앨범 이미지 ${index + 1}`}
                    className="w-full rounded-lg border object-contain"
                  />
                ))
              ) : (
                <div className="flex flex-col items-center justify-center gap-2 py-16 text-muted-foreground">
                  <ImageIcon className="size-10 opacity-30" />
                  <p className="text-sm">이미지가 없습니다.</p>
                </div>
              )}
            </div>
          </ScrollArea>
        )}

      </DialogContent>
    </Dialog>
  );
};

export default AlbumDetailDialog;
