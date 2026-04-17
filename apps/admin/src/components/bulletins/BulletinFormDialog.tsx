import { usePostBulletin } from "@/query/bulletin";
import { useForm, useWatch } from "react-hook-form";
import { useRef } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "sonner";
import { FileUp, FileText, X } from "lucide-react";

interface BulletinFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => Promise<unknown>;
}

interface FormValues {
  date: string;
  title: string;
  images: FileList;
}

const formatFileSize = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const BulletinFormDialog = ({ open, onClose, onSuccess }: BulletinFormDialogProps) => {
  const { mutate, isPending } = usePostBulletin();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm<FormValues>();

  const watchedImages = useWatch({ control, name: "images" });
  const selectedFiles = watchedImages ? Array.from(watchedImages) : [];

  const { ref: registerRef, ...registerRest } = register("images", {
    required: "PDF 파일을 추가해주세요.",
    validate: (files) =>
      !files?.length || files.length <= 1 || "PDF는 최대 1개까지 업로드 가능합니다.",
  });

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleRemoveFile = (index: number) => {
    const dt = new DataTransfer();
    selectedFiles.forEach((file, i) => {
      if (i !== index) dt.items.add(file);
    });
    setValue("images", dt.files, { shouldValidate: true });
    if (fileInputRef.current) fileInputRef.current.files = dt.files;
  };

  const onSubmit = (data: FormValues) => {
    const formData = new FormData();
    formData.append("date", data.date);
    formData.append("title", data.title);
    Array.from(data.images).forEach((file) => {
      formData.append("pdf", file);
    });

    mutate(formData, {
      onSuccess: async () => {
        toast.success("주보가 등록되었습니다.");
        await onSuccess?.();
        handleClose();
      },
      onError: () => toast.error("에러가 발생했습니다."),
    });
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="flex max-h-[90dvh] flex-col overflow-y-auto sm:max-w-md">
        <DialogHeader>
          <DialogTitle>주보 등록</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 pt-2">
          <FormField label="날짜" required error={errors.date?.message}>
            <Input
              {...register("date", {
                required: "날짜를 입력해주세요.",
                pattern: {
                  value: /^\d{4}-\d{2}-\d{2}$/,
                  message: "YYYY-MM-DD 형식으로 입력해주세요.",
                },
              })}
              placeholder="YYYY-MM-DD"
            />
          </FormField>

          <FormField label="제목" required error={errors.title?.message}>
            <Input
              {...register("title", { required: "제목을 입력해주세요." })}
              placeholder="ex) 2024년 1월 첫째주"
            />
          </FormField>

          <FormField label="PDF 파일" required error={errors.images?.message}>
            <input
              type="file"
              accept="application/pdf"
              multiple
              className="hidden"
              {...registerRest}
              ref={(el) => {
                registerRef(el);
                (fileInputRef as React.MutableRefObject<HTMLInputElement | null>).current = el;
              }}
            />
            {selectedFiles.length === 0 && (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="border-input text-muted-foreground hover:bg-muted/50 flex w-full flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed py-8 transition-colors"
              >
                <FileUp className="size-8" />
                <span className="text-sm">클릭하여 PDF를 선택하세요</span>
                <span className="text-xs text-red-500">최대 10MB</span>
              </button>
            )}

            {selectedFiles.length > 0 && (
              <ul className="mt-2 flex flex-col gap-1.5">
                {selectedFiles.map((file, index) => (
                  <li
                    key={index}
                    className="bg-muted flex items-center gap-2 rounded-md px-3 py-2"
                  >
                    <FileText className="text-muted-foreground size-4 shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{file.name}</p>
                      <p className="text-muted-foreground text-xs">{formatFileSize(file.size)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveFile(index)}
                      className="text-muted-foreground hover:text-destructive shrink-0"
                    >
                      <X className="size-3.5" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </FormField>

          <div className="flex gap-2 pt-2">
            <Button type="button" variant="outline" className="flex-1" onClick={handleClose}>
              취소
            </Button>
            <Button className="flex-1" disabled={isPending} isLoading={isPending}>
              등록
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
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

export default BulletinFormDialog;
