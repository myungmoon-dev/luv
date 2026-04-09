import { IMissionNews, MissionLocation } from "type";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { ImagePlus, Pencil, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useController, useForm } from "react-hook-form";
import { useGetMissionNews, usePutMissionNews } from "@/query/missionNews";
import { toast } from "sonner";
import dynamic from "next/dynamic";
import { Spinner } from "../ui/spinner";
import { SafeHTML } from "ui";
import { processImages } from "@/hooks/useImageCompress";
import { MonthPicker } from "@/components/common/MonthPicker";
import { MISSION_LOCATION_MAP, MISSION_LOCATION_OPTIONS } from "./config";
import dayjs from "dayjs";

const Editor = dynamic(() => import("@/components/common/editor").then((m) => m.Editor), {
  ssr: false,
  loading: () => (
    <div className="flex h-40 items-center justify-center">
      <Spinner />
    </div>
  ),
});

interface MissionNewsDetailDialogProps {
  missionNews: IMissionNews | null;
  onClose: () => void;
  onSuccess?: () => Promise<unknown>;
}

interface EditForm {
  title: string;
  userName: string;
  date: string;
  location: MissionLocation;
}

const MissionNewsDetailDialog = ({
  missionNews,
  onClose,
  onSuccess,
}: MissionNewsDetailDialogProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState("");
  const [keepImages, setKeepImages] = useState(true);
  const [newImages, setNewImages] = useState<File[]>([]);
  const [newPreviews, setNewPreviews] = useState<string[]>([]);

  const { register, handleSubmit, reset, control, setValue, watch, formState: { errors } } =
    useForm<EditForm>();
  const { mutate: putMissionNews, isPending } = usePutMissionNews();

  const { field: dateField, fieldState: dateState } = useController({
    name: "date",
    control,
    rules: { required: "날짜를 입력해주세요." },
  });

  const selectedLocation = watch("location");

  const { data: detail } = useGetMissionNews({ missionNewsId: missionNews?.id ?? "" });

  useEffect(() => {
    if (missionNews && isEditing && detail) {
      reset({
        title: detail.title,
        userName: detail.userName,
        // 백엔드에서 "yyyy-MM-dd" 형식으로 오므로 yyyy-MM만 추출해서 MonthPicker에 전달
        date: detail.date.slice(0, 7),
        location: detail.location,
      });
      setContent(detail.content);
      setKeepImages(true);
      setNewImages([]);
      setNewPreviews([]);
    }
  }, [missionNews, isEditing, detail]);

  const handleClose = () => {
    setIsEditing(false);
    setKeepImages(true);
    setNewImages([]);
    setNewPreviews([]);
    onClose();
  };

  const handleNewImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    e.target.value = "";
    if (files.length === 0) return;
    const processed = await processImages(files);
    setNewImages((prev) => [...prev, ...processed]);
    setNewPreviews((prev) => [...prev, ...processed.map((f) => URL.createObjectURL(f))]);
    setKeepImages(false);
  };

  const handleRemoveNewImage = (index: number) => {
    setNewImages((prev) => prev.filter((_, i) => i !== index));
    setNewPreviews((prev) => prev.filter((_, i) => i !== index));
    if (newImages.length === 1) setKeepImages(true);
  };

  const onEditSubmit = (fd: EditForm) => {
    if (!missionNews) return;
    if (!keepImages && newImages.length === 0) return toast.error("이미지를 업로드해주세요.");
    if (!content) return toast.error("내용을 입력해주세요.");

    const formData = new FormData();
    formData.append("title", fd.title);
    formData.append("userName", fd.userName);
    formData.append("date", fd.date);
    formData.append("content", content);
    formData.append("location", fd.location);
    // 새 이미지가 있을 때만 전송 (없으면 백엔드에서 기존 이미지 유지)
    if (!keepImages) {
      newImages.forEach((image) => formData.append("images", image));
    }

    putMissionNews(
      { id: missionNews.id, form: formData },
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
    <Dialog open={!!missionNews} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="flex h-[90dvh] max-h-[90dvh] flex-col gap-0 p-0 sm:max-w-lg">
        <DialogHeader className="shrink-0 border-b px-6 py-4">
          {isEditing ? (
            <div className="flex items-center justify-between pr-8">
              <DialogTitle className="text-base">선교지 소식 수정</DialogTitle>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground h-8 px-2"
                onClick={() => setIsEditing(false)}
              >
                <X className="mr-1 size-3.5" />
                취소
              </Button>
            </div>
          ) : (
            <div className="flex items-start justify-between pr-8">
              <div className="min-w-0 flex-1 space-y-1.5">
                <DialogTitle className="truncate text-base">{missionNews?.title}</DialogTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs font-normal">
                    {missionNews?.date && dayjs(missionNews.date).format("YYYY년 M월")}
                  </Badge>
                  {missionNews?.location && (
                    <Badge variant="outline" className="text-xs font-normal">
                      {MISSION_LOCATION_MAP[missionNews.location]}
                    </Badge>
                  )}
                  <span className="text-muted-foreground text-xs">{missionNews?.userName}</span>
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

        {isEditing ? (
          <>
            <ScrollArea className="min-h-0 flex-1">
              <form
                id="mission-news-edit-form"
                onSubmit={handleSubmit(onEditSubmit)}
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
                  <Input {...register("title", { required: "제목을 입력해주세요." })} />
                  {errors.title && (
                    <p className="text-destructive text-xs">{errors.title.message}</p>
                  )}
                </div>

                {/* 작성자 */}
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium">작성자</Label>
                  <Input {...register("userName", { required: "작성자를 입력해주세요." })} />
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

                  {/* 기존 이미지 유지 중 */}
                  {keepImages && missionNews?.imageUrls && missionNews.imageUrls.length > 0 && (
                    <div className="flex items-center justify-between rounded-lg border px-3 py-2">
                      <span className="text-muted-foreground text-sm">
                        기존 이미지 {missionNews.imageUrls.length}장 유지
                      </span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="text-destructive h-7 px-2 text-xs"
                        onClick={() => setKeepImages(false)}
                      >
                        교체
                      </Button>
                    </div>
                  )}

                  {/* 새 이미지 미리보기 */}
                  {!keepImages && newPreviews.length > 0 && (
                    <div className="grid grid-cols-3 gap-2">
                      {newPreviews.map((url, i) => (
                        <div key={url} className="relative aspect-square">
                          <img
                            src={url}
                            alt={`이미지 ${i + 1}`}
                            className="h-full w-full rounded-md border object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveNewImage(i)}
                            className="bg-destructive absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full text-white shadow"
                          >
                            <X className="size-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 이미지 추가 버튼 */}
                  {!keepImages && (
                    <label className="border-muted-foreground/25 hover:border-muted-foreground/50 hover:bg-muted/30 flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed p-4 text-center transition-colors">
                      <ImagePlus className="text-muted-foreground/50 size-5" />
                      <span className="text-muted-foreground text-sm">클릭하여 이미지 추가</span>
                      <span className="text-muted-foreground/70 text-xs">여러 장 선택 가능</span>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={handleNewImageChange}
                      />
                    </label>
                  )}
                </div>

                {/* 내용 */}
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium">내용</Label>
                  <Editor defaultValue={content} setValue={setContent} />
                </div>
              </form>
            </ScrollArea>

            <div className="bg-background shrink-0 border-t px-6 py-4">
              <Button
                form="mission-news-edit-form"
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
            <div className="flex flex-col gap-5 px-6 py-5">
              {missionNews?.imageUrls && missionNews.imageUrls.length > 0 && (
                <div className="flex flex-col gap-2">
                  {missionNews.imageUrls.map((url) => (
                    <img
                      key={url}
                      src={url}
                      alt={missionNews.title}
                      className="w-full rounded-lg border object-contain"
                    />
                  ))}
                </div>
              )}
              <div className="prose prose-sm max-w-none">
                <SafeHTML html={missionNews?.content} />
              </div>
            </div>
          </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MissionNewsDetailDialog;
