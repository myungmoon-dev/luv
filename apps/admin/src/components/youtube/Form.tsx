import { usePostYoutubeLink, usePutVideo } from "@/query/youtube";
import getYoutubeId from "@/utils/getYoutubeId";
import { useForm } from "react-hook-form";
import { IYoutubeForm, YoutubeType } from "type";
import { Button } from "../ui/button";
import YoutubeInput from "./input";
import YoutubeVideoContainer from "./Video";
import { toast } from "sonner";
import useVideoStore from "@/store/Video";
import { useEffect } from "react";

interface ILiveFormProps {
  option: YoutubeType;
}

const LiveForm = ({ option }: ILiveFormProps) => {
  const isShowAllFields = option !== "shorts" && option !== "live";
  const isShowMainText = option !== "video";

  const [isEdit, edittingVideo, setEdit, setEdittingVideo] = useVideoStore((state) => [
    state.isEdit,
    state.edittingVideo,
    state.setEdit,
    state.setEdittingVideo,
  ]);

  const { register, handleSubmit, reset } = useForm<IYoutubeForm>();
  const { mutate, isPending } = usePostYoutubeLink(option);
  const { mutate: putVideoMutate } = usePutVideo();

  const onSubmit = (data: IYoutubeForm) => {
    const { mainText, preacher, title, url, date } = data;

    if (isEdit && edittingVideo) {
      const id = getYoutubeId({ url });

      if (url !== edittingVideo.url && !id) return alert("유튜브 링크를 다시 확인해주세요.");

      putVideoMutate(
        {
          videoId: edittingVideo._id,
          youtubeForm: {
            type: option,
            url: url !== edittingVideo.url ? id! : url,
            date,
            mainText,
            preacher,
            title,
          },
        },
        {
          onSuccess: () => {
            reset({
              url: "",
              title: "",
              preacher: "",
              mainText: "",
              date: "",
            });
            toast("수정되었습니다.");
            setEdittingVideo(null);
            setEdit(false);
            reset({ date: "", mainText: "", preacher: "", title: "", url: "", type: option });
          },
          onError: () => {
            toast("에러가 발생했습니다.");
          },
        },
      );
    } else {
      const id = getYoutubeId({ url });

      if (!id) return alert("유튜브 링크를 다시 확인해주세요.");

      mutate(
        {
          url: id,
          mainText,
          title,
          preacher,
          type: option,
          date,
        },
        {
          onSuccess: ({ result }) => {
            reset({
              url: "",
              title: "",
              preacher: "",
              mainText: "",
              date: "",
            });
            toast("변경되었습니다.");
          },
          onError: () => {
            toast("에러가 발생했습니다.");
          },
        },
      );
    }
  };

  const onInValid = () => {
    alert("유튜브 링크는 필수입니다. 입력해주세요.");
  };

  const handleCancelEdit = () => {
    setEdit(false);
    setEdittingVideo(null);
    reset({ date: "", mainText: "", preacher: "", title: "", url: "", type: option });
  };

  useEffect(() => {
    if (!isEdit) return;
    reset({
      date: edittingVideo?.date,
      mainText: edittingVideo?.mainText,
      preacher: edittingVideo?.preacher,
      title: edittingVideo?.title,
      type: edittingVideo?.type,
      url: edittingVideo?.url,
    });
  }, [isEdit, edittingVideo]);

  return (
    <div className="flex gap-10">
      <form onSubmit={handleSubmit(onSubmit, onInValid)} className="mt-4 flex flex-col gap-3">
        <YoutubeInput
          label="유튜브 링크"
          name="url"
          placeholder="유튜브 링크를 입력해주세요."
          register={register}
          required
        />
        {isShowAllFields && (
          <>
            <YoutubeInput
              label="제목"
              name="title"
              placeholder="제목을 입력해주세요."
              register={register}
              required
            />
            <YoutubeInput
              label="날짜"
              name="date"
              placeholder="ex) 2024-01-01"
              register={register}
              required
            />
            {isShowMainText && (
              <YoutubeInput
                label="본문말씀"
                name="mainText"
                placeholder="ex) 마태복음 1장 1절"
                register={register}
                required
              />
            )}
            <YoutubeInput
              label={option === "video" ? "이름" : "설교자"}
              name="preacher"
              placeholder={
                option === "video" ? "ex) WITH EL(위드엘 주일찬양팀)" : "ex) 김지혁 담임목사"
              }
              register={register}
              required
            />
          </>
        )}
        <div className="mt-2 flex items-center gap-2">
          <Button isLoading={isPending} disabled={isPending}>
            {isEdit ? "수정" : "등록"}
          </Button>
          {isEdit && (
            <Button variant="destructive" type="button" onClick={handleCancelEdit}>
              취소
            </Button>
          )}
        </div>
      </form>
      <YoutubeVideoContainer option={option} />
    </div>
  );
};

export default LiveForm;
