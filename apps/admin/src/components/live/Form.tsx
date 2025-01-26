import { usePutLive } from "@/query/youtube";
import youtubeKeys from "@/query/youtube/keys";
import getYoutubeId from "@/utils/getYoutubeId";
import { useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../ui/button";
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
        <label className="grid grid-flow-col place-items-center gap-3">
          <p className="w-20">유튜브 링크</p>
          <input
            {...register("url", {
              required: true,
            })}
            placeholder="유튜브 링크를 입력해 주세요."
            className="rounded border px-4 py-2 text-black"
          />
        </label>
        <Button className="mt-2">등록</Button>
      </form>
      <LiveVideo />
    </div>
  );
};

export default LiveForm;
