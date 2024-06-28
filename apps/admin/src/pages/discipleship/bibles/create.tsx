import dynamic from "next/dynamic";
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { IBibleForm } from "type";
import { usePostBible } from "@/query/discipleship";
import getYoutubeId from "@/utils/getYoutubeId";
import { Spinner } from "ui";

const Editor = dynamic(
  () => import("@/components/common/editor").then((mod) => mod.Editor),
  {
    ssr: false,
    loading: () => <Spinner />,
  }
);

const DiscipleshipBibleCreatePage = () => {
  const { control, register, handleSubmit, setValue, reset } =
    useForm<IBibleForm>({
      defaultValues: {
        links: [{ name: "", isPlaylist: false }],
      },
    });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "links",
  });

  const { mutate } = usePostBible();

  const onSubmit: SubmitHandler<IBibleForm> = (data) => {
    const youtubeLinks = data.links.map((link) => ({
      name: getYoutubeId({ url: link.name }) || "",
      isPlaylist: link.isPlaylist,
    }));

    if (youtubeLinks.some((link) => link === null))
      return alert("youtube link를 다시 확인해주세요.");

    mutate(
      {
        content: data.content,
        date: data.date,
        title: data.title,
        links: youtubeLinks,
      },
      {
        onSuccess: () => {
          alert("완료");
          reset();
        },
        onError: () => alert("에러 발생"),
      },
    );
  };

  const handleChangeContent = (value: string) => {
    setValue("content", value);
  };

  return (
    <div className="px-24 py-20">
      <h1 className="mb-5 text-3xl font-bold">성경통독 추가하기</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center gap-3">
        <div className="flex w-full justify-between gap-5">
          <label className="flex w-full flex-col gap-2">
            <p>날짜</p>
            <input className="p-1 text-black" {...register("date")} placeholder="ex) 2021-01-01" />
          </label>
          <label className="flex w-full flex-col gap-2">
            <p>제목</p>
            <input
              className="p-1 text-black"
              {...register("title")}
              placeholder="ex) 2021년 1월 첫째주"
            />
          </label>
        </div>
        <div className="flex w-full flex-col gap-2">
          <p>내용</p>
          <Editor setValue={handleChangeContent} />
        </div>
        <label className="flex flex-col gap-2">
          <p>유튜브 링크</p>
          <div className="flex w-full flex-col gap-2">
            {fields.map((field, index) => (
              <div key={field.id} className="flex w-full items-center justify-between gap-5">
                <Controller
                  control={control}
                  name={`links.${index}.name`}
                  render={({ field }) => (
                    <input className="w-full px-2 py-1 text-black" {...field} />
                  )}
                />
                <div className="flex min-w-fit items-center gap-3">
                  <label className="flex items-center gap-2">
                    <p>Playlist 여부</p>
                    <Controller
                      control={control}
                      name={`links.${index}.isPlaylist`}
                      render={({ field }) => (
                        <input
                          type="checkbox"
                          className="h-6 w-6"
                          checked={field.value}
                          onChange={(e) => field.onChange(e.target.checked)}
                        />
                      )}
                    />
                  </label>
                  <div className="h-6 w-[2px] bg-white" />
                  <button
                    className="rounded-md !bg-green-500 px-3 py-1"
                    type="button"
                    onClick={() => append({ name: "", isPlaylist: false })}
                  >
                    추가
                  </button>
                  <button
                    className="rounded-md !bg-red-500 px-3 py-1"
                    type="button"
                    onClick={() => remove(index)}
                  >
                    삭제
                  </button>
                </div>
              </div>
            ))}
          </div>
        </label>
        <button className="mt-7 rounded bg-blue-500 px-4 py-2 text-white">성경통독 추가하기</button>
      </form>
    </div>
  );
};

export default DiscipleshipBibleCreatePage;
