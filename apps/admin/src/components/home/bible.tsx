import React from "react";
import HomeSection from "./section";
import { SubmitHandler, useForm } from "react-hook-form";
import { IBibleForm } from "type";
import { usePostBible } from "@/query/discipleship";

const BibleSection = () => {
  const { register, handleSubmit } = useForm<IBibleForm>();

  const { mutate } = usePostBible();

  const onSubmit: SubmitHandler<IBibleForm> = (data) => {
    mutate(data, { onSuccess: () => alert("완료"), onError: () => alert("에러 발생") });
  };

  return (
    <HomeSection title="성경통독">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 justify-center items-center">
        <label className="flex items-center gap-2">
          <p>날짜</p>
          <input className="text-black p-1" {...register("date")} placeholder="ex) 2021-01-01" />
        </label>
        <label className="flex items-center gap-2">
          <p>제목</p>
          <input className="text-black p-1" {...register("title")} placeholder="ex) 2021년 1월 첫째주" />
        </label>
        <label className="flex items-center gap-2">
          <p>내용</p>
          <textarea className="text-black" {...register("content")} placeholder="ex) 내용" />
        </label>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">성경통독 추가하기</button>
      </form>
    </HomeSection>
  );
};

export default BibleSection;
