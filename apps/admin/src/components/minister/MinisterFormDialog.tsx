import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImageIcon, X } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { usePatchMinister, usePostMinister } from "@/query/minister";
import { processImages } from "@/hooks/useImageCompress";
import type { MinisterForm } from "@/api/minister";
import type { IMinister, StaffTabType } from "type";

const OFFICER_OPTIONS: Record<StaffTabType, { value: string; label: string }[]> = {
  retiredPastor: [{ value: "retired", label: "원로목사" }],
  minister: [
    { value: "associate", label: "목사" },
    { value: "cooperativePastor", label: "협동목사" },
    { value: "licentiate", label: "강도사" },
    { value: "evangelist", label: "전도사" },
  ],
  elder: [
    { value: "elder", label: "장로" },
    { value: "otherElder", label: "협동장로" },
  ],
  missionary: [{ value: "missionary", label: "선교사" }],
  staff: [
    { value: "staff", label: "간사" },
    { value: "manager", label: "관리장" },
    { value: "elder", label: "장로" },
  ],
  retiredElder: [{ value: "retiredElder", label: "원로장로" }],
};

interface Props {
  open: boolean;
  onClose: () => void;
  tabType: StaffTabType;
  target?: IMinister | null;
}

const MinisterFormDialog = ({ open, onClose, tabType, target }: Props) => {
  const isEdit = !!target;
  const isRetiredPastor = tabType === "retiredPastor";

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<MinisterForm>();
  const { mutate: post, isPending: isPosting } = usePostMinister();
  const { mutate: patch, isPending: isPatching } = usePatchMinister();
  const isPending = isPosting || isPatching;

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const showGreeting = tabType === "minister";
  const officerOptions = OFFICER_OPTIONS[tabType] ?? [];

  useEffect(() => {
    if (open && target) {
      reset({
        name: target.name,
        position: target.position ?? "",
        officerType: target.officerType,
        tabType: target.tabType,
        greeting: target.greeting ?? "",
        description: target.description ?? "",
        order: target.order != null ? String(target.order) : "",
      });
      setPreview(target.imageUrl);
    } else if (!open) {
      reset({
        name: "",
        position: "",
        officerType: "",
        tabType,
        greeting: "",
        description: "",
        order: "",
      });
      setImage(null);
      setPreview(null);
    }
  }, [open, target, tabType, reset]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const [processed] = await processImages([file], "thumbnail");
    setImage(processed);
    setPreview(URL.createObjectURL(processed));
  };

  const handleClose = () => {
    setImage(null);
    setPreview(null);
    onClose();
  };

  const onSubmit = (form: MinisterForm) => {
    if (!isEdit && !image) return toast.error("사진을 업로드해주세요.");

    const formData = new FormData();
    formData.append("tabType", tabType);
    if (isRetiredPastor) {
      formData.append("name", "이덕진");
      formData.append("officerType", "retired");
      if (form.description) formData.append("description", form.description);
    } else {
      formData.append("name", form.name);
      formData.append("officerType", form.officerType);
      if (form.position) formData.append("position", form.position);
      if (showGreeting && form.greeting) formData.append("greeting", form.greeting);
    }
    if (form.order) formData.append("order", form.order);
    if (image) formData.append("image", image);

    const handleError = (err: unknown) => {
      const status = (err as { response?: { status?: number } })?.response?.status;
      if (status === 409) return toast.error("이미 같은 순서 번호가 존재합니다.");
      toast.error("에러가 발생했습니다.");
    };

    if (isEdit) {
      patch(
        { id: target.id, form: formData },
        {
          onSuccess: () => {
            toast.success("수정되었습니다.");
            handleClose();
          },
          onError: handleError,
        },
      );
    } else {
      post(formData, {
        onSuccess: () => {
          toast.success("추가되었습니다.");
          handleClose();
        },
        onError: handleError,
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="flex h-[90dvh] max-h-[90dvh] flex-col gap-0 p-0 sm:max-w-lg">
        <DialogHeader className="shrink-0 border-b px-6 py-4">
          <DialogTitle>{isEdit ? "수정" : "추가"}</DialogTitle>
        </DialogHeader>

        <ScrollArea className="min-h-0 flex-1">
          <form
            id="minister-form"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 px-6 py-5"
          >
            {!isRetiredPastor && (
              <>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium">이름 *</Label>
                  <Input
                    placeholder="홍길동"
                    {...register("name", { required: "이름을 입력해주세요." })}
                  />
                  {errors.name && <p className="text-destructive text-xs">{errors.name.message}</p>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium">직책 *</Label>
                  <Controller
                    name="officerType"
                    control={control}
                    rules={{ required: "직책을 선택해주세요." }}
                    render={({ field }) => (
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="직책 선택" />
                        </SelectTrigger>
                        <SelectContent>
                          {officerOptions.map((o) => (
                            <SelectItem key={o.value} value={o.value}>
                              {o.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.officerType && (
                    <p className="text-destructive text-xs">{errors.officerType.message}</p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium">담당 사역 / 직위</Label>
                  <Input
                    placeholder={
                      tabType === "missionary" ? "방글라데시 선교사" : "교구, 예배위원회"
                    }
                    {...register("position")}
                  />
                </div>

                {showGreeting && (
                  <div className="flex flex-col gap-1.5">
                    <Label className="text-sm font-medium">인사말 *</Label>
                    <Textarea
                      placeholder="한 줄 인사말을 입력해주세요."
                      rows={3}
                      className="resize-none"
                      {...register("greeting", { required: "인사말을 입력해주세요." })}
                    />
                    {errors.greeting && (
                      <p className="text-destructive text-xs">{errors.greeting.message}</p>
                    )}
                  </div>
                )}
              </>
            )}

            {isRetiredPastor && (
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium">설명</Label>
                <Textarea
                  placeholder="대한예수교장로회(합동) GMS 명예선교사, 꿈을꾸는세계선교회 대표"
                  rows={3}
                  className="resize-none"
                  {...register("description")}
                />
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <Label className="text-sm font-medium">순서</Label>
              <Input type="number" min={1} placeholder="순서 번호 (선택)" {...register("order")} />
              <p className="text-muted-foreground text-xs">
                같은 탭 내 중복 불가, 비워두면 순서 미지정
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label className="text-sm font-medium">사진 {!isEdit && "*"}</Label>
              {preview ? (
                <div className="relative w-full overflow-hidden rounded-lg border">
                  <img src={preview} alt="사진" className="w-full object-contain" />
                  <button
                    type="button"
                    onClick={() => {
                      setImage(null);
                      setPreview(null);
                    }}
                    className="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
                  >
                    <X className="size-3.5" />
                  </button>
                </div>
              ) : (
                <label className="border-muted-foreground/25 hover:border-muted-foreground/50 hover:bg-muted/30 flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed p-6 text-center transition-colors">
                  <ImageIcon className="text-muted-foreground/50 size-6" />
                  <span className="text-muted-foreground text-sm">클릭하여 이미지 업로드</span>
                  <span className="text-muted-foreground/70 text-xs">
                    1장 · 10MB 이하 (초과 시 자동 압축)
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
              )}
            </div>
          </form>
        </ScrollArea>

        <div className="bg-background shrink-0 border-t px-6 py-4">
          <Button
            form="minister-form"
            className="w-full"
            disabled={isPending}
            isLoading={isPending}
          >
            {isEdit ? "수정" : "추가"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MinisterFormDialog;
