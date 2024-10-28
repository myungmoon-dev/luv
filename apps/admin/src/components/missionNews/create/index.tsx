import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePostBook } from "@/query/books";
import { usePostMissionNews } from "@/query/missionNews";
import dynamic from "next/dynamic";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IBookForm } from "type";
import { Spinner } from "ui";

interface IMissionNewsCreateForm extends Omit<IBookForm, "createdAt" | "image"> {
  image: FileList;
  writer: string;
}

const Editor = dynamic(() => import("@/components/common/editor").then((mod) => mod.Editor), {
  ssr: false,
  loading: () => <Spinner />,
});

const MissionNewsCreate = () => {
  const { register, handleSubmit, reset } = useForm<IMissionNewsCreateForm>();

  const { mutate, isPending } = usePostMissionNews();

  const [content, setContent] = useState("");

  const onSubmit: SubmitHandler<IMissionNewsCreateForm> = async (data) => {
    const formData = new FormData();

    if (data.image.length === 0 || !data.date || !data.title || !content)
      return alert("모든 정보를 입력해주세요.");
    if (data.image.length !== 1) return alert("사진은 한 장 업로드 가능합니다.");

    formData.append("title", data.title);
    formData.append("date", data.date);
    formData.append("userName", data.writer);
    formData.append("content", content);

    Array.from(data.image).forEach((image) => {
      formData.append(`image-file`, image);
      formData.append(`image-name`, image.name);
    });

    mutate(formData, {
      onSuccess: () => {
        alert("추가되었습니다.");
        reset();
        setContent("");
      },
      onError: () => {
        alert("에러가 발생했습니다. 다시 시도해주세요.");
      },
    });
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <label className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
        <p className="text-xl font-bold">날짜</p>
        <Input className="w-[233px]" type="month" {...register("date")} />
      </label>
      <label className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
        <p className="text-xl font-bold">제목</p>
        <Input className="w-[233px]" {...register("title")} />
      </label>
      <label className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
        <p className="text-xl font-bold">작성자</p>
        <Input className="w-[233px]" {...register("writer")} />
      </label>
      <label className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
        <p className="text-xl font-bold">사진 업로드</p>
        <Input className="w-[233px]" type="file" accept="image/*" {...register("image")} />
      </label>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
        <p className="text-xl font-bold">글</p>
        <Editor setValue={setContent} />
      </div>
      <div className="flex justify-end">
        <Button disabled={isPending}>선교지 소식 올리기</Button>
      </div>
    </form>
  );
};

export default MissionNewsCreate;
