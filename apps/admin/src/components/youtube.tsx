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

  const onSubmit = (data: IYoutubeForm) => {
    const { youtube, shorts, live } = data;
    const id = youtube || shorts || live;

    mutate(
      {
        id,
      },
      {
        onSuccess: ({ result }) =>
          result === "success"
            ? alert("변경되었습니다.")
            : alert("API 요청 중 오류가 발생하였습니다."),
        onError: (error) => console.log(error),
      }
    );
  };

  useEffect(() => {
    if (youtubeLink) {
      setValue(type, youtubeLink);
    }
  }, [youtubeLink]);

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
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <input
          {...register(type)}
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
