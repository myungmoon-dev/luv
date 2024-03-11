import {
  useGetLivelink,
  useGetShorts,
  usePostLivelink,
  usePostShorts,
} from "@/query/youtube";
import { useEffect } from "react";

import { useForm } from "react-hook-form";

interface IUrlForm {
  livelink: string;
  shorts: string;
}

export default function Home() {
  const { handleSubmit, register, setValue } = useForm<IUrlForm>();
  const { data: livelink } = useGetLivelink({
    apiUrl: "api/youtube",
  });
  const { data: shorts } = useGetShorts({
    apiUrl: "api/shorts",
  });
  const { mutateAsync: mutateLivelink } = usePostLivelink({
    apiUrl: "api/youtube",
  });
  const { mutateAsync: mutateShorts } = usePostShorts({
    apiUrl: "api/shorts",
  });

  const onSubmit = async ({ livelink, shorts }: IUrlForm) => {
    try {
      // API로 데이터 전송
      await mutateLivelink({
        data: livelink,
      });
      await mutateShorts({
        data: shorts,
      });
      // 응답 처리
      alert("변경 되었습니다.");
    } catch (error) {
      console.error("API 요청 중 오류가 발생했습니다:", error);
    }
  };

  useEffect(() => {
    if (livelink && shorts) {
      setValue("livelink", livelink);
      setValue("shorts", shorts);
    }
  }, [livelink, shorts]);

  return (
    <main className="flex flex-col gap-20 justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold text-xl">유튜브 라이브 생방송 링크</p>
        <div className="flex justify-center items-center">
          <p>현재 주소:&nbsp;</p>
          <a
            href={`https://www.youtube.com/embed/${livelink}`}
            className="text-blue-500"
          >
            {livelink}
          </a>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 ">
          <input
            {...register("livelink")}
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
            href={`https://www.youtube.com/embed/${shorts}`}
            className="text-blue-500"
          >
            {shorts}
          </a>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <input
            {...register("shorts")}
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
