import { usePostHomeWorshipComment } from "@/query/homeWorship";
import homeWorshipKeys from "@/query/homeWorship/keys";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IComment } from "type";

const HomeWorshipDetailComment = () => {
  const params = useParams();
  const homeWorshipId = params?.id as string;
  const queryClient = useQueryClient();

  const { register, handleSubmit, reset } = useForm<IComment>();

  const { mutate } = usePostHomeWorshipComment();

  const onSubmit: SubmitHandler<IComment> = (data) => {
    if (!data.content || !data.name || !data.password) return alert("모든 정보를 입력해 주세요.");
    mutate(
      { homeWorshipId, content: data.content, name: data.name, password: data.password },
      {
        onSuccess: () => {
          alert("추가되었습니다.");
          reset();
          queryClient.invalidateQueries({ queryKey: homeWorshipKeys.detail(homeWorshipId) });
        },
        onError: () => {
          alert("에러가 발생했습니다. 다시 시도해주세요.");
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2">
            <p className="text-sm md:text-base">이름</p>
            <input
              {...register("name")}
              className="focus:ring-main-color max-w-20 rounded-md border border-gray-600 px-2 py-1 transition duration-300 focus:outline-none focus:ring-2 focus:ring-inset md:max-w-40"
            />
          </label>
          <div className="h-[24px] w-[1px] bg-gray-300" />
          <label className="flex items-center gap-2">
            <p className="text-sm md:text-base">비밀번호</p>
            <input
              {...register("password")}
              type="password"
              className="focus:ring-main-color max-w-24 rounded-md border border-gray-600 px-2 py-1 transition duration-300 focus:outline-none focus:ring-2 focus:ring-inset md:max-w-40"
            />
          </label>
        </div>
        <button className="rounded-md bg-blue-500 px-2 py-1 text-sm text-white md:text-base">등록</button>
      </div>
      <textarea
        {...register("content")}
        placeholder="내용을 입력하세요."
        className="min-h-[100px] w-full rounded-md border border-gray-600 px-2 py-1 transition duration-300 focus:outline-none focus:ring-2 focus:ring-inset"
      />
    </form>
  );
};

export default HomeWorshipDetailComment;
