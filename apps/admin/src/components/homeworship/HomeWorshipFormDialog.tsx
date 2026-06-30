import { usePostHomeWorship } from "@/query/homeWorship";
import { useForm } from "react-hook-form";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { processImages } from "@/hooks/useImageCompress";
import FormDialog from "@/components/common/FormDialog";
import ImageListUpload from "@/components/common/ImageListUpload";

const Editor = dynamic(() => import("@/components/common/editor").then((mod) => mod.Editor), {
  ssr: false,
  loading: () => (
    <div className="flex h-32 items-center justify-center">
      <Spinner />
    </div>
  ),
});

interface HomeWorshipFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => Promise<unknown>;
}

interface FormValues {
  title: string;
  userName: string;
}

const MAX_IMAGES = 5;
const ADMIN_PASSWORD = "admin1234";

const HomeWorshipFormDialog = ({ open, onClose, onSuccess }: HomeWorshipFormDialogProps) => {
  const { mutate, isPending } = usePostHomeWorship();
  const [content, setContent] = useState("");
  const [contentError, setContentError] = useState("");
  const [isPinned, setIsPinned] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [imageError, setImageError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const handleClose = () => {
    reset();
    setContent("");
    setContentError("");
    setImageError("");
    setIsPinned(false);
    setSelectedDate(undefined);
    imagePreviews.forEach((url) => URL.revokeObjectURL(url));
    setImageFiles([]);
    setImagePreviews([]);
    onClose();
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    e.target.value = "";
    const processed = await processImages(files, "content");
    const combined = [...imageFiles, ...processed].slice(0, MAX_IMAGES);
    setImageFiles(combined);
    const urls = combined.map((f) => URL.createObjectURL(f));
    imagePreviews.forEach((u) => URL.revokeObjectURL(u));
    setImagePreviews(urls);
    if (combined.length > 0) setImageError("");
  };

  const handleRemoveImage = (index: number) => {
    URL.revokeObjectURL(imagePreviews[index]);
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = (data: FormValues) => {
    let valid = true;
    if (!content) {
      setContentError("내용을 입력해주세요.");
      valid = false;
    } else setContentError("");
    if (imageFiles.length === 0) {
      setImageError("사진을 최소 1개 업로드해주세요.");
      valid = false;
    } else setImageError("");
    if (!selectedDate || !valid) return;

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("date", format(selectedDate, "yyyy-MM-dd"));
    formData.append("content", content);
    formData.append("password", ADMIN_PASSWORD);
    formData.append("userName", data.userName);
    formData.append("isPinned", String(isPinned));
    imageFiles.forEach((img) => formData.append("images", img));

    mutate(formData, {
      onSuccess: async () => {
        toast.success("등록되었습니다.");
        await onSuccess?.();
        handleClose();
      },
      onError: () => toast.error("에러가 발생했습니다."),
    });
  };

  return (
    <FormDialog
      open={open}
      onClose={handleClose}
      title="가정예배 등록"
      footer={
        <div className="flex gap-2">
          <Button type="button" variant="outline" className="flex-1" onClick={handleClose}>
            취소
          </Button>
          <Button
            form="hw-form"
            type="submit"
            className="flex-1"
            disabled={isPending || !selectedDate || imageFiles.length === 0}
            isLoading={isPending}
          >
            등록
          </Button>
        </div>
      }
    >
        <form id="hw-form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* 날짜 */}
          <FormField label="예배 날짜" required>
            <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "border-input hover:bg-accent flex h-9 w-full items-center gap-2 rounded-md border bg-transparent px-3 py-1 text-left text-sm shadow-sm transition-colors",
                    !selectedDate && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="size-4 shrink-0" />
                  {selectedDate
                    ? format(selectedDate, "PPP", { locale: ko })
                    : "날짜를 선택해주세요"}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => {
                    setSelectedDate(date);
                    setCalendarOpen(false);
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </FormField>

          {/* 제목 */}
          <FormField label="제목" required error={errors.title?.message}>
            <Input
              {...register("title", { required: "제목을 입력해주세요." })}
              placeholder="제목을 입력해주세요"
            />
          </FormField>

          {/* 작성자 */}
          <FormField label="작성자" required error={errors.userName?.message}>
            <Input
              {...register("userName", { required: "작성자를 입력해주세요." })}
              placeholder="작성자 이름"
            />
          </FormField>

          {/* 사진 */}
          <FormField label="사진" required error={imageError}>
            <ImageListUpload
              previews={imagePreviews}
              onChange={handleImageChange}
              onRemove={handleRemoveImage}
              maxImages={MAX_IMAGES}
            />
          </FormField>

          {/* 내용 */}
          <div className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium">
              내용<span className="text-destructive ml-0.5">*</span>
            </Label>
            <Editor
              setValue={(v) => {
                setContent(v);
                if (v) setContentError("");
              }}
            />
            {contentError && <p className="text-destructive text-xs">{contentError}</p>}
          </div>

          {/* 공지 */}
          <div className="flex items-center justify-between rounded-lg border p-3">
            <div>
              <p className="text-sm font-medium">공지로 등록</p>
              <p className="text-muted-foreground text-xs">목록 상단에 고정됩니다</p>
            </div>
            <Switch checked={isPinned} onCheckedChange={setIsPinned} />
          </div>
        </form>
    </FormDialog>
  );
};

interface FormFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

const FormField = ({ label, required, error, children }: FormFieldProps) => (
  <div className="flex flex-col gap-1.5">
    <Label className="text-sm font-medium">
      {label}
      {required && <span className="text-destructive ml-0.5">*</span>}
    </Label>
    {children}
    {error && <p className="text-destructive text-xs">{error}</p>}
  </div>
);

export default HomeWorshipFormDialog;
