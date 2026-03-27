import { usePutLive } from "@/query/youtube";
import youtubeKeys from "@/query/youtube/keys";
import getYoutubeId from "@/utils/getYoutubeId";
import { useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import LiveVideo from "./Video";

interface ILiveForm {
  url: string;
}

const LiveForm = () => {
  const { register, handleSubmit, reset } = useForm<ILiveForm>();
  const { mutate } = usePutLive();

  const queryClient = useQueryClient();

  const onSubmit: SubmitHandler<ILiveForm> = (data) => {
    const { url } = data;
    const id = getYoutubeId({ url });

    if (!id) return alert("유튜브 링크를 다시 확인해주세요.");
    mutate(
      {
        liveUrl: url,
      },
      {
        onSuccess: () => {
          reset({
            url: "",
          });
          queryClient.invalidateQueries({ queryKey: youtubeKeys.live() });
          toast("변경되었습니다.");
        },
        onError: (error) => console.log(error),
      },
    );
  };

  const onInValid = () => {
    alert("유튜브 링크는 필수입니다. 입력해주세요.");
  };

  return (
    <div className="flex gap-10">
      <form onSubmit={handleSubmit(onSubmit, onInValid)} className="mt-4 flex flex-col gap-3">
        <label className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
          <p className="text-xl font-bold">유튜브 링크</p>
          <Input
            {...register("url", {
              required: true,
            })}
            className="w-[233px]"
            placeholder="유튜브 링크를 입력해 주세요."
          />
        </label>
        <div className="flex justify-end">
          <Button>등록</Button>
        </div>
      </form>
      <LiveVideo />
    </div>
  );
};

export default LiveForm;
