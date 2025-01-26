import { usePostYoutubeLink } from "@/query/youtube";
import getYoutubeId from "@/utils/getYoutubeId";
import { useForm } from "react-hook-form";
import { IYoutubeForm, YoutubeType } from "type";
import { Button } from "../ui/button";
import YoutubeInput from "./input";
import YoutubeVideoContainer from "./Video";
import { toast } from "sonner";

interface ILiveFormProps {
  option: YoutubeType;
}

const LiveForm = ({ option }: ILiveFormProps) => {
  const isShowAllFields = option !== "shorts" && option !== "live";
  const isShowMainText = option !== "video";

  const { register, handleSubmit, reset } = useForm<IYoutubeForm>();
  const { mutate, isPending } = usePostYoutubeLink(option);

  const onSubmit = (data: IYoutubeForm) => {
    const { mainText, preacher, title, url, date } = data;
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
        <Button isLoading={isPending} disabled={isPending} className="mt-2">
          등록
        </Button>
      </form>
      <YoutubeVideoContainer option={option} />
    </div>
  );
};

export default LiveForm;
