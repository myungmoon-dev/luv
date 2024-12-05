import { usePostHomeWorship } from "@/query/homeWorship";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IHomeWorshipForm } from "type";
import { Spinner, cn } from "ui";

const Editor = dynamic(() => import("@/components/common/editor").then((mod) => mod.Editor), {
  ssr: false,
  loading: () => <Spinner />,
});

const HomeWorshipCreate = () => {
  const { push } = useRouter();
  const { register, handleSubmit } = useForm<IHomeWorshipForm>();

  const { mutate, isPending } = usePostHomeWorship();

  const [content, setContent] = useState("");

  const onSubmit: SubmitHandler<IHomeWorshipForm> = async (data) => {
    const formData = new FormData();

    // FIXME: 추후 validate 및 디자인 변경해야 함
    if (!data.date || !data.title || !data.password || !data.userName || !content) {
      return alert("모든 정보를 입력해주세요.");
    }

    if (data.image.length === 0 && data.video.length === 0) {
      return alert("사진 또는 영상은 반드시 업로드해야 합니다.");
    }

    if (data.image.length > 1) {
      return alert("사진은 1장만 가능 합니다.");
    }

    if (data.video.length > 1) {
      return alert("영상은 1개만 가능 합니다.");
    }

    formData.append("title", data.title);
    formData.append("date", data.date);
    formData.append("content", content);
    formData.append("password", data.password);
    formData.append("userName", data.userName);

    const imageFile = data.image || [];
    const videoFile = data.video || [];

    Array.from(imageFile).forEach((image) => {
      formData.append("image-file", image);
    });

    Array.from(videoFile).forEach((video) => {
      formData.append("video-file", video);
    });

    mutate(formData, {
      onSuccess: (res) => {
        alert("추가되었습니다.");
        push("/homeworship");
      },
      onError: (err) => {
        alert("에러가 발생했습니다. 다시 시도해주세요.");
      },
    });
  };

  return (
    <div className="relative flex justify-center">
      <div
        className={cn(
          "flex w-screen flex-col gap-8 rounded-md px-5 py-8 shadow-lg sm:w-auto lg:min-w-[500px]",
          isPending && "opacity-50",
        )}
      >
        <h1 className="font-SCoreDream text-3xl">가정예배 인증하기</h1>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <label className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <p className="text-xl font-bold">예배 날짜</p>
            <input className="border px-2 py-1" type="date" {...register("date")} />
          </label>
          <label className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <p className="text-xl font-bold">제목</p>
            <input className="border px-2 py-1" {...register("title")} />
          </label>
          <label className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <p className="text-xl font-bold">사진 업로드</p>
            <input type="file" accept="image/*" {...register("image")} />
          </label>
          <label className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <p className="text-xl font-bold">영상 업로드</p>
            <input type="file" accept="video/*" {...register("video")} />
          </label>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <p className="text-xl font-bold">글</p>
            <Editor setValue={setContent} />
          </div>
          <label className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <p className="text-xl font-bold">작성자</p>
            <input className="border px-2 py-1" {...register("userName")} />
          </label>
          <label className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <p className="text-xl font-bold">비밀번호</p>
            <input className="border px-2 py-1" type="password" {...register("password")} />
          </label>
          <button disabled={isPending} className="mt-5 rounded-md bg-blue-500 py-2 font-bold text-white">
            인증하기
          </button>
        </form>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Spinner loading={isPending} />
      </div>
    </div>
  );
};

export default HomeWorshipCreate;
