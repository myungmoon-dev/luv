import ConfirmDialog from "@/components/common/ConfirmDialog";
import { Button } from "@/components/ui/button";
import { useDeleteHomeWorship, useGetHomeWorship } from "@/query/homeWorship";
import dayjs from "dayjs";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { Spinner } from "ui";

const HomeWorshipDetail = () => {
  const params = useParams();
  const id = params?.id as string;
  const { push } = useRouter();

  const { data: homeworship, isLoading } = useGetHomeWorship();
  const { mutate } = useDeleteHomeWorship();

  const handleDelete = () => {
    mutate(id, {
      onSuccess: () => {
        alert("삭제되었습니다.");
        push("/homeworship");
      },
      onError: () => {
        alert("에러가 발생했습니다.");
      },
    });
  };

  if (isLoading)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold">{homeworship?.title}</h1>
      <div className="mb-10 flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-500">날짜: {homeworship?.date}</p>
          <p className="text-sm text-slate-500">작성자: {homeworship?.userName}</p>
          <p className="text-sm text-slate-500">
            공지 여부: {homeworship?.isPinned ? "✅ 공지" : "❎ 일반"}
          </p>
          <p className="text-sm text-slate-500">
            생성일: {dayjs(homeworship?.createdAt).format("YYYY-MM-DD HH:mm:ss")}
          </p>
        </div>
        <ConfirmDialog
          trigger={<Button variant="destructive">삭제</Button>}
          onConfirm={handleDelete}
        />
      </div>
      {homeworship?.content && (
        <div
          className="mb-8 text-sm leading-relaxed text-slate-700"
          dangerouslySetInnerHTML={{ __html: homeworship.content }}
        />
      )}
      <div className="flex flex-col gap-5">
        {homeworship?.imageUrls.map((url) => (
          <div key={url} className="relative h-[550px] w-full max-w-[868px]">
            <Image src={url} fill alt="가정예배 이미지" className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeWorshipDetail;
