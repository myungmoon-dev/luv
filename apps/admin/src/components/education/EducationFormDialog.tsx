import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FormDialog from "@/components/common/FormDialog";
import ImageUpload from "@/components/common/ImageUpload";
import ImageListUpload from "@/components/common/ImageListUpload";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { usePatchEducation, usePostEducation } from "@/query/education";
import { processImages } from "@/hooks/useImageCompress";
import { EDUCATION_TYPE_OPTIONS } from "./config";
import type { EducationType, IEducation, IEducationCoreMinistry } from "@/api/education";
import { X } from "lucide-react";

const FORM_ID = "education-form";

interface Props {
  open: boolean;
  onClose: () => void;
  target?: IEducation | null;
}

interface FormValues {
  type: EducationType;
  slug: string;
  department: string;
  introduction: string;
  target: string;
  time: string;
  place: string;
  meetingTime: string;
  heroImgClass: string;
  order: string;
}

interface CoreMinistryDraft {
  titleKr: string;
  titleEn: string;
  description: string;
  imgClass: string;
  imageUrl?: string; // 기존 이미지 유지
  newImage?: File; // 새로 업로드
  preview?: string;
}

const emptyCore: CoreMinistryDraft = { titleKr: "", titleEn: "", description: "", imgClass: "" };

