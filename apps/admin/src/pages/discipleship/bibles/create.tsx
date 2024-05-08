import dynamic from "next/dynamic";
import { Controller, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { IBibleForm } from "type";

import { usePostBible } from "@/query/discipleship";
import getYoutubeId from "@/utils/getYoutubeId";
import { Spinner } from "ui";

const Editor = dynamic(() => import("@/components/common/editor").then((mod) => mod.Editor), {
  ssr: false,
  loading: () => <Spinner />,
});

type InnerBibleFormType = Omit<IBibleForm, "links"> & { links: { name: string }[] };

const DiscipleshipBibleCreatePage = () => {
  const { control, register, handleSubmit, setValue } = useForm<InnerBibleFormType>({
    defaultValues: {
      links: [{ name: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "links",
  });

  const { mutate } = usePostBible();

  const onSubmit: SubmitHandler<InnerBibleFormType> = (data) => {
    const youtubeLinks = data.links.map((link) => getYoutubeId({ url: link.name }));

    if (youtubeLinks.some((link) => link === null)) return alert("youtube link를 다시 확인해주세요.");

    mutate(
      { ...data, links: youtubeLinks as string[] },
      { onSuccess: () => alert("완료"), onError: () => alert("에러 발생") }
    );
  };

  const handleChangeContent = (value: string) => {
    setValue("content", value);
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
            {fields.map((field, index) => (
              <div key={field.id} className="flex items-center gap-5 justify-between w-full">
                <Controller
                  control={control}
                  name={`links.${index}.name`}
                  render={({ field }) => <input className="text-black w-full py-1 px-2" {...field} />}
                />
                <div className="flex gap-2 min-w-fit">
                  <button
                    className="!bg-green-500 px-3 py-1 rounded-md"
                    type="button"
                    onClick={() => append({ name: "" })}
                  >
                    추가
                  </button>
                  <button className="!bg-red-500 px-3 py-1 rounded-md" type="button" onClick={() => remove(index)}>
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
