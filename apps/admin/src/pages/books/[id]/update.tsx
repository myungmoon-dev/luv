import { useGetBook, usePutBook } from "@/query/books";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IBookForm } from "type";
import { Spinner } from "ui";

interface IBookCreateForm extends Omit<IBookForm, "createdAt" | "image"> {
  image: FileList;
  writer: string;
}

const Editor = dynamic(() => import("@/components/common/editor").then((mod) => mod.Editor), {
  ssr: false,
  loading: () => <Spinner />,
});

const BookCreatePage = () => {
  const params = useParams();
  const { push } = useRouter();
  const bookId = params?.id as string;

  const { data } = useGetBook({ bookId });

  const { register, handleSubmit, reset } = useForm<IBookCreateForm>();

  const { mutate, isPending } = usePutBook();

  const [content, setContent] = useState("");
  const [isNewImage, setNewImage] = useState(false);

  const onSubmit: SubmitHandler<IBookCreateForm> = async (data) => {
    const formData = new FormData();

    if ((isNewImage && data.image?.length === 0) || !data.date || !data.title || !content)
      return alert("모든 정보를 입력해주세요.");
    if (isNewImage && data.image?.length !== 1) return alert("사진은 한 장 업로드 가능합니다.");

    formData.append("title", data.title);
    formData.append("date", data.date);
    formData.append("writer", data.writer);
    formData.append("content", content);

    if (isNewImage) {
      Array.from(data.image).forEach((image) => {
        formData.append(`image-file`, image);
        formData.append(`image-name`, image.name);
      });
    }

    mutate(
      { form: formData, id: bookId },
      {
        onSuccess: () => {
          alert("수정되었습니다.");
          push(`/books/${bookId}`);
        },
        onError: () => {
          alert("에러가 발생했습니다. 다시 시도해주세요.");
        },
      },
    );
  };

  useEffect(() => {
    if (!data) return;
    reset({
      content: data.content,
      date: data.date,
      title: data.title,
      writer: data.writer,
    });
    setContent(data.content);
  }, [data, reset]);

  return (
    <div className="flex flex-col gap-10 p-20">
      <h1 className="text-center text-3xl font-bold">추천도서 작성</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <label className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
          <p className="text-xl font-bold">추천 날짜</p>
          <input className="border px-2 py-1 text-black" type="date" {...register("date")} />
        </label>
        <label className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
          <p className="text-xl font-bold">제목</p>
          <input className="border px-2 py-1 text-black" {...register("title")} />
        </label>
        <label className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
          <p className="text-xl font-bold">작가</p>
          <input className="border px-2 py-1 text-black" {...register("writer")} />
        </label>
        {!isNewImage && (
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <p className="text-xl font-bold">기존 사진</p>
            <div className="flex flex-col items-end">
              {data && (
                <img src={`${data?.image}/bulletin`} className="h-full w-[380px]" alt="이미지" />
              )}
              <button onClick={() => setNewImage(true)} className="text-red-500" type="button">
                삭제
              </button>
            </div>
          </div>
        )}
        {isNewImage && (
          <label className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <p className="text-xl font-bold">사진 업로드</p>
            <input type="file" accept="image/*" {...register("image")} />
          </label>
        )}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
          <p className="text-xl font-bold">글</p>
          <Editor defaultValue={content} setValue={setContent} />
        </div>
        <button
          disabled={isPending}
          className="mt-5 rounded-md bg-blue-500 py-2 font-bold text-white"
        >
          추천도서 수정
        </button>
      </form>
    </div>
  );
};

export default BookCreatePage;
