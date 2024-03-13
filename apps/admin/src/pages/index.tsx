import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { useGetYoutubeLink, usePostYoutubeLink } from "../query/youtube/index";

interface IUrlForm {
  youtubeLink: string;
  liveLink: string;
  shortsLink: string;
}

export default function Home() {
  const { handleSubmit, register, setValue } = useForm<IUrlForm>();

  const { data: youtubeLink } = useGetYoutubeLink("youtube");
  const { data: shortsLink } = useGetYoutubeLink("shorts");
  const { data: liveLink } = useGetYoutubeLink("live");

  const { mutateAsync: mutateYoutube } = usePostYoutubeLink("youtube");
  const { mutateAsync: mutateShorts } = usePostYoutubeLink("shorts");
  const { mutateAsync: mutateLive } = usePostYoutubeLink("live");

  const onSubmit = async ({ shortsLink, youtubeLink }: IUrlForm) => {
    try {
      // API로 데이터 전송
      const resYoutube = await mutateYoutube({
        vid: youtubeLink,
      });
      const resShorts = await mutateShorts({
        vid: shortsLink,
      });

      // 응답 처리
      if (resYoutube && resShorts) {
        alert("변경 되었습니다.");
      } else {
        alert("수정하지 못하였습니다.");
      }
    } catch (error) {
      console.error("API 요청 중 오류가 발생했습니다:", error);
    }
  };

  useEffect(() => {
    if (youtubeLink && shortsLink) {
      setValue("youtubeLink", youtubeLink);
      setValue("shortsLink", shortsLink);
    }
  }, [youtubeLink, shortsLink]);

  return (
    <main className="flex flex-col gap-20 justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold text-xl">유튜브 라이브 생방송 링크</p>
        <div className="flex justify-center items-center">
          <p>현재 주소:&nbsp;</p>
          <a
            href={`https://www.youtube.com/embed/${youtubeLink}`}
            className="text-blue-500"
          >
            {youtubeLink}
          </a>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 ">
          <input
            {...register("youtubeLink")}
            className="border rounded px-4 py-2 text-black"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
            수정하기
          </button>
        </form>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold text-xl">유튜브 쇼츠 링크</p>
        <div className="flex justify-center items-center">
          <p>현재 주소:&nbsp;</p>
          <a
            href={`https://www.youtube.com/embed/${shortsLink}`}
            className="text-blue-500"
          >
            {shortsLink}
          </a>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <input
            {...register("shortsLink")}
            className="border rounded px-4 py-2 text-black"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
            수정하기
          </button>
        </form>
      </div>
    </main>
  );
}
