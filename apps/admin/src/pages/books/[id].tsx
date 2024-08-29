import { useGetBook } from "@/query/books";
import dayjs from "dayjs";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { SafeHTML, Spinner } from "ui";

const BookPage = () => {
  const { push } = useRouter();
  const params = useParams();
  const bookId = params.id as string;

  const { data, isLoading } = useGetBook({ bookId });

  if (isLoading)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  return (
    <div className="px-24 py-10">
      <button className="mb-10" onClick={() => push("/bulletins")}>
        {"<"} 뒤로가기
      </button>
      <h1 className="mb-2 text-3xl font-bold">{data?.title}</h1>
      <div className="mb-10 flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-500">날짜: {dayjs(data?.date).format("YYYY-MM-DD")}</p>
          <p className="text-sm text-slate-500">
            생성일: {dayjs(data?.createdAt).format("YYYY-MM-DD")}
          </p>
        </div>
        {/* <button onClick={handleDeleteBulletin} className="text-red-500">
          삭제
        </button> */}
      </div>
      <p className="mb-2">작가: {data?.writer}</p>
      <SafeHTML html={data?.content} />
      <div className="relative mt-10 h-[350px] w-full">
        <Image
          src={`${data?.image}/bulletin`}
          alt={`${data?.title}_이미지`}
          fill={true}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default BookPage;
