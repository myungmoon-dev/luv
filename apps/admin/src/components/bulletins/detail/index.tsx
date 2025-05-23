import { useDeleteBulletin, useGetBulletin } from "@/query/bulletin";
import dayjs from "dayjs";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { Spinner } from "ui";

const Bulletin = () => {
  const params = useParams();
  const bulletinId = params?.id as string;

  const { push } = useRouter();

  const { data: bulletin, isLoading } = useGetBulletin();

  const { mutate } = useDeleteBulletin();

  const handleDeleteBulletin = () => {
    if (!confirm("삭제하시겠습니까?")) return;
    mutate(bulletinId, {
      onSuccess: () => {
        alert("삭제되었습니다.");
        push("/bulletins");
      },
      onError: () => {
        alert("에러가 발생했습니다");
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
      <h1 className="mb-2 text-3xl font-bold">{bulletin?.title}</h1>
      <div className="mb-10 flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-500">
            날짜: {dayjs(bulletin?.date).format("YYYY-MM-DD")}
          </p>
          <p className="text-sm text-slate-500">
            생성일: {dayjs(bulletin?.createdAt).format("YYYY-MM-DD HH:mm:ss")}
          </p>
        </div>
        <button onClick={handleDeleteBulletin} className="text-red-500">
          삭제
        </button>
      </div>
      <div className="flex flex-col gap-5">
        {bulletin?.imageUrls.map((imageUrl) => (
          <div key={imageUrl} className="relative h-[550px] w-[868px]">
            <Image src={`${imageUrl}`} fill={true} alt="주보" objectFit="contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bulletin;
