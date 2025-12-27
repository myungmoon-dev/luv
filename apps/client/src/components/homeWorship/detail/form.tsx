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
      { homeWorshipId, content: data.content, userName: data.name, password: data.password },
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-3">
      <textarea
        {...register("content")}
        placeholder="내용을 입력하세요"
        className="min-h-[80px] w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
      />
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2">
          <input
            {...register("name")}
            placeholder="이름"
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none sm:w-auto"
          />
          <input
            {...register("password")}
            type="password"
            placeholder="비밀번호"
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none sm:w-auto"
          />
        </div>
        <button className="rounded-md bg-[#1e3a5f] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2d4a6f]">
          등록
        </button>
      </div>
    </form>
  );
};

export default HomeWorshipDetailComment;
