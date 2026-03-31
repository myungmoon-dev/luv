import { usePostYoutubeLink, usePutVideo } from "@/query/youtube";
import getYoutubeId from "@/utils/getYoutubeId";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IYoutube, IYoutubeForm, YoutubeType } from "type";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import youtubeKeys from "@/query/youtube/keys";

interface YoutubeFormDialogProps {
  open: boolean;
  onClose: () => void;
  option: YoutubeType;
  editTarget?: IYoutube | null;
}

interface FormValues {
  url: string;
  title: string;
  date: string;
  mainText: string;
  preacher: string;
}

const YoutubeFormDialog = ({ open, onClose, option, editTarget }: YoutubeFormDialogProps) => {
  const isEdit = !!editTarget;
  const isShowAllFields = option !== "shorts" && option !== "live";
  const isShowMainText = option !== "video";

  const queryClient = useQueryClient();
  const { mutate: postMutate, isPending: isPostPending } = usePostYoutubeLink(option);
  const { mutate: putMutate, isPending: isPutPending } = usePutVideo();
  const isPending = isPostPending || isPutPending;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  useEffect(() => {
    if (open) {
      reset({
        url: editTarget?.url ?? "",
        title: editTarget?.title ?? "",
        date: editTarget?.date ?? "",
        mainText: editTarget?.mainText ?? "",
        preacher: editTarget?.preacher ?? "",
      });
    }
  }, [open, editTarget]);

  const handleClose = () => {
    reset();
    onClose();
  };

  const onSubmit = (data: FormValues) => {
    const { url, title, date, mainText, preacher } = data;

    if (isEdit && editTarget) {
      const id = getYoutubeId({ url });
      if (url !== editTarget.url && !id) {
        return toast.error("유효한 유튜브 링크를 입력해주세요.");
      }
      putMutate(
        {
          videoId: editTarget.id,
          youtubeForm: {
            type: option,
            url: url !== editTarget.url ? id! : url,
            date,
            mainText,
            preacher,
            title,
          } as IYoutubeForm,
        },
        {
          onSuccess: () => {
            toast("수정되었습니다.");
            queryClient.invalidateQueries({ queryKey: youtubeKeys.all });
            handleClose();
          },
          onError: () => toast.error("에러가 발생했습니다."),
        },
      );
    } else {
      const id = getYoutubeId({ url });
      if (!id) {
        return toast.error("유효한 유튜브 링크를 입력해주세요.");
      }
      postMutate(
        { url: id, mainText, title, preacher, type: option, date },
        {
          onSuccess: () => {
            toast("등록되었습니다.");
            handleClose();
          },
          onError: () => toast.error("에러가 발생했습니다."),
        },
      );
    }
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="flex max-h-[90dvh] flex-col overflow-y-auto sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{isEdit ? "영상 수정" : "영상 업로드"}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 pt-2">
          <FormField label="유튜브 링크" required error={errors.url?.message}>
            <Input
              {...register("url", {
                required: "유튜브 링크를 입력해주세요.",
                validate: (v) => {
                  if (isEdit && editTarget && v === editTarget.url) return true;
                  return !!getYoutubeId({ url: v }) || "유효한 유튜브 링크를 입력해주세요.";
                },
              })}
              placeholder="https://www.youtube.com/watch?v=..."
            />
          </FormField>

          {isShowAllFields && (
            <>
              <FormField label="제목" required error={errors.title?.message}>
                <Input
                  {...register("title", { required: "제목을 입력해주세요." })}
                  placeholder="제목을 입력해주세요"
                />
              </FormField>

              <FormField label="날짜" required error={errors.date?.message}>
                <Input
                  {...register("date", {
                    required: "날짜를 입력해주세요.",
                    pattern: {
                      value: /^\d{4}-\d{2}-\d{2}$/,
                      message: "YYYY-MM-DD 형식으로 입력해주세요.",
                    },
                  })}
                  placeholder="ex) 2024-01-01"
                />
              </FormField>

              {isShowMainText && (
                <FormField label="본문말씀" required error={errors.mainText?.message}>
                  <Input
                    {...register("mainText", { required: "본문말씀을 입력해주세요." })}
                    placeholder="ex) 마태복음 1장 1절"
                  />
                </FormField>
              )}

              <FormField
                label={option === "video" ? "이름" : "설교자"}
                required
                error={errors.preacher?.message}
              >
                <Input
                  {...register("preacher", {
                    required: `${option === "video" ? "이름" : "설교자"}을 입력해주세요.`,
                  })}
                  placeholder={
                    option === "video" ? "ex) WITH EL(위드엘 주일찬양팀)" : "ex) 김지혁 담임목사"
                  }
                />
              </FormField>
            </>
          )}

          <div className="flex gap-2 pt-2">
            <Button type="button" variant="outline" className="flex-1" onClick={handleClose}>
              취소
            </Button>
            <Button className="flex-1" disabled={isPending} isLoading={isPending}>
              {isEdit ? "수정 완료" : "등록"}
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
      {required && <span className="ml-0.5 text-destructive">*</span>}
    </Label>
    {children}
    {error && <p className="text-xs text-destructive">{error}</p>}
  </div>
);

export default YoutubeFormDialog;
