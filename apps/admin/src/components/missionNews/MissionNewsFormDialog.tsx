import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { ImagePlus, X } from "lucide-react";
import { useState } from "react";
import { useController, useForm } from "react-hook-form";
import { usePostMissionNews } from "@/query/missionNews";
import { toast } from "sonner";
import { ScrollArea } from "../ui/scroll-area";
import dynamic from "next/dynamic";
import { Spinner } from "../ui/spinner";
import { processImages } from "@/hooks/useImageCompress";
import { MonthPicker } from "@/components/common/MonthPicker";
import { MissionLocation } from "type";
import { MISSION_LOCATION_OPTIONS } from "./config";

const Editor = dynamic(() => import("@/components/common/editor").then((m) => m.Editor), {
  ssr: false,
  loading: () => (
    <div className="flex h-40 items-center justify-center">
      <Spinner />
    </div>
  ),
});

interface MissionNewsFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

interface MissionNewsForm {
  title: string;
  userName: string;
  date: string;
  location: MissionLocation;
}

const MissionNewsFormDialog = ({ open, onClose, onSuccess }: MissionNewsFormDialogProps) => {
  const [content, setContent] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<MissionNewsForm>();
  const { mutate: postMissionNews, isPending } = usePostMissionNews();

  const { field: dateField, fieldState: dateState } = useController({
    name: "date",
    control,
    rules: { required: "날짜를 입력해주세요." },
  });

  const selectedLocation = watch("location");

  const handleClose = () => {
    reset();
    setContent("");
    setImages([]);
    setPreviews([]);
    onClose();
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    e.target.value = "";
    if (files.length === 0) return;
    const processed = await processImages(files, "content");
    setImages((prev) => [...prev, ...processed]);
    setPreviews((prev) => [...prev, ...processed.map((f) => URL.createObjectURL(f))]);
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = (fd: MissionNewsForm) => {
    if (images.length === 0) return toast.error("이미지를 최소 1개 업로드해주세요.");
    if (!content) return toast.error("내용을 입력해주세요.");

    const formData = new FormData();
    formData.append("title", fd.title);
    formData.append("userName", fd.userName);
    formData.append("date", fd.date);
    formData.append("content", content);
    formData.append("location", fd.location);
    images.forEach((image) => formData.append("images", image));

    postMissionNews(formData, {
      onSuccess: () => {
        toast.success("선교지 소식이 등록되었습니다.");
        handleClose();
        onSuccess?.();
      },
      onError: () => toast.error("에러가 발생했습니다."),
    });
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="flex h-[90dvh] max-h-[90dvh] flex-col gap-0 p-0 sm:max-w-lg">
        <DialogHeader className="shrink-0 border-b px-6 py-4">
          <DialogTitle>선교지 소식 등록</DialogTitle>
        </DialogHeader>

        <ScrollArea className="min-h-0 flex-1">
          <form
            id="mission-news-form"
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full min-w-0 flex-col gap-5 px-6 py-5"
          >
            {/* 날짜 */}
            <div className="flex flex-col gap-1.5">
              <Label className="text-sm font-medium">날짜</Label>
              <MonthPicker value={dateField.value} onChange={dateField.onChange} />
              {dateState.error && (
                <p className="text-destructive text-xs">{dateState.error.message}</p>
              )}
            </div>

            {/* 제목 */}
            <div className="flex flex-col gap-1.5">
              <Label className="text-sm font-medium">제목</Label>
              <Input
                placeholder="제목을 입력해주세요"
                {...register("title", { required: "제목을 입력해주세요." })}
              />
              {errors.title && <p className="text-destructive text-xs">{errors.title.message}</p>}
            </div>

            {/* 작성자 */}
            <div className="flex flex-col gap-1.5">
              <Label className="text-sm font-medium">작성자</Label>
              <Input
                placeholder="작성자 이름"
                {...register("userName", { required: "작성자를 입력해주세요." })}
              />
              {errors.userName && (
                <p className="text-destructive text-xs">{errors.userName.message}</p>
              )}
            </div>

            {/* 선교지 */}
            <div className="flex flex-col gap-1.5">
              <Label className="text-sm font-medium">선교지</Label>
              <Select
                value={selectedLocation}
                onValueChange={(v) =>
                  setValue("location", v as MissionLocation, { shouldValidate: true })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="선교지를 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  {MISSION_LOCATION_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.location && (
                <p className="text-destructive text-xs">선교지를 선택해주세요.</p>
              )}
            </div>

            {/* 이미지 */}
            <div className="flex flex-col gap-1.5">
              <Label className="text-sm font-medium">이미지</Label>
              {previews.length > 0 && (
                <div className="grid grid-cols-3 gap-2">
                  {previews.map((url, i) => (
                    <div key={url} className="relative aspect-square">
                      <img
                        src={url}
                        alt={`이미지 ${i + 1}`}
                        className="h-full w-full rounded-md border object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(i)}
                        className="bg-destructive absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full text-white shadow"
                      >
                        <X className="size-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <label className="border-muted-foreground/25 hover:border-muted-foreground/50 hover:bg-muted/30 flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed p-4 text-center transition-colors">
                <ImagePlus className="text-muted-foreground/50 size-5" />
                <span className="text-muted-foreground text-sm">클릭하여 이미지 추가</span>
                <span className="text-muted-foreground/70 text-xs">
                  여러 장 선택 가능 · 10MB 이하 자동 압축
                </span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>

            {/* 내용 */}
            <div className="flex flex-col gap-1.5">
              <Label className="text-sm font-medium">내용</Label>
              <Editor setValue={setContent} />
            </div>
          </form>
        </ScrollArea>

        <div className="bg-background shrink-0 border-t px-6 py-4">
          <Button
            form="mission-news-form"
            className="w-full"
            disabled={isPending}
            isLoading={isPending}
          >
            등록
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MissionNewsFormDialog;
