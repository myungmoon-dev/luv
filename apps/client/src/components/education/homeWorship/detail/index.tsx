import { useDeleteHomeWorship, useGetHomeWorship, usePostHomeWorshipPasswordCheck } from "@/query/homeWorship";
import dayjs from "dayjs";
import { useParams, usePathname, useRouter } from "next/navigation";
import { SafeHTML, Spinner } from "ui";
import HomeWorshipDetailComments from "./comments";

const HomeWorshipDetail = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const homeWorshipId = params?.id as string;

  const { data } = useGetHomeWorship({ homeWorshipId });
  const { mutate } = useDeleteHomeWorship();
  const { mutate: passwordCheckMutate } = usePostHomeWorshipPasswordCheck();

  if (!data)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  const homeWorship = data.homeWorship;

  const handleClickDelete = () => {
    const password = prompt("비밀번호를 입력해주세요.");
    if (!password) return alert("비밀번호를 입력해주세요.");
    mutate(
      { homeWorshipId, password },
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

  const handleClickUpdate = () => {
    const password = prompt("비밀번호를 입력해주세요.");
    if (!password) return alert("비밀번호를 입력해주세요.");
    passwordCheckMutate(
      { homeWorshipId, password },
      {
        onSuccess: () => {
          push(`${pathname}/edit`);
        },
        onError: (err: any) => {
          console.log(err);
          alert(err.response.data.result);
        },
      },
    );
  };

  return (
    <div className="px-5 sm:px-10 md:px-20 lg:px-28 xl:px-36 2xl:mx-auto 2xl:max-w-screen-lg 2xl:px-40">
      <h1 className="font-SCoreDream mb-2 text-3xl">{homeWorship.title}</h1>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <p className="mb-10 text-sm text-slate-500">예배일: {dayjs(homeWorship.date).format("YYYY-MM-DD")}</p>
          <p className="mb-10 text-sm text-slate-500">|</p>
          <p className="mb-10 text-sm text-slate-500">생성일: {dayjs(homeWorship.createdAt).format("YYYY-MM-DD")}</p>
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
        <SafeHTML html={homeWorship.content} />
        <div className="relative h-full w-full">
          <img src={`${homeWorship.image}/full`} alt="이미지" />
        </div>
      </div>
      <HomeWorshipDetailComments />
    </div>
  );
};

export default HomeWorshipDetail;
