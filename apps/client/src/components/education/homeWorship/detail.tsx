import { useDeleteHomeWorship, useGetHomeWorship } from "@/query/homeWorship";
import useAuthStore from "@/store/auth";
import dayjs from "dayjs";
import { useParams, useRouter } from "next/navigation";
import { SafeHTML, Spinner } from "ui";

const HomeWorshipDetail = () => {
  const { push } = useRouter();
  const params = useParams();
  const homeWorshipId = params?.id as string;
  const userId = useAuthStore((state) => state.uid);

  const { data } = useGetHomeWorship({ homeWorshipId });
  const { mutate } = useDeleteHomeWorship();

  if (!data)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  const homeWorship = data.homeWorship;

  const isUsersHomeWorship = userId === homeWorship.userId;

  const handleClickDelete = () => {
    if (!confirm("삭제하시겠습니까?")) return;
    mutate(
      { homeWorshipId },
      {
        onSuccess: () => {
          alert("삭제되었습니다.");
          push("/education/home-worship");
        },
        onError: (err: any) => {
          alert(err.response.data.result);
        },
      },
    );
  };

  return (
    <div className="px-5 sm:px-10 md:px-20 lg:px-28 xl:px-36 2xl:px-40">
      <h1 className="mb-2 text-3xl font-bold">{homeWorship.title}</h1>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <p className="mb-10 text-sm text-slate-500">예배일: {dayjs(homeWorship.date).format("YYYY-MM-DD")}</p>
          <p className="mb-10 text-sm text-slate-500">|</p>
          <p className="mb-10 text-sm text-slate-500">생성일: {dayjs(homeWorship.createdAt).format("YYYY-MM-DD")}</p>
        </div>
        {isUsersHomeWorship && (
          <button onClick={handleClickDelete} className="mb-10 text-sm text-red-500">
            삭제
          </button>
        )}
      </div>
      <div className="mb-10">
        <SafeHTML html={homeWorship.content} />
        <div className="relative h-full w-full">
          <img src={`${homeWorship.image}/full`} alt="이미지" />
        </div>
      </div>
    </div>
  );
};

export default HomeWorshipDetail;
