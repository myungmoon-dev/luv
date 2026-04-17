import { usePutLive } from "@/query/youtube";
import youtubeKeys from "@/query/youtube/keys";
import getYoutubeId from "@/utils/getYoutubeId";
import { useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import LiveVideo from "./Video";

interface ILiveForm {
  url: string;
}

const LiveForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILiveForm>();
  const { mutate, isPending } = usePutLive();
  const queryClient = useQueryClient();

  const onSubmit: SubmitHandler<ILiveForm> = (data) => {
    const { url } = data;
    const id = getYoutubeId({ url });

    if (!id) return toast.error("유튜브 링크를 다시 확인해주세요.");
    mutate(
      { liveUrl: url },
      {
        onSuccess: () => {
          reset({ url: "" });
          queryClient.invalidateQueries({ queryKey: youtubeKeys.live() });
          toast.success("변경되었습니다.");
        },
        onError: () => toast.error("에러가 발생했습니다."),
      },
    );
  };

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <Card className="w-full max-w-2xl">
        <CardHeader className="pb-3 pt-4">
          <CardTitle className="text-base">라이브 URL 변경</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 sm:flex-row sm:items-end"
          >
            <div className="flex flex-1 flex-col gap-1.5">
              <Label className="text-sm font-medium">유튜브 링크</Label>
              <Input
                {...register("url", { required: "유튜브 링크를 입력해주세요." })}
                placeholder="유튜브 링크를 입력해 주세요."
              />
              {errors.url && <p className="text-destructive text-xs">{errors.url.message}</p>}
            </div>
            <Button disabled={isPending} isLoading={isPending} className="shrink-0">
              등록
            </Button>
          </form>
        </CardContent>
      </Card>

      <LiveVideo/>
    </div>
  );
};

export default LiveForm;
