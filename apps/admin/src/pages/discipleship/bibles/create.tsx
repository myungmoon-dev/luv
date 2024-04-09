import React, { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { IBibleForm } from "type";

import { usePostBible } from "@/query/discipleship";
import getYoutubeId from "@/utils/getYoutubeId";
import { Spinner } from "ui";

const Editor = dynamic(() => import("@/components/common/editor").then((mod) => mod.Editor), {
  ssr: false,
  loading: () => <Spinner />,
});

const DiscipleshipBibleCreatePage = () => {
  const { register, handleSubmit, setValue } = useForm<IBibleForm>();

  const { mutate } = usePostBible();

  const [links, setLinks] = useState<string[]>([""]);

  const onSubmit: SubmitHandler<IBibleForm> = (data) => {
    const youtubeLinks = links.map((link) => getYoutubeId({ url: link }));

    if (youtubeLinks.some((link) => link === null)) return alert("youtube link를 다시 확인해주세요.");

    mutate(
      { ...data, links: youtubeLinks as string[] },
      { onSuccess: () => alert("완료"), onError: () => alert("에러 발생") }
    );
  };

  const handleChangeContent = (value: string) => {
    setValue("content", value);
  };

  const handleChangeLink = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    const newLinks = [...links];
    newLinks[idx] = e.target.value;
    setLinks(newLinks);
  };

  const handleRemoveLink = (idx: number) => {
    if (idx === 0) return alert("하나 이상의 링크가 필요합니다.");
    setLinks((prev) => prev.filter((_, index) => index !== idx));
  };

  return (
    <div className="px-24 py-20">
      <h1 className="text-3xl font-bold mb-5">성경통독 추가하기</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 justify-center">
        <div className="flex justify-between gap-5 w-full">
          <label className="flex flex-col gap-2 w-full">
            <p>날짜</p>
            <input className="text-black p-1" {...register("date")} placeholder="ex) 2021-01-01" />
          </label>
          <label className="flex flex-col gap-2 w-full">
            <p>제목</p>
            <input className="text-black p-1" {...register("title")} placeholder="ex) 2021년 1월 첫째주" />
          </label>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p>내용</p>
          <Editor setValue={handleChangeContent} />
        </div>
        <label className="flex flex-col gap-2">
          <p>유튜브 링크</p>
          <div className="flex flex-col gap-2 w-full">
            {links.map((link, idx) => (
              <div className="flex items-center gap-5 justify-between w-full" key={link}>
                <input
                  placeholder="https://youtube.com/..."
                  className="text-black w-full py-1 px-2"
                  onChange={(e) => handleChangeLink(e, idx)}
                />
                <div className="flex gap-2 min-w-fit">
                  <button
                    className="!bg-green-500 px-3 py-1 rounded-md"
                    type="button"
                    onClick={() => setLinks((prev) => [...prev, ""])}
                  >
                    추가
                  </button>
                  <button
                    className="!bg-red-500 px-3 py-1 rounded-md"
                    type="button"
                    onClick={() => handleRemoveLink(idx)}
                  >
                    삭제
                  </button>
                </div>
              </div>
            ))}
          </div>
        </label>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-7">성경통독 추가하기</button>
      </form>
    </div>
  );
};

export default DiscipleshipBibleCreatePage;
