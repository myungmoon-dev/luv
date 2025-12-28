import { useDeleteHomeWorship, useGetHomeWorship } from "@/query/homeWorship";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
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
      <div className="flex min-h-screen items-center justify-center">
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
          push("/discipleship/homeworship");
        },
        onError: () => {
          alert("비밀번호가 일치하지 않습니다.");
        },
      },
    );
  };

  const handleClickUpdate = () => {
    push(`${pathname}/edit`);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* 헤더 */}
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4">
        <button
          onClick={() => push("/discipleship/homeworship")}
          className="flex items-center gap-2 text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-base">뒤로</span>
        </button>
        <h1 className="absolute left-1/2 max-w-[60%] -translate-x-1/2 truncate text-lg font-semibold">
          {data?.title}
        </h1>
        <div className="w-16"></div>
      </div>

      {/* 컨텐츠 */}
      <div className="flex flex-col gap-4 p-4">
        {/* 정보 및 버튼 */}
        <div className="flex flex-col gap-3 border-b border-gray-200 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>
                {data?.date && format(new Date(data.date), "yyyy년 M월 d일", { locale: ko })}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="font-semibold">{data?.userName}</span>
            </div>
          </div>
          <div className="flex gap-2 pt-2">
            <button
              onClick={handleClickUpdate}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-gray-400 hover:bg-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              수정
            </button>
            <button
              onClick={handleClickDelete}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-red-300 hover:bg-red-50 hover:text-red-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              삭제
            </button>
          </div>
        </div>

        {/* 이미지 */}
        {data?.imageUrls && data.imageUrls.length > 0 && (
          <div className="flex flex-col gap-2">
            {data.imageUrls.map((imageUrl) => (
              <div key={imageUrl} className="overflow-hidden rounded-lg border border-gray-300">
                <img
                  src={imageUrl}
                  alt="예배 이미지"
                  className="h-auto w-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        )}

        {/* 내용 */}
        <div className="prose prose-sm max-w-none break-words">
          <SafeHTML html={data?.content} />
        </div>

        {/* 댓글 */}
        <div className="mt-6 p-40">
          <HomeWorshipDetailComments />
        </div>
      </div>
    </div>
  );
};

export default HomeWorshipDetail;
