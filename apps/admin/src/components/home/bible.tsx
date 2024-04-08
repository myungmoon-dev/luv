import React, { ChangeEvent, useState } from "react";
import HomeSection from "./section";
import { SubmitHandler, useForm } from "react-hook-form";
import { IBibleForm } from "type";
import { usePostBible } from "@/query/discipleship";
import getYoutubeId from "@/utils/getYoutubeId";

const BibleSection = () => {
  const { register, handleSubmit } = useForm<IBibleForm>();

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
        <label className="flex items-center gap-2">
          <p>Youtube Link</p>
          <div className="flex flex-col gap-2">
            {links.map((link, idx) => (
              <div className="flex items-center gap-2" key={link}>
                <input className="text-black" onChange={(e) => handleChangeLink(e, idx)} />
                <button type="button" onClick={() => setLinks((prev) => [...prev, ""])}>
                  추가
                </button>
                <button type="button" onClick={() => handleRemoveLink(idx)}>
                  삭제
                </button>
              </div>
            ))}
          </div>
        </label>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">성경통독 추가하기</button>
      </form>
    </HomeSection>
  );
};

export default BibleSection;
