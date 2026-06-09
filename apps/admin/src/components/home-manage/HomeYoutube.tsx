import { useGetHomeYoutube, usePatchHomeYoutube } from "@/query/home";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useEffect } from "react";
import getYoutubeId from "@/utils/getYoutubeId";

interface YoutubeForm {
  youtubeUrl: string;
}

const HomeYoutube = () => {
  const { data } = useGetHomeYoutube();
  const { mutate: putYoutube, isPending } = usePatchHomeYoutube();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<YoutubeForm>();

  useEffect(() => {
    if (data?.youtubeUrl) reset({ youtubeUrl: data.youtubeUrl });
  }, [data, reset]);

  const watchedUrl = watch("youtubeUrl");
  const previewId = watchedUrl ? getYoutubeId({ url: watchedUrl }) : null;

  const onSubmit = ({ youtubeUrl }: YoutubeForm) => {
    const id = getYoutubeId({ url: youtubeUrl });
    if (!id) return toast.error("유튜브 링크를 다시 확인해주세요.");
    putYoutube(
      { youtubeUrl },
      {
        onSuccess: () => toast.success("변경되었습니다."),
        onError: () => toast.error("에러가 발생했습니다."),
      },
    );
  };

  return (
    <Card>
      <CardHeader className="pb-3 pt-4">
        <CardTitle className="text-base">메인 영상 링크</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Input
              placeholder="https://youtu.be/..."
              {...register("youtubeUrl", { required: "유튜브 링크를 입력해주세요." })}
            />
            {errors.youtubeUrl && (
              <p className="text-destructive text-xs">{errors.youtubeUrl.message}</p>
            )}
          </div>

          {previewId ? (
            <div className="overflow-hidden rounded-lg border">
              <p className="bg-muted text-muted-foreground border-b px-3 py-1.5 text-xs">
                미리보기
              </p>
              <div className="relative aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${previewId}`}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ) : (
            watchedUrl && (
              <p className="text-muted-foreground text-xs">
                유효한 유튜브 링크를 입력하면 미리보기가 표시됩니다.
              </p>
            )
          )}

          <Button
            className="w-full sm:w-auto sm:self-end"
            disabled={isPending}
            isLoading={isPending}
          >
            저장
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default HomeYoutube;
