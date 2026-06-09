import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePostBible } from "@/query/discipleship";
import getYoutubeId from "@/utils/getYoutubeId";
import dynamic from "next/dynamic";
import { Controller, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { IBibleForm } from "type";
import { Spinner } from "@/components/ui/spinner";

const Editor = dynamic(() => import("@/components/common/editor").then((mod) => mod.Editor), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center">
      <Spinner />
    </div>
  ),
});

const BibleCreate = () => {
  const { control, register, handleSubmit, setValue, reset } = useForm<IBibleForm>({
    defaultValues: {
      links: [{ url: "", playlist: false }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "links",
  });

  const { mutate } = usePostBible();

  const onSubmit: SubmitHandler<IBibleForm> = (data) => {
    const youtubeLinks = data.links.map((link) => ({
      url: getYoutubeId({ url: link.url }) || "",
      playlist: link.playlist,
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <label className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
        <p className="text-xl font-bold">날짜</p>
        <Input className="w-[233px]" placeholder="ex) 2021-01-01" {...register("date")} />
      </label>
      <label className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
        <p className="text-xl font-bold">제목</p>
        <Input className="w-[233px]" {...register("title")} placeholder="ex) 2021년 1월 첫째주" />
      </label>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
        <p className="text-xl font-bold">내용</p>
        <Editor setValue={handleChangeContent} />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold">유튜브 링크</p>
        <div className="flex w-full flex-col gap-2">
          {fields.map((field, index) => (
            <div key={field.id} className="flex w-full items-center justify-between gap-5">
              <Controller
                control={control}
                name={`links.${index}.url`}
                render={({ field }) => <Input {...field} />}
              />
              <div className="flex min-w-fit items-center gap-3">
                <label className="flex items-center gap-2">
                  <p className="text-sm">Playlist 여부</p>
                  <Controller
                    control={control}
                    name={`links.${index}.playlist`}
                    render={({ field }) => (
                      <Input
                        type="checkbox"
                        className="h-6 w-6"
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                      />
                    )}
                  />
                </label>
                <div className="h-6 w-[2px] bg-white" />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => append({ url: "", playlist: false })}
                >
                  추가
                </Button>
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => remove(index)}
                >
                  삭제
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <Button className="mt-7">성경통독 추가하기</Button>
      </div>
    </form>
  );
};

export default BibleCreate;
