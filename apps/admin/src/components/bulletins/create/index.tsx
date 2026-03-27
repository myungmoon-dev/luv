import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePostBulletin } from "@/query/bulletin";
import { useForm } from "react-hook-form";
import { IBulletinImageForm } from "type";

interface IBulletinImageListForm extends Omit<IBulletinImageForm, "images"> {
  images: FileList;
}

const BulletinCreate = () => {
  const { register, handleSubmit } = useForm<IBulletinImageListForm>();

  const { mutate, isPending } = usePostBulletin();

  const onSubmit = async (data: IBulletinImageListForm) => {
    const formData = new FormData();

    if (!data.title || !data.date) return alert("모든 정보를 입력해주세요.");
    if (data.images?.length === 0) return alert("주보 이미지를 추가해야합니다.");
    if (data.images?.length > 10) return alert("주보 이미지는 10개 이하로 제출 가능합니다.");

    formData.append("date", data.date);
    formData.append("title", data.title);

    Array.from(data.images).forEach((image) => {
      formData.append("images", image);
    });

    mutate(formData, {
      onSuccess: (res) => console.log(res),
      onError: (err) => console.log(err),
      onSettled: () => alert("완료"),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <label className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
        <p className="text-xl font-bold">날짜</p>
        <Input className="w-[233px]" {...register("date")} placeholder="ex) 2021-01-01" />
      </label>
      <label className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
        <p className="text-xl font-bold">제목</p>
        <Input
          className="w-[233px]"
          {...register("title")}
          placeholder="ex) 2021년 1월 첫째주"
        />
      </label>
      <label className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
        <p className="text-xl font-bold">이미지</p>
        <Input className="w-[233px]" type="file" accept="image/*" multiple={true} {...register("images")} />
      </label>
      <div className="flex justify-end">
        <Button disabled={isPending} isLoading={isPending}>
          주보 추가하기
        </Button>
      </div>
    </form>
  );
};

export default BulletinCreate;
