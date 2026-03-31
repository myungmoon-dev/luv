import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { usePostHomeWorship } from "@/query/homeWorship";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IHomeWorshipForm } from "type";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Label } from "../../ui/label";
import { Switch } from "../../ui/switch";

const Editor = dynamic(() => import("@/components/common/editor").then((mod) => mod.Editor), {
  ssr: false,
  loading: () => <Spinner />,
});

const HomeworshipCreate = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IHomeWorshipForm>();

  const { mutate, isPending } = usePostHomeWorship();
  const [content, setContent] = useState("");
  const [isPinned, setIsPinned] = useState(false);
  const [contentError, setContentError] = useState("");

  const onSubmit = (data: IHomeWorshipForm) => {
    if (!content) {
      setContentError("글 내용을 입력해주세요.");
      return;
    }
    setContentError("");

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("date", data.date);
    formData.append("content", content);
    formData.append("password", data.password);
    formData.append("userName", data.userName);
    formData.append("isPinned", String(isPinned));

    Array.from(data.image).forEach((image) => {
      formData.append("images", image);
    });

    mutate(formData, {
      onSuccess: () => {
        toast("추가되었습니다.");
        reset();
        push("/homeworship");
      },
      onError: () => toast.error("에러가 발생했습니다. 다시 시도해주세요."),
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">가정예배 공지 등록</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <FormField label="예배 날짜" required error={errors.date?.message}>
            <Input
              type="date"
              {...register("date", { required: "날짜를 입력해주세요." })}
            />
          </FormField>

          <FormField label="제목" required error={errors.title?.message}>
            <Input
              {...register("title", { required: "제목을 입력해주세요." })}
              placeholder="제목을 입력해주세요"
            />
          </FormField>

          <FormField label="사진" required error={errors.image?.message}>
            <Input
              type="file"
              accept="image/*"
              {...register("image", {
                required: "사진을 업로드해주세요.",
                validate: (files) => files?.length === 1 || "사진은 한 장만 업로드 가능합니다.",
              })}
            />
          </FormField>

          <FormField label="글" required error={contentError}>
            <Editor setValue={(v) => { setContent(v); if (v) setContentError(""); }} />
          </FormField>

          <FormField label="작성자" required error={errors.userName?.message}>
            <Input
              {...register("userName", { required: "작성자를 입력해주세요." })}
              placeholder="작성자 이름"
            />
          </FormField>

          <FormField label="비밀번호" required error={errors.password?.message}>
            <Input
              type="password"
              {...register("password", { required: "비밀번호를 입력해주세요." })}
              placeholder="비밀번호"
            />
          </FormField>

          <div className="flex items-center justify-between rounded-lg border p-3">
            <div>
              <p className="text-sm font-medium">공지로 등록</p>
              <p className="text-muted-foreground text-xs">목록 상단에 고정됩니다</p>
            </div>
            <Switch checked={isPinned} onCheckedChange={setIsPinned} />
          </div>

          <div className="flex gap-2 pt-2">
            <Button type="button" variant="outline" className="flex-1" onClick={() => push("/homeworship")}>
              취소
            </Button>
            <Button className="flex-1" disabled={isPending} isLoading={isPending}>
              공지 올리기
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

interface FormFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

const FormField = ({ label, required, error, children }: FormFieldProps) => (
  <div className="flex flex-col gap-1.5">
    <Label className="text-sm font-medium">
      {label}
      {required && <span className="ml-0.5 text-destructive">*</span>}
    </Label>
    {children}
    {error && <p className="text-xs text-destructive">{error}</p>}
  </div>
);

export default HomeworshipCreate;