const EducationFormDialog = ({ open, onClose, target }: Props) => {
  const isEdit = !!target;
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormValues>();

  const { mutate: post, isPending: isPosting } = usePostEducation();
  const { mutate: patch, isPending: isPatching } = usePatchEducation();
  const isPending = isPosting || isPatching;

  const [heroImage, setHeroImage] = useState<File | null>(null);
  const [heroPreview, setHeroPreview] = useState<string | null>(null);

  // 상단 이미지: 기존 URL은 string[], 새 파일은 File[]
  const [existingImageUrls, setExistingImageUrls] = useState<string[]>([]);
  const [newImages, setNewImages] = useState<File[]>([]);
  const [newImagePreviews, setNewImagePreviews] = useState<string[]>([]);

  const [coreMinistries, setCoreMinistries] = useState<CoreMinistryDraft[]>([]);

  useEffect(() => {
    if (open && target) {
      reset({
        type: target.type,
        slug: target.slug,
        department: target.department,
        introduction: target.introduction,
        target: target.target,
        time: target.time,
        place: target.place,
        meetingTime: target.meetingTime ?? "",
        heroImgClass: target.heroImgClass ?? "",
        order: target.order != null ? String(target.order) : "",
      });
      setHeroPreview(target.heroImageUrl);
      setExistingImageUrls(target.imageUrls);
      setNewImages([]);
      setNewImagePreviews([]);
      const drafts: CoreMinistryDraft[] = target.coreMinistries.map(
        (c: IEducationCoreMinistry) => ({
          titleKr: c.titleKr,
          titleEn: c.titleEn ?? "",
          description: c.description,
          imgClass: c.imgClass ?? "",
          imageUrl: c.imageUrl,
          preview: c.imageUrl,
        }),
      );
      setCoreMinistries(drafts);
    } else if (!open) {
      reset({
        type: "infants",
        slug: "",
        department: "",
        introduction: "",
        target: "",
        time: "",
        place: "",
        meetingTime: "",
        heroImgClass: "",
        order: "",
      });
      setHeroImage(null);
      setHeroPreview(null);
      setExistingImageUrls([]);
      setNewImages([]);
      setNewImagePreviews([]);
      setCoreMinistries([]);
    }
  }, [open, target, reset]);

  const addCore = () => setCoreMinistries((prev) => [...prev, { ...emptyCore }]);
  const removeCore = (idx: number) =>
    setCoreMinistries((prev) => prev.filter((_, i) => i !== idx));

  const handleHeroChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const [processed] = await processImages([file], "banner");
    setHeroImage(processed);
    setHeroPreview(URL.createObjectURL(processed));
  };

  const handleImagesChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    e.target.value = "";
    if (files.length === 0) return;
    const processed = await processImages(files, "content");
    setNewImages((prev) => [...prev, ...processed]);
    setNewImagePreviews((prev) => [...prev, ...processed.map((f) => URL.createObjectURL(f))]);
  };

  const removeExistingImage = (index: number) => {
    setExistingImageUrls((prev) => prev.filter((_, i) => i !== index));
  };
  const removeNewImage = (index: number) => {
    setNewImages((prev) => prev.filter((_, i) => i !== index));
    setNewImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const updateCore = (idx: number, patch: Partial<CoreMinistryDraft>) => {
    setCoreMinistries((prev) => prev.map((c, i) => (i === idx ? { ...c, ...patch } : c)));
  };

  const handleCoreImage = async (idx: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const [processed] = await processImages([file], "content");
    updateCore(idx, {
      newImage: processed,
      preview: URL.createObjectURL(processed),
      imageUrl: undefined,
    });
  };

  const removeCoreImage = (idx: number) => {
    updateCore(idx, { newImage: undefined, preview: undefined, imageUrl: undefined });
  };

  const onSubmit = (form: FormValues) => {
    if (!isEdit && !heroImage) return toast.error("배너 이미지를 업로드해주세요.");

    const formData = new FormData();
    formData.append("type", form.type);
    formData.append("slug", form.slug);
    formData.append("department", form.department);
    formData.append("introduction", form.introduction);
    formData.append("target", form.target);
    formData.append("time", form.time);
    formData.append("place", form.place);
    if (form.meetingTime) formData.append("meetingTime", form.meetingTime);
    if (form.heroImgClass) formData.append("heroImgClass", form.heroImgClass);
    if (form.order) formData.append("order", form.order);
    if (heroImage) formData.append("heroImage", heroImage);

    existingImageUrls.forEach((url) => formData.append("existingImageUrls", url));
    newImages.forEach((file) => formData.append("images", file));

    // coreMinistries JSON
    const coreJson = coreMinistries.map((c) => ({
      titleKr: c.titleKr,
      titleEn: c.titleEn,
      description: c.description,
      imgClass: c.imgClass,
      imageUrl: c.imageUrl ?? null,
    }));
    formData.append("coreMinistriesJson", JSON.stringify(coreJson));

    coreMinistries.forEach((c, i) => {
      if (c.newImage) {
        formData.append("coreMinistryImages", c.newImage);
        formData.append("coreMinistryImageIndexes", String(i));
      }
    });

    const callbacks = {
      onSuccess: () => {
        toast.success(isEdit ? "수정되었습니다." : "등록되었습니다.");
        onClose();
      },
      onError: () => toast.error("에러가 발생했습니다."),
    };

    if (isEdit) {
      patch({ id: target.id, form: formData }, callbacks);
    } else {
      post(formData, callbacks);
    }
  };

  return (
    <FormDialog
      open={open}
      onClose={onClose}
      title={isEdit ? "부서 수정" : "부서 등록"}
      footer={
        <Button
          form={FORM_ID}
          type="submit"
          className="w-full"
          disabled={isPending}
          isLoading={isPending}
        >
          {isEdit ? "수정" : "등록"}
        </Button>
      }
    >
      <form id={FORM_ID} onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <Field label="부서 타입" error={errors.type?.message}>
          <Controller
            name="type"
            control={control}
            rules={{ required: "부서 타입을 선택해주세요." }}
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={field.onChange}
                disabled={isEdit}
              >
                <SelectTrigger>
                  <SelectValue placeholder="부서 선택" />
                </SelectTrigger>
                <SelectContent>
                  {EDUCATION_TYPE_OPTIONS.map((o) => (
                    <SelectItem key={o.value} value={o.value}>
                      {o.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </Field>

        <Field label="부서명" error={errors.department?.message}>
          <Input
            placeholder="예: 영아부"
            {...register("department", { required: "부서명을 입력해주세요." })}
          />
        </Field>

        <Field label="URL slug" error={errors.slug?.message}>
          <Input
            placeholder="예: infants"
            {...register("slug", { required: "slug를 입력해주세요." })}
          />
        </Field>

        <Field label="대상">
          <Input placeholder="예: 만 0세 - 3세" {...register("target")} />
        </Field>

        <Field label="예배 시간">
          <Input placeholder="예: 오전 11:30 - 12:30" {...register("time")} />
        </Field>

        <Field label="예배 장소">
          <Input placeholder="예: 사랑채플 2층 체조실" {...register("place")} />
        </Field>

        <Field label="모임 시간 (선택)">
          <Input placeholder="모임이 별도 시간일 때" {...register("meetingTime")} />
        </Field>

        <Field label="표시 순서">
          <Input type="number" placeholder="예: 1" min={1} {...register("order")} />
        </Field>

        <Field label="소개">
          <Textarea
            rows={4}
            placeholder="부서 소개를 입력해주세요."
            className="resize-none"
            {...register("introduction")}
          />
        </Field>

        <Field label={`배너 이미지 ${!isEdit ? "*" : ""}`}>
          <ImageUpload
            preview={heroPreview}
            onChange={handleHeroChange}
            onRemove={() => {
              setHeroImage(null);
              setHeroPreview(null);
            }}
          />
          <Input
            placeholder="배너 위치 클래스 (예: object-[50%_70%])"
            className="mt-2"
            {...register("heroImgClass")}
          />
        </Field>

        <Field label="상단 이미지 (최대 3장)">
          <ExistingImagesGrid urls={existingImageUrls} onRemove={removeExistingImage} />
          <ImageListUpload
            previews={newImagePreviews}
            onChange={handleImagesChange}
            onRemove={removeNewImage}
            maxImages={3 - existingImageUrls.length}
          />
        </Field>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">핵심 사역 ({coreMinistries.length}개)</Label>
            <Button type="button" size="sm" variant="outline" onClick={addCore}>
              + 추가
            </Button>
          </div>
          {coreMinistries.length === 0 && (
            <p className="text-xs text-muted-foreground">
              핵심 사역이 없습니다. 추가하려면 위 버튼을 클릭하세요.
            </p>
          )}
          {coreMinistries.map((c, i) => (
            <CoreMinistryEditor
              key={i}
              index={i}
              data={c}
              onChange={(patch) => updateCore(i, patch)}
              onImageChange={(e) => handleCoreImage(i, e)}
              onImageRemove={() => removeCoreImage(i)}
              onRemove={() => removeCore(i)}
            />
          ))}
        </div>
      </form>
    </FormDialog>
  );
};

const Field = ({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-1.5">
    <Label className="text-sm font-medium">{label}</Label>
    {children}
    {error && <p className="text-destructive text-xs">{error}</p>}
  </div>
);

const ExistingImagesGrid = ({
  urls,
  onRemove,
}: {
  urls: string[];
  onRemove: (idx: number) => void;
}) => {
  if (urls.length === 0) return null;
  return (
    <div className="grid grid-cols-3 gap-2">
      {urls.map((url, i) => (
        <div key={url} className="relative aspect-square overflow-hidden rounded-md border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={url} alt={`기존 ${i + 1}`} className="h-full w-full object-cover" />
          <button
            type="button"
            onClick={() => onRemove(i)}
            className="absolute right-1 top-1 flex size-5 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
          >
            <X className="size-3" />
          </button>
        </div>
      ))}
    </div>
  );
};

const CoreMinistryEditor = ({
  index,
  data,
  onChange,
  onImageChange,
  onImageRemove,
  onRemove,
}: {
  index: number;
  data: CoreMinistryDraft;
  onChange: (patch: Partial<CoreMinistryDraft>) => void;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onImageRemove: () => void;
  onRemove: () => void;
}) => (
  <div className="rounded-md border p-3">
    <div className="mb-2 flex items-center justify-between">
      <p className="text-xs font-medium text-muted-foreground">핵심사역 #{index + 1}</p>
      <button
        type="button"
        onClick={onRemove}
        className="text-destructive hover:text-destructive/80 text-xs"
      >
        삭제
      </button>
    </div>
    <div className="flex flex-col gap-2">
      <Input
        placeholder="제목 (한글) 예: 말씀"
        value={data.titleKr}
        onChange={(e) => onChange({ titleKr: e.target.value })}
      />
      <Input
        placeholder="제목 (영문, 선택)"
        value={data.titleEn}
        onChange={(e) => onChange({ titleEn: e.target.value })}
      />
      <Textarea
        rows={2}
        className="resize-none"
        placeholder="설명"
        value={data.description}
        onChange={(e) => onChange({ description: e.target.value })}
      />
      <ImageUpload
        preview={data.preview ?? null}
        onChange={onImageChange}
        onRemove={onImageRemove}
      />
      <Input
        placeholder="이미지 위치 클래스 (예: brightness-75 object-[0%_40%])"
        value={data.imgClass}
        onChange={(e) => onChange({ imgClass: e.target.value })}
      />
    </div>
  </div>
);

export default EducationFormDialog;
