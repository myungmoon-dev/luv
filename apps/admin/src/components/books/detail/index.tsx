import { Button } from "@/components/ui/button";
import { useDeleteBook, useGetBook } from "@/query/books";
import dayjs from "dayjs";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { SafeHTML, Spinner } from "ui";

const BookDetail = () => {
  const { push } = useRouter();
  const params = useParams();
  const bookId = params?.id as string;

  const { data, isPending } = useGetBook({ bookId });
  const { mutate } = useDeleteBook();

  const handleUpdateBook = () => {
    push(`/books/${bookId}/update`);
  };
  const handleDeleteBook = () => {
    if (!confirm("삭제하시곘습니까?")) return;
    mutate(
      { bookId },
      {
        onSuccess: () => {
          toast("삭제 완료되었습니다.");
          push("/books");
        },
      },
    );
  };

  if (isPending)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold">{data?.title}</h1>
      <div className="mb-10 flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-500">날짜: {data?.date}</p>
          <p className="text-sm text-slate-500">
            생성일: {dayjs(data?.createdAt).format("YYYY-MM-DD")}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleUpdateBook}>
            수정
          </Button>
          <Button variant="destructive" onClick={handleDeleteBook}>
            삭제
          </Button>
        </div>
      </div>
      <p className="mb-2">작가: {data?.writer}</p>
      <SafeHTML html={data?.content} />
      <div className="mt-10 flex flex-col gap-5">
        {data?.imageUrls.map((imageUrl) => (
          <div key={imageUrl} className="relative h-[350px] w-full">
            <Image
              src={`${imageUrl}`}
              alt={`${data?.title}_이미지`}
              fill={true}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookDetail;
