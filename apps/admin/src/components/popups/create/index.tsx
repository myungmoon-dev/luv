import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { usePostPopup } from "@/query/popup";
import { useRouter } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { IPopupForm } from "type";

interface IPopupCreateForm extends IPopupForm {
  images: FileList;
}

const PopupCreate = () => {
  const { push } = useRouter();
  const { register, handleSubmit, reset, control } = useForm<IPopupCreateForm>();

  const { mutate, isPending } = usePostPopup();

  const onSubmit: SubmitHandler<IPopupCreateForm> = async (data) => {
    const formData = new FormData();

    if (data.images.length === 0 || !data.title) return alert("모든 정보를 입력해주세요.");
    if (data.images.length !== 1) return alert("사진은 한 장 업로드 가능합니다.");

    formData.append("title", data.title);
    formData.append("isShow", String(data.isShow));

    Array.from(data.images).forEach((image) => {
      formData.append("images", image);
    });

    mutate(formData, {
      onSuccess: () => {
        toast("추가되었습니다.");
        reset();
        push("/popups");
      },
      onError: () => {
        alert("에러가 발생했습니다. 다시 시도해주세요.");
      },
    });
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <label className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
        <p className="text-xl font-bold">제목</p>
        <Input className="w-[233px]" {...register("title")} />
      </label>
      <label className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
        <p className="text-xl font-bold">공개 여부</p>
        <Controller
          name="isShow"
          control={control}
          render={({ field }) => (
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          )}
        />
      </label>
      <label className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
        <p className="text-xl font-bold">사진 업로드</p>
        <Input className="w-[233px]" type="file" accept="image/*" {...register("images")} />
      </label>
      <div className="flex justify-end">
        <Button isLoading={isPending} disabled={isPending}>
          팝업 올리기
        </Button>
      </div>
    </form>
  );
};

export default PopupCreate;
