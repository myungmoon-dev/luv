import { usePostHomeWorship } from "@/query/homeWorship";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IHomeWorshipForm } from "type";

const HomeWorshipCreate = () => {
  const { register, handleSubmit } = useForm<IHomeWorshipForm>();

  const { mutate } = usePostHomeWorship();

  const onSubmit: SubmitHandler<IHomeWorshipForm> = (data) => {
    console.log(data);

    const formData = new FormData();

    if (!data.content || !data.date) return alert("모든 정보를 입력해주세요.");

    formData.append("date", data.date);

    Array.from(data.content).forEach((image) => {
      formData.append(`image-file`, image);
      formData.append(`image-name`, image.name);
    });

    mutate(formData, {
      onSuccess: (res) => console.log(res),
      onError: (err) => console.log(err),
      onSettled: () => alert("완료"),
    });
  };

  return (
    <div className="flex justify-center">
      <div className="flex w-[500px] flex-col gap-5 rounded-md px-5 py-8 shadow-lg">
        <h1 className="text-2xl">가정예배 인증하기</h1>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <label className="flex items-center gap-5">
            <p>예배 날짜</p>
            <input type="date" {...register("date")} />
          </label>
          <label className="flex items-center gap-5">
            <p>사진 업로드</p>
            <input type="file" {...register("content")} />
          </label>
          <button className="rounded-md bg-blue-500 py-2 text-white">제출</button>
        </form>
      </div>
    </div>
  );
};

export default HomeWorshipCreate;
