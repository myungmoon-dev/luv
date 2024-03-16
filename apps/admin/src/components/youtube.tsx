import { YoutubeType } from "@/api/youtube";
import { useGetYoutubeLink, usePostYoutubeLink } from "@/query/youtube";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface IYoutubeForm {
  youtube: string;
  shorts: string;
  live: string;
}
interface IYoutubeSectionProps {
  title: string;
  type: YoutubeType;
}
const YoutubeSection = ({ title, type }: IYoutubeSectionProps) => {
  const { data: youtubeLink } = useGetYoutubeLink(type);
  const { register, handleSubmit, setValue } = useForm<IYoutubeForm>();
  const { mutate } = usePostYoutubeLink(type);

  const extractVideoId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|shorts\/|live\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  };

  const onSubmit = (data: IYoutubeForm) => {
    const { youtube, shorts, live } = data;
    const url = youtube || shorts || live;
    const id = extractVideoId(url);

    id
      ? mutate(
          {
            id,
          },
          {
            onSuccess: ({ result }) => {
              setValue(type, "");
              return result === "success"
                ? alert("변경되었습니다.")
                : alert("API 요청 중 오류가 발생하였습니다.");
            },
            onError: (error) => console.log(error),
          }
        )
      : alert("유튜브 링크를 다시 확인해주세요.");
  };

  const onInValid = () => {
    alert("유튜브 링크는 필수입니다. 입력해주세요.");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold text-xl">{title}</p>
      <div className="flex justify-center items-center">
        <p>현재 주소:&nbsp;</p>
        <a
          href={`https://www.youtube.com/embed/${youtubeLink}`}
          className="text-blue-500"
        >
          {youtubeLink}
        </a>
      </div>
      <div>
        <iframe
          className="h-full w-full rounded-lg"
          src={`https://www.youtube.com/embed/${youtubeLink}`}
          allowFullScreen
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit, onInValid)} className="mt-4">
        <input
          {...register(type, {
            required: true,
          })}
          className="border rounded px-4 py-2 text-black"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
          수정하기
        </button>
      </form>
    </div>
  );
};

export default YoutubeSection;
