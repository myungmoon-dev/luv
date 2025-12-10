import {
  PostCongregationNewsRequest,
  PutCongregationNewsRequest,
} from "@/types/congregationNews/request";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePostCongregationNews, usePutCongregationNews } from "@/query/congregationNews";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { CONGREGATION_NEWS_TYPE_OPTIONS } from "./config";
import { cn } from "@/lib/utils";

interface CongregationNewsFormProps {
  initialData?: {
    _id: string;
    type: PostCongregationNewsRequest["type"];
    description: string;
  };
}

const CongregationNewsForm = ({ initialData }: CongregationNewsFormProps) => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<PostCongregationNewsRequest | PutCongregationNewsRequest>({
    defaultValues: initialData
      ? {
          type: initialData.type,
          description: initialData.description,
        }
      : undefined,
  });

  // Select validation을 위해 register 추가
  register("type", { required: true });

  const selectedType = watch("type");
  const { mutate: postCongregationNews, isPending: isPostPending } = usePostCongregationNews();
  const { mutate: putCongregationNews, isPending: isPutPending } = usePutCongregationNews();

  const isPending = isPostPending || isPutPending;
  const isEditMode = !!initialData;

  const onSubmit: SubmitHandler<PostCongregationNewsRequest | PutCongregationNewsRequest> = (
    data,
  ) => {
    if (!selectedType || !data.description) {
      return alert("모든 정보를 입력해주세요.");
    }

    if (isEditMode && initialData) {
      putCongregationNews(
        { id: initialData._id, request: data as PutCongregationNewsRequest },
        {
          onSuccess: () => {
            push("/congregation-news");
          },
        },
      );
    } else {
      postCongregationNews(data as PostCongregationNewsRequest, {
        onSuccess: () => {
          push("/congregation-news");
        },
      });
    }
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <label className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
        <p className="min-w-[100px] text-xl font-bold">타입</p>
        <Select
          value={selectedType}
          onValueChange={(value) =>
            setValue("type", value as PostCongregationNewsRequest["type"], { shouldValidate: true })
          }
          required
        >
          <SelectTrigger
            className={cn("w-[233px]", !selectedType && errors.type && "border-red-500")}
          >
            <SelectValue placeholder="타입을 선택하세요" />
          </SelectTrigger>
          <SelectContent>
            {CONGREGATION_NEWS_TYPE_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </label>

      <label className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-5">
        <p className="min-w-[100px] pt-2 text-xl font-bold">내용</p>
        <textarea
          {...register("description", { required: true })}
          className={cn(
            "flex min-h-[120px] w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm shadow-sm transition-colors",
            "placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950",
            "disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300",
            errors.description && "border-red-500",
          )}
          placeholder="내용을 입력하세요"
        />
      </label>

      {errors.type && <p className="text-sm text-red-500">타입을 선택해주세요.</p>}
      {errors.description && <p className="text-sm text-red-500">내용을 입력해주세요.</p>}

      <div className="flex justify-end">
        <Button variant="outline" type="submit" isLoading={isPending} disabled={isPending}>
          {isEditMode ? "수정하기" : "추가하기"}
        </Button>
      </div>
    </form>
  );
};

export default CongregationNewsForm;
