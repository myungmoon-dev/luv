import { api } from "@/api";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  title: string;
  files: File[];
}
const Test = () => {
  const { handleSubmit, register, watch } = useForm<IForm>();

  const onSubmit = async ({ files, title }: IForm) => {
    try {
      const file = files[0];

      const form = new FormData();
      form.append("img", file);
      form.append("title", JSON.stringify(title));
      console.log(form.get("img"));

      await api.post("/api/test", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error("API 요청 중 오류가 발생했습니다:", error);
    }
  };

  useEffect(() => {
    const subscirbe = watch((data, { name }) => console.log(data, name));
    //모든 input 데이터를 담은 객체 data, change 이벤트가 발생하고 있는 input의 name을 인자로 받는 콜백함수
    return () => subscirbe.unsubscribe();
  }, [watch]);

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 ">
        <input
          {...register("title")}
          className="border rounded px-4 py-2 text-black"
        />
        <input
          type="file"
          id="file"
          accept="image/*"
          {...register("files")}
          className="border rounded px-4 py-2 text-black"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
          수정하기
        </button>{" "}
      </form>
    </div>
  );
};

export default Test;
