import React from "react";
import { useForm } from "react-hook-form";
import { IBulletinImageForm } from "type";
import HomeSection from "./section";
import { usePostBulletin } from "@/query/bulletin";
import { useRouter } from "next/navigation";

interface IBulletinImageListForm extends Omit<IBulletinImageForm, "images"> {
  images: FileList;
}

const BulletinSection = () => {
  const { push } = useRouter();
  const { register, handleSubmit } = useForm<IBulletinImageListForm>();

  const { mutate } = usePostBulletin();

  const onSubmit = async (data: IBulletinImageListForm) => {
    const formData = new FormData();

    if (!data.title || !data.date) return alert("모든 정보를 입력해주세요.");
    if (data.images?.length !== 2) return alert("주보 이미지는 2개만 제출 가능합니다.");

    formData.append("date", data.date);
    formData.append("title", data.title);
    Array.from(data.images).forEach((image, index) => {
      formData.append(`image-${index}-file`, image);
      formData.append(`image-${index}-name`, image.name);
    });

    mutate(formData, {
      onSuccess: (res) => console.log(res),
      onError: (err) => console.log(err),
      onSettled: () => alert("완료"),
    });
  };

  return (
    <HomeSection title="주보">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-3"
      >
        <label className="flex items-center gap-2">
          <p className="text-white">날짜</p>
          <input className="p-1 text-black" {...register("date")} placeholder="ex) 2021-01-01" />
        </label>
        <label className="flex items-center gap-2">
          <p className="text-white">제목</p>
          <input
            className="p-1 text-black"
            {...register("title")}
            placeholder="ex) 2021년 1월 첫째주"
          />
        </label>
        <label className="">
          <p>이미지</p>
          <input type="file" accept="image/*" multiple={true} {...register("images")} />
        </label>
        <div className="mt-2">
          <button className="rounded bg-blue-500 px-4 py-2 text-white">주보 추가하기</button>
        </div>
      </form>
    </HomeSection>
  );
};

export default BulletinSection;
