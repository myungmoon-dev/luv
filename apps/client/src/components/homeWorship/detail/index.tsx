import { useDeleteHomeWorship, useGetHomeWorship } from "@/query/homeWorship";
import dayjs from "dayjs";
import { useParams, usePathname, useRouter } from "next/navigation";
import { SafeHTML, Spinner } from "ui";
import HomeWorshipDetailComments from "./comments";

const HomeWorshipDetail = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const homeWorshipId = params?.id as string;

  const { data, isPending } = useGetHomeWorship({ homeWorshipId });
  const { mutate } = useDeleteHomeWorship();

  if (isPending)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  const handleClickDelete = () => {
    const password = prompt("비밀번호를 입력해주세요.");
    if (!password) return alert("비밀번호를 입력해주세요.");
    mutate(
      { homeWorshipId, password },
      {
        onSuccess: () => {
          alert("삭제되었습니다.");
          push("/homeworship");
        },
        onError: (err: any) => {
          alert("비밀번호가 일치하지 않습니다.");
        },
      },
    );
  };

  const handleClickUpdate = () => {
    push(`${pathname}/edit`);
  };

  return (
    <div className="px-5 sm:px-10 md:px-20 lg:px-28 xl:px-36 2xl:mx-auto 2xl:max-w-screen-lg 2xl:px-40">
      <h1 className="mb-2 font-SCoreDream text-3xl">{data?.title}</h1>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <p className="mb-10 text-sm text-slate-500">예배일: {dayjs(data?.date).format("YYYY-MM-DD")}</p>
          <p className="mb-10 text-sm text-slate-500">|</p>
          <p className="mb-10 text-sm text-slate-500">생성일: {dayjs(data?.createdAt).format("YYYY-MM-DD")}</p>
        </div>
        <div className="flex gap-2">
          <button onClick={handleClickUpdate} className="mb-10 text-sm text-blue-500">
            수정
          </button>
          <button onClick={handleClickDelete} className="mb-10 text-sm text-red-500">
            삭제
          </button>
        </div>
      </div>
      <div className="mb-10">
        <SafeHTML html={data?.content} />
        {data?.imageUrls.map((imageUrl) => (
          <div key={imageUrl} className="relative h-full w-full">
            <img src={imageUrl} alt="이미지" />
          </div>
        ))}
      </div>
      <HomeWorshipDetailComments />
    </div>
  );
};

export default HomeWorshipDetail;
