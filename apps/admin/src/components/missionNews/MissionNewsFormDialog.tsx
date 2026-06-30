import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";
import { useController, useForm } from "react-hook-form";
import { usePostMissionNews } from "@/query/missionNews";
import { toast } from "sonner";
import dynamic from "next/dynamic";
import { Spinner } from "../ui/spinner";
import { processImages } from "@/hooks/useImageCompress";
import { MonthPicker } from "@/components/common/MonthPicker";
import FormDialog from "@/components/common/FormDialog";
import ImageListUpload from "@/components/common/ImageListUpload";
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

const FORM_ID = "mission-news-form";

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
    <FormDialog
      open={open}
      onClose={handleClose}
      title="선교지 소식 등록"
      footer={
        <Button
          form={FORM_ID}
          type="submit"
          className="w-full"
          disabled={isPending}
          isLoading={isPending}
        >
          등록
        </Button>
      }
    >
      <form
        id={FORM_ID}
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full min-w-0 flex-col gap-5"
      >
        <div className="flex flex-col gap-1.5">
          <Label className="text-sm font-medium">날짜</Label>
          <MonthPicker value={dateField.value} onChange={dateField.onChange} />
          {dateState.error && (
            <p className="text-destructive text-xs">{dateState.error.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label className="text-sm font-medium">제목</Label>
          <Input
            placeholder="제목을 입력해주세요"
            {...register("title", { required: "제목을 입력해주세요." })}
          />
          {errors.title && <p className="text-destructive text-xs">{errors.title.message}</p>}
        </div>

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
          {errors.location && <p className="text-destructive text-xs">선교지를 선택해주세요.</p>}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label className="text-sm font-medium">이미지</Label>
          <ImageListUpload
            previews={previews}
            onChange={handleImageChange}
            onRemove={handleRemoveImage}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label className="text-sm font-medium">내용</Label>
          <Editor setValue={setContent} />
        </div>
      </form>
    </FormDialog>
  );
};

export default MissionNewsFormDialog;
