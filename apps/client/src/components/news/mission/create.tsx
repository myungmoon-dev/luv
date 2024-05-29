import { usePostMission } from "@/query/news";
import useAuthStore from "@/store/auth";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IMissionForm } from "type";
import { Spinner, cn } from "ui";

const Editor = dynamic(() => import("@/components/common/editor").then((mod) => mod.Editor), {
  ssr: false,
  loading: () => <Spinner />,
});

const MissionCreate = () => {
  const { push } = useRouter();
  const { register, handleSubmit } = useForm<IMissionForm>();
  const uid = useAuthStore((state) => state.uid);

  const { mutate, isPending } = usePostMission();

  const [content, setContent] = useState("");

  const onSubmit: SubmitHandler<IMissionForm> = async (data) => {
    const formData = new FormData();

    if (!uid) {
      alert("로그인이 필요합니다.");
      push("/login");
    } else {
      if (data.image.length === 0 || !data.date || !data.title || !content) return alert("모든 정보를 입력해주세요.");
      if (data.image.length !== 1) return alert("사진은 한 장 업로드 가능합니다.");

      formData.append("title", data.title);
      formData.append("date", data.date);
      formData.append("content", content);

      Array.from(data.image).forEach((image) => {
        formData.append(`image-file`, image);
        formData.append(`image-name`, image.name);
      });

      formData.append("userId", uid);

      mutate(formData, {
        onSuccess: (res) => {
          alert("추가되었습니다.");
          push("/news/mission-news");
        },
        onError: (err) => {
          alert("에러가 발생했습니다. 다시 시도해주세요.");
        },
      });
    }
  };

  return (
    <div className="relative flex justify-center">
      <div
        className={cn(
          "flex w-screen flex-col gap-8 rounded-md px-5 py-8 shadow-lg sm:w-auto lg:min-w-[500px]",
          isPending && "opacity-50",
        )}
      >
        <h1 className="font-SCoreDream text-3xl">선교지 소식 작성하기</h1>
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
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <p className="text-xl font-bold">글</p>
            <Editor setValue={setContent} />
          </div>
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

export default MissionCreate;
