import { usePostHomeWorship } from "@/query/homeWorship";
import useAuthStore from "@/store/auth";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IHomeWorshipForm } from "type";
import { Spinner, cn } from "ui";

const HomeWorshipCreate = () => {
  const { push } = useRouter();
  const { register, handleSubmit } = useForm<IHomeWorshipForm>();
  const uid = useAuthStore((state) => state.uid);

  const { mutate, isPending } = usePostHomeWorship();

  const onSubmit: SubmitHandler<IHomeWorshipForm> = async (data) => {
    const formData = new FormData();

    if (!uid) {
      alert("로그인이 필요합니다.");
      push("/login");
    } else {
      if (data.content.length === 0 || !data.date) return alert("모든 정보를 입력해주세요.");
      if (data.content.length !== 1) return alert("사진은 한 장 업로드 가능합니다.");

      formData.append("title", data.title);
      formData.append("date", data.date);

      Array.from(data.content).forEach((image) => {
        formData.append(`image-file`, image);
        formData.append(`image-name`, image.name);
      });

      formData.append("userId", uid);

      mutate(formData, {
        onSuccess: (res) => {
          alert("추가되었습니다.");
          push("/education/home-worship");
        },
        onError: (err) => {
          alert("에러가 발생했습니다. 다시 시도해주세요.");
        },
      });
    }
  };

  return (
    <div className="relative flex justify-center">
      <div className={cn("flex w-[500px] flex-col gap-8 rounded-md px-5 py-8 shadow-lg", isPending && "opacity-50")}>
        <h1 className="text-3xl">가정예배 인증하기</h1>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <label className="flex items-center gap-5">
            <p className="text-xl">예배 날짜</p>
            <input type="date" {...register("date")} />
          </label>
          <label className="flex items-center gap-5">
            <p className="text-xl">제목</p>
            <input className="border px-2 py-1" {...register("title")} />
          </label>
          <label className="flex items-center gap-5">
            <p className="text-xl">사진 업로드</p>
            <input type="file" accept="image/*" {...register("content")} />
          </label>
          <button disabled={isPending} className="mt-5 rounded-md bg-blue-500 py-2 text-white">
            제출
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
